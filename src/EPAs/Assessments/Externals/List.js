import React from 'react'
import {connect} from 'react-redux'
import needsData from '../../../Core/needsData'
import { selectors, actions } from './Store'
import { selectors as requestsSelectors, actions as requestsActions } from './Requests/Store'
import COLORS from "../../../colors"
import { overEvery, over } from '../../../Utils/utils.js'

// TODO: test with student with external assessments

const loaded = overEvery([ selectors.loaded, requestsSelectors.loaded ])
const load = () => over([ actions.load(), requestsActions.load() ])
const stateToProps = state => ({ assessments: [].concat(selectors.getItems(state), requestsSelectors.getItems(state)), selected: selectors.getFilter(state) })
export default [needsData(loaded, load), connect(stateToProps, actions)].reduceRight((fx,f) => f(fx),
    ({assessments, selected, setFilter }) =>
        assessments.length ?
        <div>
            <button className='btn btn-sm color-button-color width-100' onClick={() => setFilter(null)}>Alle</button>
            <ul className='list-group'>
                {assessments.map(e =>
                    <li className="list-group-item d-inline font-weight-bold" key={e.id}
                        onClick={() => e.open || setFilter(e.id)}
                        style={{ backgroundColor: selected === e.id ? COLORS.background.grey2: COLORS.background.base }}>
                        <div className="row">
                            <div className="col-sm-7">
                                {e.name} <span style={{fontSize: '.8em'}} className='ml-1 font-italic font-weight-normal'>({e.email})</span>
                            </div>
                            <div className="col-sm-5">
                                <div className="row text-nowrap">
                                    <span className="col-6">
                                        <span style={{ backgroundColor: COLORS.background.grey2 }} className="badge px-2" >{ e.open && 'noch offen '}</span>
                                    </span>
                                    <div className='col-6 text-right'>{e.datum.toLocaleDateString()}</div>
                                </div>
                            </div>
                        </div>
                    </li>
                )}
            </ul>
        </div>
        :
        <div >
            Hier sind künftig deine Fremdeinschätzungen zu sehen, die du von Dozierenden angefordert oder bereits erhalten hast.
        </div>
)

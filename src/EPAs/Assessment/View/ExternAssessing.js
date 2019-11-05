import React from 'react'
import {connect} from 'react-redux'
import { withTranslation } from 'react-i18next'
import {selectors} from '../Store'
import { selectors as epasSelectos, actions as epasActions } from '../../Store'
import COLORS from "../../../colors"

const stateToProps = state => ({ assessments: selectors.getItems(state), selected: epasSelectos.getFilter(state) })
export default [withTranslation(), connect(stateToProps, epasActions)].reduceRight((fx,f) => f(fx), 
    ({ t, assessments, selected, setFilter }) => 
        assessments && assessments.length ? 
        <div>
            <button className='btn btn-sm color-button-color width-100' onClick={() => setFilter(null)}>Alle</button>
            <ul className='list-group'>
                {assessments.map(e =>
                    <li className="list-group-item d-inline font-weight-bold" key={e.name}
                        onClick={() => e.open || setFilter(e.id)}
                        style={{ backgroundColor: selected === e.id ? COLORS.background.grey2: COLORS.background.base }}>
                        <div className="row">
                            <div className="col-sm-7">
                                {e.name}<span style={{fontSize: '.8em'}} className='ml-1 font-italic font-weight-normal'>({e.email})</span>
                            </div>
                            <div className="col-sm-5">
                                <div className="row text-nowrap">
                                    { e.open && 
                                        <span className="col-6">
                                            <span style={{ backgroundColor: COLORS.background.grey2 }} className="badge px-2" >{t('noch offen')}</span>
                                        </span>
                                    }
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
            Hier sind künftig deine Fremeinschätzungen zu sehen, die du von Dozierenden erhalten hast.
        </div>
)
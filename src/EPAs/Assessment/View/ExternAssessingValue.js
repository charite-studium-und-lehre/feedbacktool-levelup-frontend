import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash/fp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { SlideDown } from 'react-slidedown'
import makeExtendable from '../../../Core/makeExtendable'
import Level from '../../Level'
import { selectors } from '../../Store'

const ExternAssessingWithValue = makeExtendable()(({ toggleExtended, extended, externals }) =>
    <div className="container-fluid">
        <div className="row" >
            { !!externals.length &&
                <div className="col-sm-4 offset-sm-8 text-center" >
                    <div onClick={toggleExtended}>
                        <div className="font-italic" style={{cursor:'pointer', fontSize: '.8rem'}}>
                            ({_.sortBy(e => -e.datum, externals)[0].datum.toLocaleDateString()})
                        </div>
                        <span style={{cursor:'pointer'}}><FontAwesomeIcon icon={extended? faMinus : faPlus}/></span>  
                    </div>
                </div>
            }
        </div>
        <div className="row" >
            { extended && 
                <div className="col-12">
                    <SlideDown className="animated fast">
                        <ul className='list-group mt-1 mb-2'>
                        {externals.map(e => 
                            <li className='list-group-item border' key={e.id} style={{ fontWeight:'bold'}}>
                                <div className='row'>
                                    <div className="col-5 d-flex flex-column justify-content-around">
                                        <div>{e.name}</div>
                                    </div>
                                    <div className='col-7 text-center'>
                                        <Level
                                        colorBackground=' hsl(15, 100%, 25%, .2)'
                                        color='hsl(15, 100%, 25%)'
                                        width='.8rem'
                                        height='.6rem'
                                        value={e.value}
                                        />
                                        <div className='text-center'>{e.datum.toLocaleDateString()}</div>
                                    </div>
                                </div>
                            </li>
                        )}
                        </ul>
                    </SlideDown>
                </div>
            }
        </div>
    </div>)

const stateToProps = (state, ownProps) => ({ 
    externals: selectors.getAssessmentsForItem(state, ownProps.entryId) 
})
export default connect(stateToProps)(ExternAssessingWithValue)
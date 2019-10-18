import React from 'react'
import _ from 'lodash/fp'
import { connect } from 'react-redux'
import needsData from '../../Core/needsData'
import { selectors, actions } from './Store'
import Item from './Item'

export const Separator = () => <div className="px-2 flex-grow-1 d-flex align-items-center"><div className="w-100" style={{borderTop: '1px solid lightgrey', height: 0}}></div></div>

const stateToProps = state => ({ data: selectors.getData(state) })
const Newsfeed = _.compose([needsData(selectors.loaded, actions.load), connect(stateToProps)])(({ data }) => 
    <div className="position-relative h-100" style={{minHeight: '10rem'}}>
        <div className="position-absolute overflow-auto p-1" style={{top: 0, bottom: 0, left: 0, right: 0}}>
            { _.map( g => 
                <div key={g[0].timesemester}>
                    <div className="text-center font-italic mt-3 d-flex" style={{ fontSize: '.8rem' }}>
                        <Separator />
                        <div style={{color: 'grey'}}>{g[0].timesemester}</div>
                        <Separator />
                    </div>
                    {g.map( d => 
                        <Item key={d.link} icon={d.icon} color={d.color} date={d.date} link={d.link}>
                            <d.comp {...d} /> 
                        </Item>
                    )}
                </div>
            )(_.groupBy( d => d.timesemester )(data))}
        </div>
    </div>
)

export default Newsfeed
import React from 'react'
import _ from 'lodash/fp'
import { connect } from 'react-redux'
import needsData from '../../Core/needsData'
import { selectors, actions } from './Store'
import Item from './Item'

const stateToProps = state => ({ data: selectors.getData(state) })
const Newsfeed = _.compose([needsData(selectors.loaded, actions.load), connect(stateToProps)])(({ data }) =>
    <div className="position-relative h-100" style={{minHeight: '10rem'}}>
        <div className="position-absolute overflow-auto p-1" style={{top: 0, bottom: 0, left: 0, right: 0}}>
            { data.map( d => 
                <Item icon={d.icon} color={d.color} date={d.date}>
                    <d.comp {...d} /> 
                </Item>
            )}
        </div>
    </div>

)

export default Newsfeed
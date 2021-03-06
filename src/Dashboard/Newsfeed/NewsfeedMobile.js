import React from 'react'
import _ from 'lodash/fp'
import { connect } from 'react-redux'
import needsData from '../../Core/needsData'
import { selectors, actions } from './Store'
import Item from './Item'

const stateToProps = state => ({ data: selectors.getData(state) })
const Newsfeed = _.compose([needsData(selectors.loaded, actions.load), connect(stateToProps)])(({ data }) => 
    <div className="pt-3">
        <div className="text-center">
        { !_.size(data) && <div className="p-3">Hier werden zukünftig deine Prüfungen angezeigt.</div> }
        </div>
        { !!_.size(data) && data[0].map( d => 
            <Item key={d.link} icon={d.icon} color={d.color} link={d.link}>
                <d.comp {...d} /> 
            </Item>
        )}
    </div>
)

export default Newsfeed
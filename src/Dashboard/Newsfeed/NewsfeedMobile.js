import React from 'react'
import {connect} from 'react-redux'
import needsData from '../../Core/needsData'
import {selectors, actions} from './Store'
import Item from './Item'
import {compose, size} from '../../Utils/utils'

const stateToProps = state => ({data: selectors.getData(state)})
const Newsfeed = compose([needsData(selectors.loaded, actions.load), connect(stateToProps)])(({data}) =>
    <div className="pt-3">
        <div className="text-center">
        { !size(data) && <div className="p-3">Hier werden zukünftig deine Prüfungen angezeigt.</div> }
        </div>
        { !!size(data) && data[0].map( d =>
            <Item key={d.link} icon={d.icon} color={d.color} link={d.link}>
                <d.comp {...d} />
            </Item>
        )}
    </div>
)

export default Newsfeed

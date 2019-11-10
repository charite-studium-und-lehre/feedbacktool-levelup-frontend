import React from 'react'
import _ from 'lodash/fp'
import {connect} from 'react-redux'
import Item from './Item'
import Tabs from '../../Utils/Tabs'
import needsData from '../../Core/needsData'
import { selectors, actions } from '../Store'

const Title = connect((state, ownProps) => ({label: selectors.getById(state)(ownProps.entryId).label}))(props => props.label)

const stateToProps = state => ({ root: selectors.getRoot(state) })
const EpasTabs = _.compose([
    needsData(selectors.loaded, actions.load),
    connect(stateToProps)
])(
    ({ root }) =>
            <Tabs inactiveColor="#e9ecef">
                {root.entries.map(e => <Item key={e} title={<Title entryId={e}/>} entryId={e}/>)}
            </Tabs>
)

export default EpasTabs
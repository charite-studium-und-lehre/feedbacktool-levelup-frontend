import React from 'react'
import _ from 'lodash/fp'
import {connect} from 'react-redux'
import Item from './Item'
import Tabs from '../Utils/Tabs'
import needsData from '../Core/needsData'
import Controls from './Assessment/View/Controls'
import {selectors, actions} from './Store'
import {selectors as assessmentSelectors, actions as assessmentActions } from './Assessment/Store'

const stateToProps = state => ({filter: assessmentSelectors.getFilter(state), root: selectors.getItemByLabel(state, 'root')})

const Title = connect((state, ownProps) => ({label: selectors.getById(state, ownProps.entryId).label}))(props => props.label)

const AssessmentsView = _.compose([
    needsData(selectors.loaded, actions.load),
    connect(stateToProps, {resetFilter: () => assessmentActions.setFilter(null)})])(
    ({root, resetFilter}) => {
        return <div className="card mt-2">
            <Controls resetFilter={resetFilter}/>
            <Tabs inactiveColor="#e9ecef">
                {root.entries.map(e => <Item key={e} title={<Title entryId={e}/>} entryId={e}/>)}
            </Tabs>
        </div>
    })

export default () => <AssessmentsView/>
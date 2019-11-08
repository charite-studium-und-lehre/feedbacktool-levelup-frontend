import React from 'react'
import _ from 'lodash/fp'
import {connect} from 'react-redux'
import Item from './Item'
import Tabs from '../Utils/Tabs'
import needsData from '../Core/needsData'
import Controls from './Assessment/View/Controls'
import { selectors, actions } from './Store'
import { selectors as externalAssessmentSelectors, actions as externalAssessmentActions } from './Assessment/ExternalStore'
import { selectors as assessmentsSelectors, actions as assessmentsActions } from '../EPAs/Assessment/Store'

const stateToProps = state => ({filter: externalAssessmentSelectors.getFilter(state), root: selectors.getRoot(state)})

const Title = connect((state, ownProps) => ({label: selectors.getById(state)(ownProps.entryId).label}))(props => props.label)

const loaded = state => [ 
    selectors.loaded, 
    externalAssessmentSelectors.loaded, 
    assessmentsSelectors.loaded 
].reduce( (f,g) => g(state) && f, true )

const load = () => (...params) => [ 
    actions.load(), 
    externalAssessmentActions.load(), 
    assessmentsActions.load() 
].reduce( (f,g) => g(...params), null )

const AssessmentsView = _.compose([
    needsData(loaded, load),
    connect(stateToProps, {resetFilter: () => externalAssessmentActions.setFilter(null)})])(
    ({root, resetFilter}) => {
        return <div className="card mt-2">
            <Controls resetFilter={resetFilter}/>
            <Tabs inactiveColor="#e9ecef">
                {root.entries.map(e => <Item key={e} title={<Title entryId={e}/>} entryId={e}/>)}
            </Tabs>
        </div>
    })

export default () => <AssessmentsView/>
import React from 'react'
import _ from 'lodash/fp'
import {connect} from 'react-redux'
import Item from './assessmentViewComponents/Item'
import Tabs from '../Core/Tabs'
import needsData from '../Core/needsData'
import Assessment from './assessmentViewComponents/Assessment'
import {selectors, actions} from './Store'

const stateToProps = state => ({filter: selectors.getFilter(state), root: selectors.getItemByLabel(state, 'root')})

const Title = connect((state, ownProps) => ({entry: selectors.getItemById(state, ownProps.entryId)}))(props => props.entry.label)

const AssessmentsView = _.compose([needsData(selectors.loaded, actions.load), connect(stateToProps)])(({root}) => {
  return <div className="card mt-2">
        <Assessment/>
        <Tabs inactiveColor="#e9ecef">
            {root.entries.map(e =>
                <div key={e} title={
                    <Title entryId={e}/>
                }>
                    <Item entryId={e}/>
                </div>
            )}
        </Tabs>
    </div>
})

export default () => <AssessmentsView/>
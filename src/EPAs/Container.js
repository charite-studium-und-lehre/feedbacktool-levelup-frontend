import React from 'react'
import _ from 'lodash/fp'
import {connect} from 'react-redux'
import Item from './Item'
import Tabs from '../Core/Tabs'
import Legend from '../Charting/Legend'
import Legends from '../Core/LegendTexts'
import needsData from '../Core/needsData'
import Assessment from './Assessment'
import {selectors, actions} from './Store'
import {faEnvelopeOpenText} from "@fortawesome/free-solid-svg-icons"
import {Button} from "./Toolbar"
import AssessmentsViewTable from "./assessmentsView/AssessmentsViewTable";

const stateToProps = state => ({filter: selectors.getFilter(state), root: selectors.getItemByLabel(state, 'root')})

const Title = connect((state, ownProps) => ({entry: selectors.getItemById(state, ownProps.entryId)}))(props => props.entry.label)

const Container = _.compose([needsData(selectors.loaded, actions.load), connect(stateToProps)])(({root}) =>
    <div className="card mt-2 p-1">
        <Assessment/>
        <Tabs>
            {root.entries.map(e =>
                <div key={e} className="p-2" title={
                    <Title entryId={e}/>
                }>
                    <Item entryId={e}/>
                </div>
            )}
        </Tabs>
    </div>)

const getAssessmentButton =
    <Button icon={faEnvelopeOpenText}>Fremdbewertung einfordern</Button>

export default () =>
    <div style={{fontSize: '.9rem'}}>
        <div className="card p-2">
            <Legend button={getAssessmentButton} video={true} title={Legends.EPAs.Main.title}>{Legends.EPAs.Main.text}</Legend>
        </div>
        <Container/>
        <AssessmentsViewTable/>
    </div>
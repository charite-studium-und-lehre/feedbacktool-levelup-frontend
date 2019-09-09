import React from 'react'
import _ from 'lodash/fp'
import { connect } from 'react-redux'
import Item from './Item'
import Tabs from '../Core/Tabs'
import Legend from '../Charting/Legend'
import Legends from '../Core/LegendTexts'
import needsData from '../Core/needsData'
import Toolbar from './Toolbar'
import { selectors, actions } from './Store'
const stateToProps = state => ({ filter: selectors.getFilter(state), root: selectors.getItemByLabel(state, 'root') })

const Title = connect((state, ownProps) => ({ entry: selectors.getItemById(state, ownProps.entryId) }))( props => props.entry.label )

const Container = _.compose([needsData(selectors.loaded, actions.load), connect(stateToProps)])(({ root }) =>
    <div>
        <Toolbar/>
        <div className="card mt-4 p-2">
            <Tabs>
            { root.entries.map(e =>
                <div key={e} className="p-2" title={<Title entryId={e} />}>
                    <Item entryId={e} /> 
                </div>
            )}
            </Tabs>
        </div>
    </div>)

const LegendWrapper = () =>
    <div style={{ fontSize: '.9rem' }}>
        <div className="card p-2">
            <Legend title={Legends.Practicals.Main.title}>{Legends.Practicals.Main.text}</Legend>
        </div>
        <Container />
    </div>

export default LegendWrapper
import React from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import { asTabs } from '../Core/Tabs'
import Legend from '../Charting/Legend'
import Legends from '../Core/LegendTexts'
import needsData from '../Core/needsData'
import Toolbar from './Toolbar'
import { selectors, actions } from './Store'
const stateToProps = state => ({ root: selectors.getItemByLabel(state, 'root') })

const Tab = connect((state, ownProps) => ({ entry: selectors.getItemById(state, ownProps.entryId) }))(props => 
    <span className="btn-group btn-group-sm mr-1 mb-3" role="group" aria-label="Basic example" onClick={props.onClick} key={props.entryId}>
       <button type="button" className="btn " style={{backgroundColor:'rgb(72, 80, 26)', color:'white'}}>{props.entry.label}</button>
    </span>
)
const Tabs = asTabs(props => props.entries.map((e, i) => <Tab key={i} onClick={() => props.selectTab(i)} entryId={e}></Tab>))

const Container = needsData(connect(stateToProps)(({ root }) => {
    return (
        <div>
            <Toolbar/>
            <div className="card mt-4 p-2">
                <Tabs entries={root.entries}>
                { root.entries.map(e =>
                    <div key={e}>
                        <Item  entryId={e} level={1} />
                    </div>
                )}
                </Tabs>
            </div>
        </div>)
}), selectors.loaded, actions.load)

const LegendWrapper = () =>
    <div style={{ fontSize: '.9rem' }}>
        <div className="card p-2">
            <Legend title={Legends.Practicals.Main.title}>{Legends.Practicals.Main.text}</Legend>
        </div>
        <Container />
    </div>

export default LegendWrapper
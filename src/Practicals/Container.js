import React from 'react'
import _ from 'lodash/fp'
import { connect } from 'react-redux'
import Item from './Item'
import { asTabs } from '../Core/Tabs'
import Legend from '../Charting/Legend'
import Legends from '../Core/LegendTexts'
import needsData from '../Core/needsData'
import Toolbar from './Toolbar'
import { selectors, actions } from './Store'
const stateToProps = state => ({ filter: selectors.getFilter(state), root: selectors.getItemByLabel(state, 'root') })

const Tab = connect((state, ownProps) => ({ entry: selectors.getItemById(state, ownProps.entryId) }))(props => 
    props.entry ? <span className="btn-group btn-group-sm mr-1 mb-3" role="group" onClick={props.onClick} key={props.entryId}>
       <button type="button" className="btn " style={{backgroundColor:'rgb(72, 80, 26)', color:'white'}}>{props.entry.label}</button>
    </span> : <span>gefiltert</span>
)
const Tabs = asTabs(props => props.entries.map((e, i) => <Tab key={i} onClick={() => props.selectTab(i)} entryId={e}></Tab>))

const Container = _.compose([needsData(selectors.loaded, actions.load), connect(stateToProps, actions)])(({ filter, root, setFilter }) =>
    <div>
        <Toolbar/>
        <div className="card mt-4 p-2">
            <div className="m-2">
                <span className="d-inline-block px-4" onClick={() => setFilter(filter - 1)}>-</span>
                {filter}
                <span className="d-inline-block px-4" onClick={() => setFilter(filter + 1)}>+</span>
            </div>
            <Tabs entries={root.entries}>
            { root.entries.map(e =>
                <div key={e} className="p-2">
                    <Item entryId={e} level={1} />
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
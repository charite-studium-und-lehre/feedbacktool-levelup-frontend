import React, { useState } from 'react'
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
    <div onClick={props.onClick} key={props.entryId} className="mr-2"><h5>{props.entry.label}</h5></div>
)
const Tabs = asTabs(props => props.entries.map((e, i) => <Tab key={i} onClick={() => props.selectTab(i)} entryId={e}></Tab>))

const Container = needsData(connect(stateToProps)(({ root }) => {
    const [ edit, setEdit ] = useState(false)
    const toggleEdit = () => setEdit(!edit)

    return (
        <div>
            <Toolbar toggleEdit={toggleEdit} edit={edit} />
            <div className="card mt-2 p-2">
                <Tabs entries={root.entries}>
                { root.entries.map(e =>
                    <div key={e}>
                        <Item edit={edit} entryId={e} level={1} />
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
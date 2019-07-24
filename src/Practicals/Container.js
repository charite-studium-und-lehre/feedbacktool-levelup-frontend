import React, { useState } from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import Legend from '../Charting/Legend'
import Legends from '../Core/LegendTexts'
import needsData from '../Core/needsData'
import Toolbar from './Toolbar'
import { selectors, actions } from './Store'

const stateToProps = state => ({ root: selectors.getItemByLabel(state, 'root') })

const Container = needsData(connect(stateToProps)(({ root }) => {
    const [ edit, setEdit ] = useState(false)
    const toggleEdit = () => setEdit(!edit)

    return (
        <div>
            <Toolbar toggleEdit={toggleEdit} edit={edit} />
            <div className="row">
                { root.entries.map(e =>
                    <div key={e} className="col-12">
                        <Item edit={edit} entryId={e} level={1} />
                    </div>
                )}
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
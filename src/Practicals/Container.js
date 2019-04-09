import React from 'react'
import Item from './Item'
import tree from './tree'
import Score from './Score'
import Legend from '../Charting/Legend'
import LegendTexts from '../Core/LegendTexts'
import Toolbar from './Toolbar'
const legend = LegendTexts.Practicals.Main

class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = { edit: false }
    }

    updateValue = (entry, prop, value) => {
        entry[prop] = Math.min(Math.max(entry[prop] + value, 0), 5)
        this.setState({ })
    }
    
    toggleEdit = () => this.setState({edit: !this.state.edit})

    render() {
        return (
        <div style={{fontSize: '.9rem'}}>
            <div className="card p-2">
                <Legend title={legend.title}>{legend.text}</Legend>
                <div className="row">
                    <div className="col-12">
                        <Score headings={true} entry={tree} />
                    </div>
                </div>
            </div>
            <Toolbar toggleEdit={this.toggleEdit} edit={this.state.edit} />
            <div className="row">
                {tree.entries.map(e =>
                    <div key={e.label} className="col-md-12">
                    <Item edit={this.state.edit} updateValue={this.updateValue} entry={e} level={1} />
                    </div>
                )}
            </div>
        </div>)
    }
}

export default Container
import React from 'react'
import Item from './Item'
import tree from './tree'
import Score from './Score'
import Legend from '../Charting/Legend'
import LegendTexts from '../Core/LegendTexts'
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
    
    render() {
        return (
        <div style={{fontSize: '.9rem', marginBottom: '2.5rem'}}>
            <div className="card p-2">
                <Legend title={legend.title}>{legend.text}</Legend>
                <div className="row">
                    <div className="col-12">
                        <Score headings={true} entry={tree} />
                    </div>
                </div>
            </div>
            <div className="row">
                {tree.entries.map(e =>
                    <div key={e.label} className="col-md-12">
                    <Item edit={this.state.edit} updateValue={this.updateValue} entry={e} level={1} />
                    </div>
                )}
            </div>
            <div className="position-fixed animated w-100 bg-white text-right with-shadow p-1" style={{zIndex: 1, minHeight: '2.5rem', bottom: 0, left: 0}}>
                <div className="d-inline-block">
                    <button className="btn btn-sm btn-primary mr-2">exportieren</button>
                </div>
                <div className="d-inline-block">
                    <button 
                        className={`btn btn-sm ${this.state.edit ? 'btn-success' : 'btn-primary'} ${this.state.edit ? 'active' : ''}`} 
                        data-toggle="button" 
                        aria-pressed={this.state.edit} 
                        autoComplete="off"
                        onClick={() => this.setState({edit: !this.state.edit})}>{this.state.edit ? 'speichern' : 'bearbeiten'}
                    </button>
                </div>
            </div>
        </div>)
    }
}

export default Container
import React from 'react'
import Item from './Item'
import tree from './tree'
import Score from './Score';

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
        <div style={{fontSize: '.9rem'}}>
            <div className="card p-2">
                <h5>Mein Level</h5>
                <div className="row">
                    <div className="col-sm-9">
                        <Score headings={true} entry={tree} />
                    </div>
                    <div className="col-sm-3 text-right">
                        <button 
                            className={`btn btn-sm ${this.state.edit ? 'btn-success' : 'btn-primary'} ${this.state.edit ? 'active' : ''}`} 
                            data-toggle="button" 
                            aria-pressed={this.state.edit} 
                            autoComplete="off"
                            onClick={() => this.setState({edit: !this.state.edit})}>{this.state.edit ? 'speichern' : 'bearbeiten'}
                        </button>
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
            <div className="text-right mt-2">
                <button className="btn btn-sm btn-primary ml-2">exportieren</button>
            </div>
        </div>)
    }
}

export default Container
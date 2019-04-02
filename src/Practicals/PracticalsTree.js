import React from 'react'
import PracticalsItem from './PracticalsItem'
import tree from './tree'
import PracticalsScore from './PracticalsScore';

class PracticalsTree extends React.Component {
    constructor(props) {
        super(props)
        this.state = { edit: false }
    } 
    
    render() {
        return (
        <div style={{fontSize: '.9rem'}}>
            <div className="card p-2">
                <h5>Mein Level</h5>
                <div className="row">
                    <div className="col-8">
                        <PracticalsScore headings={true} entry={tree} />
                    </div>
                    <div className="col-4 text-right">
                        <button 
                            className={`btn btn-sm btn-primary ${this.state.edit ? 'active' : ''}`} 
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
                    <PracticalsItem edit={this.state.edit} extended={false} entry={e} level={1} />
                    </div>
                )}
            </div>
            <div className="text-right mt-2">
                <button 
                    className="btn btn-sm btn-primary ml-2"
                    onClick={() => this.setState({edit: !this.state.edit})}>exportieren
                </button>
            </div>
        </div>)
    }
}

export default PracticalsTree
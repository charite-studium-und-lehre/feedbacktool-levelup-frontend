import React from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import Score from './Score'
import { selectors } from './Store'

class Container extends React.Component {
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
                    <div className="col-sm-9">
                        <Score headings={true} entry={this.props.root} />
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
                {this.props.root.entries.map(e =>
                    <div key={e} className="col-12">
                        <Item edit={this.state.edit} entryId={e} level={1} />
                    </div>
                )}
            </div>
            <div className="text-right mt-2">
                <button className="btn btn-sm btn-primary ml-2">exportieren</button>
            </div>
        </div>)
    }
}

export default connect(state => ({ root: selectors.getItemByLabel(state, 'root') }))(Container)
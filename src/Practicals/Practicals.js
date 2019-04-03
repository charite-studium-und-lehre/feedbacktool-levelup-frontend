import React from 'react'
import PracticalsTree from './PracticalsTree'
import PracticalsList from './PracticalsList'
import tree from './tree'

const toolbarHeight = '2.9rem'
class Practicals extends React.Component {
    constructor(props) {
        super(props)
        this.state = { edit: false, tree: tree }
    } 

    updateEntry(newEntry) {
        
    }
    
    toggleEdit() {
        this.setState({ edit: !this.state.edit })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="Practicals">
                    <div className="row">
                        <div className="col-12" style={{marginBottom: toolbarHeight}}>
                            <PracticalsTree tree={this.state.tree} edit={this.state.edit} />
                        </div>
                        {/* <div className="col-md-3">
                            <PracticalsList/>
                        </div> */}
                        <div className="bg-white with-shadow p-2 w-100 position-absolute text-right" style={{height: toolbarHeight, bottom: 0}}>
                            <button onClick={() => this.toggleEdit()} className={`btn btn-sm ${this.state.edit ? 'btn-success' : 'btn-primary'}`}>{this.state.edit ? 'speichern' : 'bearbeiten'}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Practicals


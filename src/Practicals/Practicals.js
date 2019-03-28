
import React, { Component } from 'react'
import PracticalsTree from './PracticalsTree'
import TätigkeitenList from './TätigkeitenList'
import "./practicals.css"

class Practicals extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="Practicals">
                    <div className="row">
                        <div className="col-md-9">
                            <PracticalsTree />
                        </div>
                        <div className="col-md-3">
                            {/* <PracticalsChart graphs={this.state.selectedGraphs} /> */}
                            <TätigkeitenList/>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
export default Practicals;


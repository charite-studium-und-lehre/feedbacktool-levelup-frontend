
import React, { Component } from 'react'
import PracticalsItem from './PracticalsItem'
import D3chart from "./scaleLine"
import PracticalCheckbox from './PracticalCheckbox'
import TätigkeitenList from './TätigkeitenList'
import "./practicals.css"

class Practicals extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedGraphs: [0,2]
        }
    }

    select(param) {
        let selectedGraphs = this.state.selectedGraphs
        selectedGraphs.indexOf(param) >= 0 ? selectedGraphs.splice(selectedGraphs.indexOf(param), 1) : selectedGraphs.push(param)
        this.setState({
            selectedGraphs
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="Practicals">
                    <div className="row">
                        <div className="col-md-9">
                            <PracticalsItem selectGraph={param => this.select(param) } />
                        </div>
                        <div className="col-md-3">
                            {/* <D3chart graphs={this.state.selectedGraphs} />
                            <PracticalCheckbox /> */}
                            <TätigkeitenList/>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
export default Practicals;


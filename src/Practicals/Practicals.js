
import React, { Component } from 'react'
import PracticalsItem from './PracticalsItem'
import D3chart from "./scaleLine"
import PracticalCheckbox from './PracticalCheckbox'
import TätigkeitenList from './TätigkeitenList'
import "./practicals.css"



class Practicals extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="Practicals">
                    <div className="row">
                        <div className="col-md-9">
                            <D3chart />
                            <PracticalCheckbox />
                            <TätigkeitenList/>
                        </div>
                        <div className="col-md-3">
                            <PracticalsItem />
                        </div>

                    </div>
                </div>

            </div>


        )
    }
}
export default Practicals;


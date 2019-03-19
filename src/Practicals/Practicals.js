
import React, { Component } from 'react'
import PracticalsItem from './PracticalsItem'
import D3chart from "./scaleLine"
import Checkbox from '../Exams/Checkbox'



class Practicals extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="Practicals">
                    <div className="row">
                        <div className="col-md-9">
                            <D3chart />
                        </div>
                        <div className="col-md-3">
                              <PracticalsItem/>
                        </div>

                    </div>
                </div>
                <div className="row">
                <div className=" row col-md-9">
                <div className="col-md">
                <Checkbox label="Ich habe"/>
                        </div>
                        <div className="col-md">
                <Checkbox label="Ich Kann"/>
                        </div>
                        <div className="col-md">
                <Checkbox label="Ich Kann"/>
                        </div>
                        <div className="col-md">
                <Checkbox label="Ich Kann"/>
                        </div>
                        </div>
                       
                </div>
            </div>


        )
    }
}
export default Practicals;


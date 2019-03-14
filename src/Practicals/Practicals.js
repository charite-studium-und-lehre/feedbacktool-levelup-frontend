import React, { Component } from 'react'
import PracticalsItem from './PracticalsItem'
import D3chart from "./scaleLine"
// import {select} from "d3"


class Practicals extends Component {
//     componentDidMount(){
// const N = 4 ;
// const node = select(this.node)
//     }
    render() {
        return (
            <div className="container-fluid" >
            <div className="practicals" >
                <div className="row">
                    <div className="col-md-8"  >
                    <D3chart/>
                    </div>
                    <div className="col-md-4">
                     <PracticalsItem/>
                     <PracticalsItem/>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Practicals;

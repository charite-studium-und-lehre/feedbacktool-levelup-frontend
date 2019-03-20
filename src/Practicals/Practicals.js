
import React, { Component } from 'react'
import PracticalsItem from './PracticalsItem'
import D3chart from "./scaleLine"
import PracticalCheckbox from './PracticalCheckbox'
import TätigkeitenList from './TätigkeitenList'
import "./practicals.css"

const praticalsTree ={
    entries: [
        {
            label: '1. Betreuung von Patienten',
            entries: [
                {
                    label: 'foo',
                    entries: [
                        {
                            label: 'bar'
                        }
                    ]
                }
            ]
        },
        {
            label: '2. Ärztliche Prozeduren 1',
        },
        {
            label: '3. Kommunikation mit Patienten',
        },
        {
            label: '4. Kommunikation und Zusammenarbeit mit Kollegen',
        },
        {
            label: '5. Weitere ärztliche professionelle Tätigkeit',
        },
    ]
}

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
                            <D3chart graphs={this.state.selectedGraphs} />
                            <PracticalCheckbox />
                            <TätigkeitenList/>
                        </div>
                        <div className="col-md-3">
                            <PracticalsItem selectGraph={param => this.select(param) } />
                        </div>

                    </div>
                </div>

            </div>


        )
    }
}
export default Practicals;


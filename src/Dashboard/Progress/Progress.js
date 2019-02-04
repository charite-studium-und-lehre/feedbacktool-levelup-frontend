import React, { Component } from 'react'
import { asChart, withHorizontalOrdinalScales } from '../../Charting/Chart'
import AnimatedHex from '../../Charting/AnimatedHex'
import tree from './tree'

const Hex = asChart(withHorizontalOrdinalScales(props => 
    <g>
        <AnimatedHex r="20" x="100" y="100"/>
    </g>
))
class Progress extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="card progress-card with-border">
                <div className="card-body">
                    <h5 className="card-title">Dein Studienfortschritt</h5>
                    <div className="card-text">
                    Hier siehst Du deinen Studienfortschritt und deine bereits erreichten Meilensteinen.
                    </div>
                    <div>
                        <Hex xDomain={[0, 100]} yDomain={[1,2,3]}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Progress

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import Chart, { OrdinalScales } from '../Charting/Chart'
import Legend from '../Charting/Legend'
import { XAxis, YAxis } from '../Charting/Axis'
import BarGraph from '../Charting/BarGraph'
import Subjects from './Subjects'

class Summary extends Component {
    constructor(props) {
        super(props)
        this.state = { extended: null }
        
        this.Samples = Subjects()
            .map(cat => ({ ...cat, subjects: _.chain(cat.subjects).sampleSize(Math.random() * cat.subjects.length).sortBy(s => -s.questions).value()}))
    }
    
    setExtended( cat ) {
        this.setState({ extended: cat })
    }

    getExtended() {
        return this.Samples.find( c => c.title === this.state.extended )
    }

    formatTick( label ) {
        const cat = this.Samples.find( c => c.title === label )
        return cat ? `${label} (${cat.subjects.length})` : label 
    }

    render() {
        const data = this.state.extended ? 
            this.getExtended().subjects.map( s => ({ x: s.title, y: s.questions })) :
            this.Samples.map((cat, i) => ({ x: cat.title, y: _.sumBy(cat.subjects, s => s.questions), color: `hsla(${32 + i/this.Samples.length*360}, 100%, 56%, .4)`}))
        const domain = this.state.extended ? 
            this.getExtended().subjects.map( s => s.title ) :
            this.Samples.map( c => c.title )
        const clickHandler = this.state.extended ?
            () => this.setExtended(null) :
            d => this.setExtended(d.x)
        const color = this.state.extended ?
            `hsla(${32 + this.Samples.indexOf(this.getExtended())/this.Samples.length*360}, 100%, 56%, .4)` :
            null
        return (
            <div className="card">
                <div className="card-body">
                    <Legend title="Von dir beantwortete Fragen in deinen Semesterprüfungen">Legende</Legend>
                    <div className="m-3" style={{paddingBottom: '12rem'}}>
                        <Chart>
                            <OrdinalScales xDomain={domain} yDomain={[0,Math.max(...data.map( d => d.y ))]}>
                                <BarGraph labels onClick={clickHandler} data={data} color={color}/>
                                <BarGraph labels onClick={clickHandler} data={data.map(d => ({...d, y: 192838757 % Math.max(d.y, 1) }))} color={color}/>
                                <XAxis rotateLabels ticks={{ format: this.formatTick.bind(this) }} />
                                <YAxis />
                            </OrdinalScales>
                       </Chart>
                    </div>
                    <div className="d-flex justify-content-end flex-wrap">
                        <Link to="/strengths"><button className="btn btn-outline-primary">Deine Stärken und Schwächen</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Summary
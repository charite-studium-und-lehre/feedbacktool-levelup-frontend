import React, { Component } from 'react'
import { curveBasis } from 'd3-shape'
import _ from 'lodash'
import { LinearChart, OrdinalChart } from '../../Charting/Chart'
import BarGraph from '../../Charting/BarGraph'
import LineMarker from '../../Charting/LineMarker'
import LineGraph from '../../Charting/LineGraph'
import Legend from '../../Charting/Legend'
import { XAxis, YAxis } from '../../Charting/Axis'
import Legends from '../../Core/LegendTexts'
import SemesterFächer from './SemesterFächer'
import {Subjects} from '../Subjects'


const flatMap = 
    _.flatMap(Subjects, d => d.subjects)

const sampleSize = 
    _.sampleSize(flatMap, 5 )


const LegendText = Legends.Exams.Semester.Details

class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedModule: null,
            mode: 'subjects'
        }
        this.histo = props.data.map((module, index) => _.map(_.groupBy(module.data, d => Math.floor(d / 5)), (d, i) => ({x: +i*0.05, y: d.length, highlight: +i === Math.floor(props.result[index] / 5)})))
    }

    showDetail(selectedModule) {
        this.setState({ selectedModule: selectedModule && this.state.selectedModule && this.state.selectedModule.x === selectedModule.x ? null : selectedModule })
    }

    setMode(mode) {
        this.setState({ mode })
    }

    render() {
        const width = .4
        const histoScale = Math.min(...this.props.data.map(d => d.mean)) / Math.max(...this.histo.map(d => Math.max(...d.map(d => d.y))))
        return (
            <div>
            <div className="card p-4" style={{overflow: 'hidden'}}>
                <Legend title={LegendText.title}>{LegendText.text}</Legend>
                <div style={{textAlign: 'right'}}>
                    <label className="m-0 mr-2"><input type="radio" name="details.mode" checked={this.state.mode === 'modules'} onChange={() => this.setMode('modules')} className="mx-2" />Module</label>
                    <label><input type="radio" name="details.mode" checked={this.state.mode === 'subjects'} onChange={() => this.setMode('subjects')} className="mx-2" />Fächer</label>
                </div>
                <div className="mt-3">
                    {this.state.mode === 'modules' ?
                    <OrdinalChart
                        // xDomain={[this.state.selectedModule ? this.state.selectedModule.x - .5 : 0, this.state.selectedModule ? this.state.selectedModule.x + .5 : 5]} 
                        xDomain={['Modul 01', 'Modul 02', 'Modul 03', 'Modul 04']} 
                        yDomain={[0, Math.max(...this.props.result, ...this.props.data.map(d => d.mean))]}>
                        <XAxis label={this.state.selectedModule ? `Modul ${this.state.selectedModule.x}` : '' }/>
                        <YAxis />
                        <BarGraph labels offset={-.5} width={width} data={this.props.result.map((d, i) => ({x: `Modul 0${i+1}`, y: d, label: `${d} %`}))} color="hsla(180, 100%, 20%, .5)" highlightColor="hsla(180, 100%, 20%, .8)" onClick={this.showDetail.bind(this)} />
                        <BarGraph labels offset={.5} width={width} data={this.props.data.map(d => ({x: `Modul 0${d.module}`, y: d.mean, label: `${d.mean} %`}))} color="hsla(180, 100%, 40%, .5)" highlightColor="hsla(180, 100%, 40%, .8)" onClick={this.showDetail.bind(this)} />
                        {this.histo.map((h, i) =>
                            <LineGraph
                                className={this.state.selectedModule ? "" : "d-none d-md-block"}
                                key={`density${i}`} noPoints curve={curveBasis} width={.8} 
                                data={h.map(d => ({x: i + 1 - width + d.x * 2 * width, y: d.y * histoScale, highlight: d.highlight}))} 
                                color="hsla(180, 100%, 20%, .2)" 
                                highlightColor="hsla(180, 100%, 20%, .8)" 
                                style={{opacity: this.state.selectedModule ? 0.7 : 1}}/>
                        )}
                        {this.histo.map((h, i) =>
                            <BarGraph
                                key={`histo${i}`} noPoints curve={curveBasis} width={.8} 
                                data={h.map(d => ({x: i + 1 - width + d.x * 2 * width, y: d.y * histoScale, highlight: d.highlight}))} 
                                color="hsla(180, 100%, 20%, .5)" 
                                highlightColor="hsla(180, 100%, 20%, .8)" 
                                style={{opacity: this.state.selectedModule && this.state.selectedModule.x === i+1 ? 1 : 0}}/>
                        )}
                        <LineMarker value={this.props.totalMean} label="Durchschnitt" />
                    </OrdinalChart>
                    : 
                    sampleSize.map(d => 
                        <SemesterFächer 
                        name={d}
                        result={_.random(1,15)}
                        />
                        )
                        }
                
                    
                </div>
            </div>
            </div>
        )
    }
}

export default Details
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
import SemesterModule from './SemesterModule'
import {Subjects} from '../Subjects'

const sampleSize = 
    _.sampleSize(_.flatMap(Subjects, d => d.subjects), 5 ).map(s => ({name: s, result: _.random(0,10), total: _.random(10,20), mena: _.random(0,18) }))


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
                  Subjects.map(d => 
                    <SemesterModule 
                    name={d.module}
                    result={_.random(5,90)}
                
                    />
                    )
                    : 
                    sampleSize.map(d => 
                        <SemesterFächer 
                        name={d.name}
                        result={d.result}
                        total={d.total}
                        mean={d.mean}
                    
    
                    
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
import React, { Component } from 'react'
import _ from 'lodash'
import Legend from '../../Charting/Legend'
import Legends from '../../Core/LegendTexts'
import BarWithHeader from './BarWithHeader'
import { Subjects, ModuleNames } from '../Subjects'

const subjectsSample = _.sampleSize(_.flatMap(Subjects, d => d.subjects), 5 ).map(s => ({name: s, result: _.random(0,10), total: _.random(10,20)}))
const modulesSample = ModuleNames.map(s => ({name: s, result: _.random(0,100), total: 100}))
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
                    modulesSample.map((d, i) => 
                        <BarWithHeader
                            key={d.name}
                            name={"Modul " + (this.props.semester * 4 - 3 + i)}
                            result={d.result}
                            mean={_.random(1, d.total)}
                        >{d.result} %</BarWithHeader>
                    )
                    : 
                    subjectsSample.map(d => 
                        <BarWithHeader 
                            key={d.name}
                            name={d.name}
                            result={d.result}
                            total={d.total}
                            width={d.total * 100 / _.max(subjectsSample.map(s => s.total)) + "%"}
                            mean={_.random(1, d.total)}
                        >{d.result} von {d.total}</BarWithHeader>
                        )
                        }
                </div>
            </div>
            </div>
        )
    }
}

export default Details
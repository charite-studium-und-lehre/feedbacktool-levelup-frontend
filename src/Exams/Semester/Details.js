import React, { Component } from 'react'
import _ from 'lodash'
import Legend from '../../Charting/Legend'
import SimpleDot from '../../Charting/SimpleDot'
import Legends from '../../Core/LegendTexts'
import BarWithHeader from './BarWithHeader'
import { Subjects } from '../Subjects'
import { DetailsData } from './Data'

const subjectsSample = _.sampleSize(_.flatMap(Subjects, d => d.subjects), 5 ).map(s => ({name: s, result: _.random(0,10), total: _.random(10,20)}))
const LegendText = Legends.Exams.Semester.Details

class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: 'modules'
        }
    }

    setMode(mode) {
        this.setState({ mode })
    }

    render() {
        return (
            <div>
            <div className="card p-4" style={{overflow: 'hidden'}}>
                <Legend title={LegendText.title}>
                    {LegendText.text}
                    <div className="position-relative">
                        Der <SimpleDot style={{position: 'relative', display: 'inline-block', marginLeft: '.75rem'}} value={0} /> kennzeichnet den Kohortenmittelwert.
                    </div>
                </Legend>
                <div style={{textAlign: 'right'}}>
                    <label className="m-0 mr-2"><input type="radio" name="details.mode" checked={this.state.mode === 'modules'} onChange={() => this.setMode('modules')} className="mx-2" />Module</label>
                    <label><input type="radio" name="details.mode" checked={this.state.mode === 'subjects'} onChange={() => this.setMode('subjects')} className="mx-2" />Fächer</label>
                </div>
                <div className="mt-3">
                    {this.state.mode === 'modules' ?
                    this.props.modules.map((d, i) => 
                        <BarWithHeader
                            key={d.label}
                            name={d.label}
                            result={d.result}
                            mean={d.mean}
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

export default props => <Details {...DetailsData(props.semester)} />
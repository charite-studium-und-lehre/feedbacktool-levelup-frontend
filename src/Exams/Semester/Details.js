import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import Legend from '../../Charting/Legend'
import SimpleDot from '../../Charting/SimpleDot'
import Legends from '../../Core/LegendTexts'
import BarWithHeader from './BarWithHeader'
import { DetailsData } from './Data'

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
                <div className="card p-4" style={{ overflow: 'hidden' }}>
                    <Legend title={LegendText.title}>
                        {LegendText.text}
                        <div className="position-relative">
                            Der <SimpleDot style={{ position: 'relative', display: 'inline-block', marginLeft: '.75rem' }} value={0} /> kennzeichnet den Kohortenmittelwert.
                    </div>
                    </Legend>

                    <div className="row" >
                        <div className="mt-3 col-md-5">
                            <Link to='1.%20Fachsemester/questions'>
                                <button type="button" className="btn btn-outline-primary">Fragen und Antworten</button>
                            </Link>
                        </div>
                        <div className="col-md-6 mt-4">
                            <label className="m-0 mr-2"><input type="radio" name="details.mode" checked={this.state.mode === 'modules'} onChange={() => this.setMode('modules')} className="mx-2" />Module</label>
                            <label><input type="radio" name="details.mode" checked={this.state.mode === 'subjects'} onChange={() => this.setMode('subjects')} className="mx-2" />Fächer</label>
                        </div>
                    </div>
                    <div className="mt-3">
                        {this.state.mode === 'modules' ?
                            this.props.modules.map(d =>
                                <BarWithHeader
                                    key={d.label}
                                    name={d.label}
                                    result={d.result}
                                    total={80}
                                    mean={_.round(d.mean / 0.8)}
                                >{_.round(d.result / 0.8)} %</BarWithHeader>
                            )
                            :
                            this.props.subjects.map(d =>
                                <BarWithHeader
                                    key={d.name}
                                    name={d.name}
                                    result={d.result}
                                    total={d.total}
                                    width={d.total * 100 / _.max(this.props.subjects.map(s => s.total)) + "%"}
                                    mean={d.mean}
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
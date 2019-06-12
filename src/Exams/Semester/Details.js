import React, { Component } from 'react'
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
        const {t} = this.props
        return (
            <div>
            <div className="card p-4" style={{overflow: 'hidden'}}>
                <Legend title={LegendText.title}>
                    {LegendText.text}
                    <div className="position-relative">
                       {t(`Der`)} <SimpleDot style={{position: 'relative', display: 'inline-block', marginLeft: '.75rem'}} value={0} /> {t(`kennzeichnet den Kohortenmittelwert.`)}
                    </div>
                </Legend>
                <div style={{textAlign: 'right'}}>
                    <label className="m-0 mr-2"><input type="radio" name="details.mode" checked={this.state.mode === 'modules'} onChange={() => this.setMode('modules')} className="mx-2" />Module</label>
                    <label><input type="radio" name="details.mode" checked={this.state.mode === 'subjects'} onChange={() => this.setMode('subjects')} className="mx-2" />{t(`Fächer`)}</label>
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
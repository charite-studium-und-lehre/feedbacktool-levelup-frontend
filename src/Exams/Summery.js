import React, { Component } from 'react'
import _ from 'lodash'
import Chart, { OrdinalScales, LinearScales } from '../Charting/Chart'
import Legend from '../Charting/Legend'
import { XAxis, YAxis } from '../Charting/Axis'
import BarGraph from '../Charting/BarGraph'
import Subjects from './Subjects'

class Summery extends Component {
    constructor(props) {
        super(props)
        this.state = { extended: [] }
    }
    
    toggleExtended( cat ) {
        const extended = _.xor([ ...this.state.extended ], [ cat.title ])
        this.setState({ extended })
    }

    isExtended( cat ) {
        return _.includes(this.state.extended, cat.title)
    }

    render() {
        const barsInCat = cat => this.isExtended(cat) ? cat.subjects.length : 1
        const totalBars = _.sumBy(Subjects, barsInCat )
        const offsets = Subjects.map((cat, i) => _.chain(Subjects).slice(0, i).sumBy( barsInCat ) / totalBars )
        return (
            <div className="card">
                <div className="card-body">
                    <Legend title={this.props.graph}>Legende</Legend>
                    <div className="m-3" style={{paddingBottom: '12rem'}}>
                        <Chart>
                            {/* <LinearScales yDomain={[0,max]}>
                                <YAxis />
                            </LinearScales> */}
                            {Subjects.map((cat, i) => {
                                const data = this.isExtended(cat) ? 
                                    cat.subjects.map( s => ({ x: s.title, y: s.questions })) :
                                    cat.subjects.map(() => ({ x: cat.title, y: _.sumBy(cat.subjects, s => s.questions) }))
                                const domain = this.isExtended(cat) ?
                                    cat.subjects.map( s => s.title ) :
                                    [cat.title]

                                return (
                                    <OrdinalScales onClick={() => this.toggleExtended(cat)} key={i} offset={offsets[i]} scale={ barsInCat(cat) / totalBars } xDomain={domain} yDomain={[0,Math.max(...data.map( d => d.y ))]}>
                                            <BarGraph labels data={data} color={`hsla(${32 + i/Subjects.length*360}, 100%, 56%, .4)`} className={this.isExtended(cat) ? '' : 'collapsed'} />
                                            <BarGraph labels data={data.map(d => ({...d, y: 192838757 % Math.max(d.y, 1)}))} color={`hsla(${32 + i/Subjects.length*360}, 100%, 56%, 1)`} className={this.isExtended(cat) ? '' : 'collapsed'} />
                                            <XAxis rotateLabels />
                                    </OrdinalScales>
                                )
                            })}
                        </Chart>
                    </div>
                </div>
            </div>
        )
    }
}

export default Summery
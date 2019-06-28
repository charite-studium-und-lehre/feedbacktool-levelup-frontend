import React, { Component } from 'react'
import { OrdinalChart } from '../Charting/Chart'
import { XAxis, YAxis } from '../Charting/Axis'
import BarGraph from '../Charting/BarGraph'
import { withTranslation } from 'react-i18next'
const exams = ['alle MCs', 'letzter PTM']

class Subject extends Component {
    constructor(props) {
        super(props)
        this.state = { flash: props.flash }
        this.node = React.createRef()
    }
    
    componentDidMount() {
        if(this.state.flash) setTimeout(() => document.querySelector('div.App').scrollTo(0, this.node.current.getBoundingClientRect().y - 70), 500)
        this.setState({ flash: false })
    }

    render() {
        const {t} = this.props
        const data = exams.map((d, i) => ({ x:d, y: [this.props.data[i].richtig, this.props.data[i].gesamt]}))
        return (
            <div className="card m-2 flex-grow-1 with-shadow" style={{width: '20rem'}}>
                <div ref={this.node} className={`card-body ${this.state.flash ? 'bg-primary' : ''}`} style={{transition: '5s'}}>
                    <span className="font-weight-bold">{this.props.name}</span>
                    <div className="p-4">
                        <OrdinalChart style={{height:'15rem'}} xDomain={exams} yDomain={[0,30]}>
                            <YAxis label={t(`gestellte vs. richtige Fragen`)} ticks={{count: 4}} />
                            <XAxis />
                            <BarGraph labels data={ data } color="hsla(250, 100%, 50%, .6)" />
                        </OrdinalChart>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTranslation()(Subject)
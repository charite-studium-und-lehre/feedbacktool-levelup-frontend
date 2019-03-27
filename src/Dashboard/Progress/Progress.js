import React, { Component } from 'react'
import _ from 'lodash'
import { scaleBand } from 'd3-scale'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { asChart } from '../../Charting/Chart'
import Tile from './Tile'
import Checklist from './Checklist'
import tree from './tree'

const Hex = asChart(props => {
    const xScale = scaleBand()
        .range([-props.width * props.offset, props.width * (props.scale - props.offset)])
        .domain(_.range(props.data.entries.length))
        .padding(0)
        const yScale = scaleBand()
        .range([props.height, 100])
        .domain(_.range(3))
        .padding(0)
    return <g>
        {props.data.entries.map((d, i) => <Tile
            onClick={() => props.onClick(i)}
            key={i}
            data={d}
            r={xScale.bandwidth() / 2}
            x={(xScale(i) + xScale.bandwidth() / 2) * 1} 
            y={yScale(i % 3)} />
        )}
    </g>
})

class Progress extends Component {
    constructor(props) {
        super(props)
        this.state = { scale: 1, offset: 0 }
        this.zoom = this.zoom.bind(this)
    }
    
    zoom(index) {
        this.setState({ scale: tree.entries.length, offset: index, zoomed: true })
    }

    zoomOut() {
        this.setState({scale: 1, offset: 0, zoomed: false})
    }

    render() {
        return (
            <div className="card progress-card with-border">
                <div className="card-body">
                    <h5 className="card-title">Dein Studienfortschritt</h5>
                    <div className="card-text">
                    Hier siehst Du deinen Studienfortschritt und deine bereits erreichten Meilensteinen.
                    </div>
                    <div className="checklist">
                        <div>
                        {tree.entries.map(d => <Checklist key={d.label} className="d-inline-block align-top" data={d} onClick={this.zoom} /> )}
                        </div>
                    </div>
                    <div className="mt-3">
                        <a className="text-primary" style={{fontSize: '.8rem', cursor:'pointer'}} onClick={() => this.zoomOut()}>zurück</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Progress

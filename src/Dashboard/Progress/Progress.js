import React, { Component } from 'react'
import Checklist from './Checklist'
import tree from './tree'
import Legends from '../../Core/LegendTexts'
import Legend from '../../Charting/Legend'

const checklistStyle = {
    whiteSpace: 'nowrap',
    overflow: 'auto',
    margin: '0 -2.5rem',
}

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
            <div className="card progress-card with-border" style={{overflow: 'hidden'}}>
                <div className="card-body">
                    <Legend title={Legends.Dashboard.Progress.title}>{Legends.Dashboard.Progress.text}</Legend>
                    <div style={checklistStyle}>
                        <div style={{margin: '0 2.5rem'}}>
                        {tree.entries.map(d => <Checklist key={d.label} className="d-inline-block align-top" data={d} onClick={this.zoom} /> )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Progress

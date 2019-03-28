import React, { Component } from 'react'
import Checklist from './Checklist'
import tree from './tree'

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
                </div>
            </div>
        )
    }
}

export default Progress

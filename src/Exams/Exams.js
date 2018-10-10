import React, { Component } from 'react'
import graphs from './Graphs'
import _ from 'lodash'
import MainChart from './MainChart'
import Summery from './Summery'

class Exams extends Component {
    constructor({props, match}) {
        super(props)
        this.graphs = graphs.data
        this.state = {
            shownGraphs: [ match.params.graphs || 'semester' ],
        }
    }

    toggleVisibility( graph ) {
        let s = [ ...this.state.shownGraphs ]
        this.setState({ shownGraphs: _.xor(s, [ graph ]) })
    }
    
    render() {
        return (
            <div className="container-fluid">
            <div className="row my-2">
                <div className="col">
                    <MainChart 
                        pointCount={graphs.pointCount}
                        graphs={this.graphs}
                        shownGraphs={this.state.shownGraphs} 
                        toggleVisibility={this.toggleVisibility.bind(this)} />
                </div>
            </div>
            {this.state.shownGraphs.map( ( graph, i ) => (
                <div className="row my-2" key={i}>
                    <div className="col">
                        <Summery graph={graph} data={new Array(8).fill(0).map((d,i) => ({ x:i+1, y: Math.floor(Math.random() * 30) }))} />
                    </div>
                </div>))}
            </div>
        );
    }
}

export default Exams
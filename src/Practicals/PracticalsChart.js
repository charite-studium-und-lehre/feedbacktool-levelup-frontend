
import React, {Component} from 'react';
import _ from 'lodash'

import { OrdinalChart } from '../Charting/Chart'
import LineGraph from '../Charting/LineGraph'
import { XAxis, YAxis } from '../Charting/Axis'

const createData1 = () => _.range(1,8).map(i => ({Semester: `Semester${i}`, tatig: _.random(1,7)}))
const createData2 = () => _.range(1,8).map(i => ({Semester: `Semester${i}`, tatig: _.random(1,7)}))
const createData3 = () => _.range(1,8).map(i => ({Semester: `Semester${i}`, tatig: _.random(1,7)}))
const createData4 = () => _.range(1,8).map(i => ({Semester: `Semester${i}`, tatig: _.random(1,7)}))


class PracticalsChart extends Component{
    constructor(props){
        super(props)
    this.state = {
        data : [createData1(), createData2(), createData3(), createData4()]
         }
       
        
                this.Change = this.Change.bind(this)
    }
    Change = () => {
   
        this.setState({
            data : [createData1(), createData2(), createData3(), createData4()]
        })
       
    }
       
  

    render(){
      let LineGraphs = this.state.data.filter((d,i) => this.props.graphs.indexOf(i) >= 0).map(d => <LineGraph data={d.map(d => ({x: d.Semester, y: d.tatig}))} color="rgba(64,64,64,.3)"></LineGraph>)
        return (
            <div className="chart" >
                <h3>Deine Ärztliche Tätigkeiten</h3>
                <button onClick={this.Change}> change</button> 
              
                <div className="Practicals-line">
                <OrdinalChart yDomain={[0,7]} xDomain={this.state.data[0].map((Semester1)=> Semester1.Semester)}>
                                <XAxis />
                                <YAxis />
                                {LineGraphs}
                </OrdinalChart>
                 </div>
            </div>
        )
    }
}

export default PracticalsChart
















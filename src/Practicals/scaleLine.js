
import React, {Component} from 'react';
import * as d3 from 'd3';
import _ from 'lodash'

// import { LinearChart } from './LinearChart';
import { OrdinalChart } from '../Charting/Chart'
import LineGraph from '../Charting/LineGraph'
import { XAxis, YAxis } from '../Charting/Axis'
import { curveMonotoneX } from 'd3-shape'



const createData1 = () => _.range(1,7).map(i => ({Semester: `Semester${i}`, tatig: _.random(1,6)}))
const createData2 = () => _.range(1,7).map(i => ({Semester: `Semester${i}`, tatig: _.random(1,6)}))
const createData3 = () => _.range(1,7).map(i => ({Semester: `Semester${i}`, tatig: _.random(1,6)}))
const createData4 = () => _.range(1,7).map(i => ({Semester: `Semester${i}`, tatig: _.random(1,6)}))


class D3chart extends Component{
    constructor(props){
        super(props)
    this.state = {
        data1 :createData1(),
        data2 :createData2(),
        data3 :createData1(),
        data4 :createData2()
         }
       
        
                this.Change = this.Change.bind(this)
    }
    Change = () => {
   
        this.setState({
          data1 : createData1(),
          data2 :createData2(),
          data3 : createData1(),
          data4 :createData2()
        })
        // console.log(createData())
    }
       
  

    render(){
      let LineGraph1 = (
        <LineGraph data={this.state.data1.map(d => ({x: d.Semester, y: d.tatig}))} color="rgba(64,64,64,.3)"></LineGraph>
      )
      let LineGraph2 = (
        <LineGraph data={this.state.data2.map(d => ({x: d.Semester, y: d.tatig}))} color="rgba(64,64,64,.3)"></LineGraph>
      )
      let LineGraph3 = (
        <LineGraph data={this.state.data3.map(d => ({x: d.Semester, y: d.tatig}))} color="rgba(64,64,64,.3)"></LineGraph>
      )
      let LineGraph4 = (
        <LineGraph data={this.state.data4.map(d => ({x: d.Semester, y: d.tatig}))} color="rgba(64,64,64,.3)"></LineGraph>
      )
        return (
            <div className="chart" >
                <h3>Deine Ärztliche Tätigkeiten</h3>
                <button onClick={this.Change}> change</button> 
              
               
                <div className="Practicals-line">
                <OrdinalChart yDomain={[0,6]} xDomain={this.state.data1.map((Semester1)=> Semester1.Semester)}>
                                <XAxis />
                                <YAxis />
                                   {LineGraph1}
                                   {LineGraph2}
                                   {LineGraph3}
                                   {LineGraph4}

                                
                </OrdinalChart>
                 </div>
            </div>
        )
    }
}

export default D3chart;



















// import React from 'react';
// import * as d3 from 'd3';
// import _ from 'lodash'

// // import { LinearChart } from './LinearChart';
// import { OrdinalChart } from '../Charting/Chart'
// import LineGraph from '../Charting/LineGraph'

// import { XAxis, YAxis } from '../Charting/Axis'
// import { curveMonotoneX } from 'd3-shape'



// const createData = () => _.range(1,11).map(i => ({semster: `semster${i}`, tatig: _.random(1,6)}))

// class D3chart extends React.Component{
//     constructor(props){
//         super(props)
//     this.state = {
//         data : [
//             {
//                 "semster": "semster1",
//                 "tatig" : 6
//             },
//             {
//                 "semster": "semster2",
//                 "tatig" : 5,
//             },
//             {
//                 "semster": "semster3",
//                 "tatig" : "4", 
//             },
//             {
//                 "semster": "semster4",
//                 "tatig" : "3",
//             },
//             {
//                 "semster": "semster5",
//                 "tatig" : "2",
//             },
//             {
//                 "semster": "semster6",
//                 "tatig" : "1",
//             },
//             {
//                 "semster": "semster7",
//                 "tatig" : "6",
//             },
//             {
//                 "semster": "semster8",
//                 "tatig" : "2",
//             },
//             {
//                 "semster": "semster9",
//                 "tatig" : "2",
//             },
//             {
//                 "semster": "semster10",
//                 "tatig" : "2",
//             },
//             {
//                 "semster": "semster11",
//                 "tatig" : "2",
//             },
          
//         ],
       
//                 }
//                 this.Change = this.Change.bind(this)
            
//     }
//     Change = () => {
//         // console.log(this.state.number)
//         // let x = this.state.data[x]
//         // console.log(x)
//         // let shuffle = require('shuffle-array')
//         //   let numner2 = this.state.data.map((numner2)=> numner2.x )
//         //   shuffle(numner2);
//         //   console.log(numner2)

//            let data1 = this.state.data
//         let shuffle = require('shuffle-array')
//           let y1 = data1.map((y1)=> y1.x )
//           shuffle(y1);


//           let tatig1 = data1.map((tatig1)=> tatig1.tatig )
//           shuffle(tatig1);
//           console.log(tatig1)
          
          
          

//         this.setState({
//           data : createData()
//         })
//         console.log(this.state.data)



//     }
    

   

  

//     // componentDidMount(){
//     //     this.draw()
//     // }
//     // // getRandomInt() {
//     // //     return Math.floor(Math.random() * Math.floor());
//     // //   }
//     // componentDidUpdate(){
//     //    this.draw()
     
//     //   }
//     draw(){
  
       
//     debugger;
    
        
//           const semster1 = this.state.data.map((semster1)=> semster1.semster)
//           const tatig1 = this.state.data.map((tatig1)=> tatig1.tatig)

//           const shuffle = require('shuffle-array')
//           const tatig2 = this.state.data.map((tatig2)=> tatig2.tatig)
//           shuffle(tatig2);

         
//         //   console.log(numner2) 
          
//         //   console.log(tatig2) 
//         //   console.log(semster1)

//           const y1 = this.state.data.map((y1)=> y1.y)
          
        
//           const y2 = this.state.data.map((y2)=> y2.y)
//           shuffle(y2);

//         //   console.log(x2)

        
          
        
//                 const x = d3.scalePoint()
//                 .range([0, 900])
//                 .domain(semster1);
        
//                 const y = d3.scalePoint()
//                         .range([0, 450])
//                         .domain(tatig1);
        
//                 const xAxisGenaerator = d3.axisBottom()
//                     .scale(x);
        
//                     const yAxisGenaerator = d3.axisLeft()
//                     .scale(y)
                    
                    

//                     const lineGenerator = d3.line()
//                     .x(function(d){return x(d.semster)})
//                       .y(function(d){return d.y})
//                     .curve(d3.curveCardinal)
                   

             
//                 const svg = d3.select('svg')
//                               .append('g')
//                               .attr('transform', "translate(60,60)")
        
//                 const xAxis = svg.append('g')
//                              .attr('class', 'x_axis')
//                              .call(xAxisGenaerator)
//                              .attr('transform', "translate(0,420)")

        
//                 const yAxis = svg.append('g')
//                              .attr('class', 'y_axis')
//                              .call(yAxisGenaerator)
//                             .attr('transform', "translate(0,-30)") 
                             
                             
//                 //  const text = svg
//                 //  .append('text')
//                 //  .attr('x', x(semster1))
//                 //  .attr('y', y(tatig1))
//                 //  .text(semster1)

//                 //  const circle = svg.selectAll('circle')
//                 //               .this.state.data(dataXY)
                            
//                 //               .append('circle')
//                 //               .enter()
                           
//                 //               .attr('cx', x(y1))
//                 //               .attr('cy', y(y1))
//                 //               .attr('r', '30')
//                 //               .attr('fill', 'black')




//                              const path = svg.append('path')
//                              .data([this.state.data])
//                              .attr('d', lineGenerator)
//                              .attr('class', 'practicals-path')
//                              console.log()

//      }


//     render(){
//         const y1 = this.state.data.map((y1)=> y1.y)
      
//         return (
//             <div className="chart2" >
//                 <h3>Deine Ärztliche Tätigkeiten</h3>
//                 <button onClick={this.Change}> change</button> 
              
               
//                 <div className="p-3">
//                 <OrdinalChart yDomain={[1,6]} xDomain={this.state.data.map((semster1)=> semster1.semster)}>
//                                 <XAxis />
//                                 <YAxis label="jij" />
//                                 <LineGraph data={this.state.data.map(d => ({x: d.semster, y: d.tatig}))} color="rgba(64,64,64,.3)"></LineGraph>
//                             </OrdinalChart>
//                             </div>
//             </div>
//         )
//     }
// }

// export default D3chart;









































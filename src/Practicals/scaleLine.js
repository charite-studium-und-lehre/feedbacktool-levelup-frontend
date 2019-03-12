// import React, { Component } from 'react'
// import {select} from "d3"
// import { scaleBand, scaleLinear, scaleTime, axisBottom} from "d3-scale"
// import { axisBottom, axisLeft } from 'd3-axis'
// import { line } from 'd3-shape'

// class BarChart extends Component {
//     constructor(){
//      super();
//      this.state = {
//          data : [
//             {
//                 time: "1950.01.01",
//                 Leute : 2
//             },
//             {
//                 time: "1960.01.01",
//                 Leute : 8
//             },
//             {
//                 time: "1970.01.01",
//                 Leute : 6
        
//             },
//             {
//                 time: "1980.01.01",
//                 Leute : 4
//             },
//             {
//                 time: "1990.01.01",
//                 Leute : 7
//             },

//          ]
//      }
//     }
//     componentDidMount(){
//         this.draw();
//     }

//     draw(){
//         const node = select(this.node);
//         const bounds = node.node().getBoundingClientRect();
//         const w = bounds.width;
//         const h = bounds.height;
//         const {data} = this.state;

//         const x = scaleLinear()
//         .range([0,300])
//         .domain([9,0]);

//         const y = scaleLinear()
//         .range([0,300])
//         .domain([9,0]);

//         const xAxisGenaerator = axisBottom()
//         .scale(x);

//         const yAxisGenaerator = axisLeft()
//         .scale(y)

//         var lineGenerator = line()
//         .x(function(d){
//             return x(new Date(d.time));})
//         .y(function(d){
//             return y(d.Leute);})
            
//         const xscale = scaleBand();
//         xscale.domain(data.map(d => d.Semster));
//         xscale.range([0, w ]);

//         const yscale = scaleLinear();
//         // xscale.domain(data.map(extent(data));
//         yscale.domain([0, 100]);
//         yscale.range([0,  h]);
//         xscale.padding(0.1)
        
//         const upd = node.selectAll('rect').data(data);
//         upd.enter()
//         .append('rect')
//         .attr('x', d => xscale(d.Semster))
//         .attr('y', d => h - yscale(d.Tätigkeit) )   
//         .attr('width', xscale.bandwidth())
//         .attr('height', d => yscale(d.Tätigkeit))
      
//         .attr('fill', 'black')

//     }

//     componentDidUpdate(){
//         this.draw();
//     }
    
//     render() {
//         return (
//             <svg
//             style={{width: "100%", height:"100%", backgroun:"black"}}
//             ref={ node => {
//                 this.node = node 
//             }}
//             >
//             </svg>   
//         )
//     }
// }
// export default BarChart;















// // import React, { Component } from 'react'
// // import {select} from "d3"
// // import { scaleBand, scaleLinear } from "d3-scale"

// // class BarChart extends Component {
// //     constructor(){
// //      super();
// //      this.state = {
// //          data : [
// //               { Semster : 2013 , Tätigkeit : 50 },
// //               { Semster : 2014 , Tätigkeit : 80 },
// //               { Semster : 2015 , Tätigkeit : 100 },
// //               { Semster : 2016 , Tätigkeit : 40 },
// //               { Semster : 2017 , Tätigkeit : 120 },
// //               { Semster : 2018, Tätigkeit : 200 },

// //          ]
// //      }
// //     }
// //     componentDidMount(){
// //         this.draw();
// //     }

// //     draw(){
// //         const node = select(this.node);
// //         const bounds = node.node().getBoundingClientRect();
// //         const w = bounds.width;
// //         const h = bounds.height;
// //         const {data} = this.state;

// //         const xscale = scaleBand();
// //         xscale.domain(data.map(d => d.Semster));
// //         xscale.range([0, w ]);

// //         const yscale = scaleLinear();
// //         // xscale.domain(data.map(extent(data));
// //         yscale.domain([0, 100]);
// //         yscale.range([0,  h]);
// //         xscale.padding(0.1)
        
// //         const upd = node.selectAll('rect').data(data);
// //         upd.enter()
// //         .append('rect')
// //         .attr('x', d => xscale(d.Semster))
// //         .attr('y', d => h - yscale(d.Tätigkeit) )   
// //         .attr('width', xscale.bandwidth())
// //         .attr('height', d => yscale(d.Tätigkeit))
      
// //         .attr('fill', 'black')

// //     }

// //     componentDidUpdate(){
// //         this.draw();
// //     }
    
// //     render() {
// //         return (
// //             <svg
// //             style={{width: "100%", height:"100%", backgroun:"black"}}
// //             ref={ node => {
// //                 this.node = node 
// //             }}
// //             >
// //             </svg>   
// //         )
// //     }
// // }
// // export default BarChart;


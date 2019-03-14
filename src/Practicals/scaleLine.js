
import React from 'react';
import * as d3 from 'd3';
import { scalePoint, scaleOrdinal } from 'd3-scale'

import { LinearChart } from '../Charting/Chart';
import LineGraph from '../Charting/LineGraph'

import { XAxis, YAxis } from '../Charting/Axis'





class D3chart extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            random: 0
        }
    }
  

    componentDidMount(){
        this.draw()
    }
    // getRandomInt() {
    //     return Math.floor(Math.random() * Math.floor());
    //   }
     


    draw(){
  
        const data = [
            {
                "semster": "st1",
                "tatig" : 1
            },
            {
                "semster": "st2",
                "tatig" : 2
            },
            {
                "semster": "st3",
                "tatig" : 7
        
            },
            {
                "semster": "st4",
                "tatig" : 4
            },
            {
                "semster": "st5",
                "tatig" : 9
            },
        ];
        const retingFactoren = [ "desater", "bad", "ok", "better", "verygood", "perfekt" ]
    
        
          const semster = data.map((tatig)=> tatig.semster)
          const tatig = data.map((tatig1)=> tatig1.tatig);
          
        
                const x = d3.scaleOrdinal()
                .range([0,500])
                .domain([retingFactoren]);
        
                const y = d3.scaleOrdinal()
                        .range([0, 50, 100, 150, 200, 250, 300])
                        .domain(tatig);
        
                const xAxisGenaerator = d3.axisBottom()
                    .scale(x);
        
                    const yAxisGenaerator = d3.axisLeft()
                    .scale(y)
                    const lineGenerator = d3.line()
                    .x(semster)
                    .y(tatig)

             
                const svg = d3.select('svg')
                              .append('g')
                              .attr('transform', "translate(60,0)")
        
                const xAxis = svg.append('g')
                             .attr('class', 'x_axis')
                             .call(xAxisGenaerator)
                             .attr('transform', "translate(0,420)")
        
                             const yAxis = svg.append('g')
                             .attr('class', 'y_axis')
                             .call(yAxisGenaerator) 
                             .attr('transform', "translate(0,120)") 
                             
                             const path = svg.append('path')
                             .data([data])
                             .attr('d', lineGenerator)
                             .attr('transform', "translate(0,200)") 
        
                             .attr('class', 'population-line')
                             

        // const retingFactoren = [ "desater", "bad", "ok", "better", "verygood", "perfekt" ]
        // const DataJASON = [
        //     {
        //        "color" : "green",
        //         "reting" : "bad",         // لازم يكون الاسم نفس الفوق مشان تتسفط عليها 
                
        //     },
        //     {
          
        //         "color" : "green",
        //         "reting" : "ok",
        //     },
        //     {
        //         "color" : "black",
        //         "reting" : "better",
        //     },
        //     {
              
        //         "color" : "blue",
        //         "reting" : "perfekt",
        //     },
        // ];
        
        // const x = d3.scaleOrdinal();
        //       x.range([0, 100, 200, 300, 400, 500]);         
        //       x.domain(retingFactoren); 

        //       const xAxisGenatrator = d3.axisBottom()
        //       .scale(x)
  
        //       const svg = d3.select('svg')
        //            .append('g')
        //            .attr("class", "g1")
        //            .attr("transform", "translate(50,0)")
        //       const xAxis = svg.append('g')
        //         .attr("class", "g2")
        //       .attr("transform", "translate(0,150)")
        //       .call(xAxisGenatrator)
  
        //      const ratingCircle = svg 
        //      .selectAll('circle')
        //      .data(DataJASON)
        //      .enter()
        //      .append('circle')
        //      .attr("cx", function(d){
        //          return x(d.reting)     // راح يرتب الدوائر فوت كل اسم 
        //      })
        //      .attr('cy', "60")
        //      .attr('r', "20")
        //      .attr("fill", function(d){
        //         return d.color 
        //      })





  
    //     const dataX = [ "st1", "st2", "st3", "st4", "st5" ] ;
    //     const dataY  = [ "kann1", "kann2", "kann3", "kann4", "kann5" ]               

    //     const svg = d3.select("svg"),
    //         margin = {top: 50, right: 20, bottom: 50, left: 50},
    //         width = 960 - margin.left - margin.right,
    //         height = 500 - margin.top - margin.bottom,
    //         g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    //     const x = d3.scaleOrdinal()
    //     .range([0, 100, 200, 300, 400, 500])         
    //     .domain(dataX)                  



    //     const y = d3.scaleOrdinal()
    //     .range([0, 100, 200, 300, 400, 500])         
    //     .domain(dataY)      

    //     const make_x_grid_lines = () =>{
    //             return d3.axisBottom(x)
    //                 .ticks(10)
    //         }
    //     //
    //     const make_y_gridlines = () => {
    //             return d3.axisLeft(y)
    //                 .ticks(10)
    //         }

    //     const lineCount = d3.line()
    //         .x(function(d) { return x(d.semster); })
    //         .y(function(d) { return y(d.kann); });


    //         x.domain(d3.extent(data, function(d) {return d.semster; }));
    //         y.domain(d3.extent(data, function(d) { return d.kann; }));
    //             // // add the X gridlines
    //             g.append("g")
    //               .attr("class", `grid`)
    //               .attr("transform", "translate(0," + height + ")")
    //               .call(make_x_grid_lines()
    //                   .tickSize(-height)
    //                   .tickFormat(""))
    //             //   // add the Y gridlines
    //             g.append("g")
    //             .attr("class", `grid`)
    //             .call(make_y_gridlines()
    //               .tickSize(-width)
    //               .tickFormat(""))

    //               //plot the x axis
    //             g.append("g")
    //                 .attr("class", `axis axis--x`)
    //                 .attr("transform", "translate(0," + height + ")")
    //                 .call(d3.axisBottom(x));

    //             g.append("g")
    //                 .attr("class", 'axis axis--y')
    //                 .call(d3.axisLeft(y))
    //             g.append('g')
    //                 .append('rect')
    //                 .attr('y',-23)
    //                 .attr('x',width-55)
    //                 .attr('width',18)
    //                 .attr('height',18)
    //                 .attr('fill','steelblue');

    //             g.append("path")
    //                 .datum(data)
    //                 .attr("class", `lineUsers`)
    //                 .attr("d", lineCount)

     }


    render(){
        return (
            <div className="chart" >
                <h3>Visualizing Data with React and D3</h3>
                <svg width="960" height="500" style={{border:'solid 1px #eee',borderBottom:'solid 1px #ccc'}} >
                {/* <LinearChart >
                 <LineGraph data={new Array(4).fill(0).map((d,i) => ({x: i+1, y: Math.random() * 100}))} color="rgba(64,64,64,.3)"></LineGraph> 
                    </LinearChart> */}
                </svg>
            </div>
        )
    }
}

export default D3chart;





// import React, { Component } from 'react'
// import {select} from "d3"
// import { scaleBand, scaleLinear, scaleTime, axisBottom} from "d3-scale"
// // import { axisBottom, axisLeft } from 'd3-axis'
// // import { line } from'd3-shape'

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

//         // const xAxisGenaerator = axisBottom()
//         // .scale(x);

//         // const yAxisGenaerator = axisLeft()
//         // .scale(y)

//         // var lineGenerator = line()
//         // .x(function(d){
//         //     return x(new Date(d.time));})
//         // .y(function(d){
//         //     return y(d.Leute);})
            
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


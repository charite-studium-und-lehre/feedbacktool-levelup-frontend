import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import {SlideDown} from 'react-slidedown'
import "./practicals.css"
import Button from 'react-bootstrap/Button';


export function MyDropdown(props) {
    return (
      <SlideDown className={'my-dropdown-slidedown'}>
        {props.open ? props.children : null}
      </SlideDown>
    )
  }


class PracticalsItem extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      open1: false,
      open2: false,
      open3:false,
      open4: false,
      open5: false

     };
    this.handleClick = this.handleClick.bind(this)
}

handleClick() {
  this.setState({
     open1: ! this.state.open1,
     open2: ! this.state.open2,
     open3: ! this.state.open3,
     open4: ! this.state.open4,
     open5: ! this.state.open5,
    
    });
}

    render() {
        return ( 
        <div className="PracticalsItem">
       <div class="btn-group-vertical">
       <button  type="button" className="btn btn-secondary" onClick={this.handleClick} >1. Betreuung von Patienten </button>
       <MyDropdown  open={this.state.open1}>
            <h4>Hallo</h4>
          </MyDropdown>
       <button type="button" className="btn btn-secondary">2. Ärztliche Prozeduren 1</button>
       <MyDropdown open={this.state.open2}>
            <h4>Hallo</h4>
          </MyDropdown>
          <button type="button" className="btn btn-secondary">3. Kommunikation mit Patienten</button>
       <MyDropdown open={this.state.open3}>
            <h4>Hallo</h4>
          </MyDropdown>
          <button type="button" className="btn btn-secondary">4. Kommunikation und Zusammenarbeit mit Kollegen</button>
       <MyDropdown open={this.state.open4}>
            <h4>Hallo</h4>
          </MyDropdown>
          <button type="button" className="btn btn-secondary">5. Weitere ärztliche professionelle Tätigkeit</button>
       <MyDropdown open={this.state.open5}>
            <h4>Hallo</h4>
          </MyDropdown>

         </div>
             
                  

     
                   
               
               
        </div>
        )
    }
}
export default PracticalsItem;



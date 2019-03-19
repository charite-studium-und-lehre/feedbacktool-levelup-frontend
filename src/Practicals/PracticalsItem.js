import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import "./practicals.css"


export function MyDropdown(props) {
    return (
      <SlideDown className={'my-dropdown-slidedown'}>
        {props.open ? props.children : null}
      </SlideDown>
    )
  }


class PracticalsItem extends Component {
    render() {
        return ( 
        <div className="PracticalsItem">
               <MyDropdown>
                   <div >
                       <h2></h2>
                   </div>
               </MyDropdown>
               
        </div>
        )
    }
}
export default PracticalsItem;



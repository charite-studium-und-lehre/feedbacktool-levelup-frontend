import React, { Component } from 'react'
import { SlideDown } from 'react-slidedown'
import MyDropdownList from './MyDropdownList'



export function MyDropdown(props) {
    return (
      <SlideDown className={'my-dropdown-slidedown'}>
        {props.open ? props.children : null}
      </SlideDown>
    )
  }
  

class MyDropdownItem extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
          open1: false,
          open2: false,
          open3: false,
          open4: false,
    
        };
        this.handleClick1 = this.handleClick1.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
        this.handleClick3 = this.handleClick3.bind(this)
        this.handleClick4 = this.handleClick4.bind(this)
       
    
      }

      handleClick1() {
        this.setState({
          open1: !this.state.open1,
    
        });
      }
      handleClick2() {
        this.setState({
          open2: !this.state.open2,
    
        });
      }
      handleClick3() {
        this.setState({
          open3: !this.state.open3
        });
      }
      handleClick4() {
        this.setState({
          open4: !this.state.open4,
        });
      }
    
      
  render() {
    return (
      <div className="MyDropdownItem">
    <button type="button" className="btn btn-primary" onClick={this.handleClick1} >1.1 </button>
    <MyDropdown open={this.state.open1}>
    <MyDropdownList/>
    </MyDropdown>
   
    <button type="button" className="btn btn-primary" onClick={this.handleClick2} >1.1 </button>
    <MyDropdown open={this.state.open2}>
    <MyDropdownList/>
    </MyDropdown>
    <button type="button" className="btn btn-primary" onClick={this.handleClick3} >1.1 </button>
    <MyDropdown open={this.state.open3}>
    <MyDropdownList/>
    </MyDropdown>
        </div>

    )
  }
}
export default MyDropdownItem
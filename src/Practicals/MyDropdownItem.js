import React, { Component } from 'react'
import { SlideDown } from 'react-slidedown'



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
          open5: false
    
        };
        this.handleClick1 = this.handleClick1.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
        this.handleClick3 = this.handleClick3.bind(this)
        this.handleClick4 = this.handleClick4.bind(this)
        this.handleClick5 = this.handleClick5.bind(this)
    
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
      handleClick5() {
        this.setState({
          open5: !this.state.open5,
    
        });
      }
  render() {
    return (
      <div className="MyDropdownItem">
    <button type="button" className="btn btn-primary" onClick={this.handleClick1} >1.1 </button>
    <MyDropdown open={this.state.open1}>
    <ul class="list-group">
  <li className="list-group-item">Cras justo odio</li>
  <li className="list-group-item">Dapibus ac facilisis in</li>
  <li className="list-group-item">Morbi leo risus</li>
  <li className="list-group-item">Porta ac consectetur ac</li>
  <li className="list-group-item">Vestibulum at eros</li>
</ul>
          </MyDropdown>
   
        </div>

    )
  }
}
export default MyDropdownItem
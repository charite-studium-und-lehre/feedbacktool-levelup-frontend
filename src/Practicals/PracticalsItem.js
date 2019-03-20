import React, { Component } from 'react'
import { SlideDown } from 'react-slidedown'
import MyDropdownItem from './MyDropdownItem'





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
    this.props.selectGraph(1)
    this.setState({
      open1: !this.state.open1,

    });
  }
  handleClick2() {
    this.props.selectGraph(2)
    this.setState({
      open2: !this.state.open2,

    });
  }
  handleClick3() {
    this.props.selectGraph(3)
    this.setState({
      open3: !this.state.open3
    });
  }
  handleClick4() {
    this.props.selectGraph(0)
    this.setState({
      open4: !this.state.open4,
    });
  }
  handleClick5() {
    this.props.selectGraph(0)
    this.setState({
      open5: !this.state.open5,

    });
  }

  render() {
    return (
      <div className="PracticalsItem">
        <div class="btn-group-vertical">
          <button type="button" className="btn btn-secondary" onClick={this.handleClick1} >1. Betreuung von Patienten </button>
          <MyDropdown open={this.state.open1}>
          <MyDropdownItem/>
          </MyDropdown>

          <button type="button" className="btn btn-secondary" onClick={this.handleClick2} >2. Ärztliche Prozeduren 1</button>
          <MyDropdown open={this.state.open2}>
          <MyDropdownItem/>
          </MyDropdown>

          <button type="button" className="btn btn-secondary" onClick={this.handleClick3} >3. Kommunikation mit Patienten</button>
          <MyDropdown open={this.state.open3}>
          <MyDropdownItem/>
          </MyDropdown>

          <button type="button" className="btn btn-secondary" onClick={this.handleClick4} >4. Kommunikation und Zusammenarbeit mit Kollegen</button>
          <MyDropdown open={this.state.open4}>
          <MyDropdownItem/>
          </MyDropdown>

          <button type="button" className="btn btn-secondary" onClick={this.handleClick5} >5. Weitere ärztliche professionelle Tätigkeit</button>
          <MyDropdown open={this.state.open5}>
          <MyDropdownItem/>
          </MyDropdown>

        </div>







      </div>
    )
  }
}
export default PracticalsItem;



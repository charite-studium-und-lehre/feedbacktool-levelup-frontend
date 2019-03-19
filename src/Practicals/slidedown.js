
import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

const CSSTransitionGroup = React.addons.CSSTransitionGroup;
const TransitionGroup = React.addons.TransitionGroup;

class Example extends React.Component{
    constructor(props) {
        super(props);
        this.state = { visible: false };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
    	this.setState({ visible: ! this.state.visible });
    }

    render() {
        return <div>
            <button onClick={this.handleClick}>{this.state.visible ? 'Slide up' : 'Slide down'}</button>
            <CSSTransitionGroup transitionName="example">
            	{ this.state.visible ? <div className='panel' /> : null }
            </CSSTransitionGroup>
        </div>
    }
}

export default Example;
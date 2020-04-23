import React, { Component } from 'react'
import COLORS from "../colors";

const asTabs = WrappedComponent => {
    return class Tabs extends Component {
        constructor(props) {
            super(props)
            this.state = { tab: Math.max(...React.Children.map(props.children, (child, i) => props.active && child.props.title === props.active ? i : 0)) }
            this.activeTab = React.createRef()
        }

        componentDidMount() {
            this.updateContainerHeight()
        }

        componentDidUpdate() {
            this.updateContainerHeight()
        }
        
        componentWillUpdate() {
            if(this.activeTab.current) this.activeTab.current.style.height = 0
        }

        updateContainerHeight() {
            if(this.activeTab.current) this.activeTab.current.style.height = 'auto'
        }

        selectTab( tab ) {
            this.setState({ tab })
        }

        render() {
            return (
                <div className="py-2" style={{backgroundColor: COLORS.background.grey0}}>
                    <WrappedComponent selectTab={tab => this.selectTab(tab)} selectedTab={this.state.tab} {...this.props} />
                    <div className="text-nowrap animated pt-4" style={{overflow: `hidden`, backgroundColor: "white"}} >
                        <div className="animated position-relative" style={{left: `-${this.state.tab * 100}%`}}>
                        {React.Children.map(this.props.children, (tc, i) =>
                            <div className="align-top w-100 d-inline-block" key={i} style={{whiteSpace: 'normal', height: 0}} ref={i === this.state.tab ? this.activeTab : null}>{tc}</div>
                        )}
                        </div>
                    </div>
                </div>)
        }
    }
}

export default asTabs(props =>
    <ul className="nav nav-pills" role="tablist">
        {React.Children.map(props.children, (child, i) =>
            <li key={i} className="nav-item" onClick={() => props.selectTab(i)}>
                <span className={`nav-link ${props.selectedTab === i ? 'active color-navigation bg-white' : ''}`} id={`Tabs-> ${child.props.title}`} data-toggle="pill" role="tab">
                    {child.props.title}
                </span>
            </li>
        )}
    </ul>
)
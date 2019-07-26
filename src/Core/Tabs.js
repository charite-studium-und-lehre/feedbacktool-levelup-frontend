import React, { Component } from 'react'

const asTabs = WrappedComponent => {
    return class Tabs extends Component {
        constructor(props) {
            super(props)
            this.state = { tab: Math.max(...React.Children.map(props.children, (child, i) => child.props.title === props.active ? i : 0)) }
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
                <div>
                    <WrappedComponent selectTab={tab => this.selectTab(tab)} selectedTab={this.state.tab} {...this.props} />
                    <div className="text-nowrap animated" style={{overflow: 'hidden'}} >
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

const DefaultTabs = asTabs(props =>
    <ul className="nav nav-pills pb-3" role="tablist">
        {React.Children.map(props.children, (child, i) =>
            <li key={i} className="nav-item" onClick={() => props.selectTab(i)}>
                <span className={`nav-link ${props.selectedTab === i ? 'active' : ''}`} data-toggle="pill" role="tab">{child.props.title}</span>
            </li>
        )}
    </ul>
)

export default DefaultTabs
export { asTabs }
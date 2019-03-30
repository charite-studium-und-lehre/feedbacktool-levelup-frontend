import React, { Component } from 'react'

const tabStyle = {
    width: '100%',
    display: 'inline-block',
    whiteSpace: 'normal'
}

const asTabs = WrappedComponent => {
    return class Tabs extends Component {
        constructor(props) {
            super(props)
            this.state = { tab: this.props.active }
            this.activeTab = React.createRef()
            this.tabContainer = React.createRef()
            this.selectTab.bind(this)
        }

        static defaultProps = {
            active: 0,
        }

        componentDidMount() {
            this.updateContainerHeight()
        }

        componentDidUpdate() {
            this.updateContainerHeight()
        }
        
        updateContainerHeight() {
            this.tabContainer.current.style.height = this.activeTab.current.offsetHeight + 'px'
        }

        selectTab( tab ) {
            this.setState({ tab })
        }

        render() {
            return (
                <div>
                    <WrappedComponent selectTab={tab => this.selectTab(tab)} selectedTab={this.state.tab} {...this.props} />
                    <div className="text-nowrap animated" style={{overflow: 'hidden'}} ref={this.tabContainer}>
                        <div className="animated position-relative" style={{left: `-${this.state.tab * 100}%`}}>
                        {React.Children.map(this.props.children, (tc, i) =>
                            <div key={i} style={tabStyle} ref={i === this.state.tab ? this.activeTab : null}>{tc}</div>
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
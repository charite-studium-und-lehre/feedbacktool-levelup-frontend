import React, { Component } from 'react'

const tabStyle = {
    width: '100%',
    display: 'inline-block',
    whiteSpace: 'normal'
}

class Tabs extends Component {
    constructor(props) {
        super(props)
        this.state = { tab: Math.max(this.props.tabTitles.indexOf(this.props.active), 0) }
        this.activeTab = React.createRef()
        this.tabContainer = React.createRef()
    }

    static defaultProps = {
        tabTitles: [], 
        tabContents: [],
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
                <ul className="nav nav-pills pb-3" role="tablist">
                    {this.props.tabTitles.map((t, i) => 
                        <li key={i} className="nav-item" onClick={() => this.selectTab(i)}>
                            <span className={`nav-link ${this.state.tab === i ? 'active' : ''}`} data-toggle="pill" role="tab">{t}</span>
                        </li>
                    )}
                </ul>
                <div className="position-relative text-nowrap animated mb-2" style={{overflow: 'hidden'}} ref={this.tabContainer}>
                    <div className="animated position-relative" style={{left: `-${this.state.tab * 100}%`}}>
                    {this.props.tabContents.map((tc, i) =>
                        <div key={i} style={tabStyle} ref={i === this.state.tab ? this.activeTab : null}>{tc}</div>
                    )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Tabs
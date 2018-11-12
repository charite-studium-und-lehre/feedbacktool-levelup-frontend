import React, { Component } from 'react'

class Tabs extends Component {
    constructor(props) {
        super(props)
        this.state = { tab: 0 }
    }

    static defaultProps = {
        tabTitles: [], 
        tabContents: [],
    }

    selectTab( tab ) {
        this.setState({ tab })
    }

    render() {
        return (
            <div>
                <ul className="nav nav-pills mb-3" role="tablist">
                    {this.props.tabTitles.map((t, i) => 
                        <li key={i} className="nav-item" onClick={() => this.selectTab(i)}>
                            <span className={`nav-link ${this.state.tab === i ? 'active' : ''}`} data-toggle="pill" role="tab">{t}</span>
                        </li>
                    )}
                </ul>
                <div className="tab-content">
                    {this.props.tabContents.map((tc, i) =>
                        <div key={i} className={`tab-pane fade ${this.state.tab === i ? 'show active': ''}`} role="tabpanel">{tc}</div>
                    )}
                </div>
            </div>
        )
    }
}

export default Tabs
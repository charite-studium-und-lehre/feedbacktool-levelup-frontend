import React, { useState } from 'react'
import COLORS from "../colors"

const Tab = ({ content, selected }) => 
    <div className="align-top w-100 d-inline-block" style={{whiteSpace: 'normal', height: selected ? 'auto' : 0}} >
        {content}
    </div>

const asTabs = HeaderComponent => 
    ({ children, active, ...otherProps}) => {
        const [tab,setTab] = useState(Math.max(...React.Children.map(children, (child, i) => active && child.props.title === active ? i : 0)))

        return (
            <div className="py-2" style={{backgroundColor: COLORS.background.grey0}}>
                <HeaderComponent selectTab={tab => setTab(tab)} selectedTab={tab} {...otherProps}>{children}</HeaderComponent>
                <div className="text-nowrap animated pt-4" style={{overflow: `hidden`, backgroundColor: "white"}} >
                    <div className="animated position-relative" style={{left: `-${tab * 100}%`}}>
                    {React.Children.map(children, (tc, i) => <Tab key={i} selected={i === tab} content={tc} /> )}
                    </div>
                </div>
            </div>)
    }

export default asTabs(props =>
    <ul className="nav nav-pills" role="tablist">
        {React.Children.map(props.children, (child, i) =>
            <li key={i} className="nav-item" onClick={() => props.selectTab(i)}>
                <span className={`nav-link ${props.selectedTab === i ? 'active color-navigation bg-white' : ''}`} data-toggle="pill" role="tab">
                    {child.props.title}
                </span>
            </li>
        )}
    </ul>
)
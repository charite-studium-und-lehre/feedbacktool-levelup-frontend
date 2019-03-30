import React from 'react'
import { asTabs } from '../Core/Tabs'
import PracticalsItem from './PracticalsItem'
import tree from './tree'
import PracticalsScore from './PracticalsScore'

const Tabs = asTabs(props => (
    <div className="position-absolute w-100 h-100" style={{zIndex: 1}}>
        <div className="row h-100">
            <div className="col-6 m-auto" onClick={() => props.selectTab(Math.max(props.selectedTab - 1, 0))}>
                <span className="m-2">-</span>
            </div>
            <div className="col-6 m-auto text-right " onClick={() => props.selectTab(Math.min(props.selectedTab + 1, React.Children.count(props.children) - 1))}>
                <span className="m-2">+</span>
            </div>
        </div>
    </div>
))

class PracticalsTree extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
        <div style={{fontSize: '.9rem'}}>
            <div className="card p-2">
                <h5>Mein Level</h5>
                <PracticalsScore headings={true} entry={tree} />
            </div>
            <div className="card mt-2">
                <Tabs>
                {tree.entries.map(e =>
                    <PracticalsItem title={e.label} extended={false} entry={e} level={1} />
                )}
                </Tabs>
            </div>
        </div>)
    }
}

export default PracticalsTree
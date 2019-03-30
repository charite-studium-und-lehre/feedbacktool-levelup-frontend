import React from 'react'
import { asTabs } from '../Core/Tabs'
import PracticalsItem from './PracticalsItem'
import tree from './tree'
import PracticalsScore from './PracticalsScore'

const Tabs = asTabs(props => (
    <div>
        {React.Children.map(props.children, (child, i) => <div onClick={() => props.selectTab(i)}>{child.props.title}</div>)}
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
            <Tabs>
            {tree.entries.map(e =>
                <PracticalsItem title={e.label} extended={false} entry={e} level={1} />
            )}
            </Tabs>
        </div>)
    }
}

export default PracticalsTree
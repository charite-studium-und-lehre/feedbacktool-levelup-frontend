import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { asTabs } from '../Core/Tabs'
import PracticalsItem from './PracticalsItem'

const Tabs = asTabs(props => (
    <div className="w-100 position-absolute" style={{zIndex: 1}}>
        <div className="row">
            <div className="col-6" onClick={() => props.selectTab(Math.max(props.selectedTab - 1, 0))}>
                {props.selectedTab > 0 && <FontAwesomeIcon className="ml-2" icon={faChevronLeft} />}
            </div>
            <div className="col-6 text-right " onClick={() => props.selectTab(Math.min(props.selectedTab + 1, React.Children.count(props.children) - 1))}>
                {props.selectedTab < React.Children.count(props.children) - 1 && <FontAwesomeIcon className="mr-2" icon={faChevronRight} />}
            </div>
        </div>
    </div>
))

class PracticalsTree extends React.Component {
    render() {
        return (
        <div style={{fontSize: '.9rem'}}>
            <div className="row mt-2">
                <div className="position-relative w-100">
                    <Tabs>
                    {this.props.tree.entries.map(e =>
                        <PracticalsItem edit={this.props.edit} key={e.label} entry={e} />
                    )}
                    </Tabs>
                </div>
            </div>
        </div>)
    }
}

export default PracticalsTree
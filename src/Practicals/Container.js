import React from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import Score from './Score'
import Legend from '../Charting/Legend'
import LegendTexts from '../Core/LegendTexts'
import Toolbar from './Toolbar'
import { selectors } from './Store'
const legend = LegendTexts.Practicals.Main

class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = { edit: false }
    }

    toggleEdit = () => this.setState({edit: !this.state.edit})

    render() {
        return (
        <div style={{fontSize: '.9rem'}}>
            <div className="card p-2">
                <Legend title={legend.title}>{legend.text}</Legend>
                <div className="row">
                    <div className="col-12">
                        <Score headings={true} entry={this.props.root} />
                    </div>
                </div>
            </div>
            <Toolbar toggleEdit={this.toggleEdit} edit={this.state.edit} />
            <div className="row">
                {this.props.root.entries.map(e =>
                    <div key={e} className="col-12">
                        <Item edit={this.state.edit} entryId={e} level={1} />
                    </div>
                )}
            </div>
        </div>)
    }
}

export default connect(state => ({ root: selectors.getItemByLabel(state, 'root') }))(Container)
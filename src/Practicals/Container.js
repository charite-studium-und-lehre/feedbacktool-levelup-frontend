import React from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import Legend from '../Charting/Legend'
import Legends from '../Core/LegendTexts'
import Toolbar from './Toolbar'
import { selectors } from './Store'

class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = { edit: false }
    }

    toggleEdit = () => this.setState({ edit: !this.state.edit })

    render() {
        return (
            <div style={{ fontSize: '.9rem' }}>
                <div className="card p-2">
                    <Legend title={Legends.Practicals.Main.title}>{Legends.Practicals.Main.text}</Legend>
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
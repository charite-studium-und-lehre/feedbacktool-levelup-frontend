import React from 'react'
import SlideDown from 'react-slidedown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faFileExport, faEnvelopeOpenText, faListOl } from '@fortawesome/free-solid-svg-icons'
import makeExtendable from '../Core/makeExtendable'
import List from './List'
import Score from './Score'
import { withTranslation } from 'react-i18next'

const Button = (props) =>
    <div className={`d-inline-block ${props.className || ''}`}>
        <button className={`btn btn-sm mr-2 ${props.active ? 'btn-success' : 'btn-primary'}`} onClick={props.onClick}>
            <span className="d-none d-lg-inline mr-2">{props.children}</span>
            <FontAwesomeIcon icon={props.icon} />
        </button>
    </div>

class Toolbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { list: false }
    }
    render() {
        const { t } = this.props
        return (
            <div className="p-2 mt-2 card text-right sticky-top" style={{ top: '3.7rem' }}>
                <div>
                    <div className="row">
                        <div className="col-7">
                            <Score headings={true} entry={this.props.root} />
                        </div>
                        <div className="col-5">
                            <Button className="d-lg-none" icon={faListOl} active={this.state.list} onClick={() => this.setState({ list: !this.state.list })} />
                            <Button icon={faFileExport}>{t(`Export`)}</Button>
                            <Button icon={faEnvelopeOpenText} active={this.props.extended} onClick={this.props.toggleExtended}>{t(`Fremdeinschätzung</B`)}</Button>
                            <Button icon={faEdit} active={this.props.edit} onClick={this.props.toggleEdit}>{this.props.edit ? t(`speichern`): t(`bearbeiten`)}</Button>
                        </div>
                    </div>
                    <SlideDown className="animated fast">
                        {this.state.list &&
                            <div className="text-left bg-white px-2">
                                <List />
                            </div>}
                    </SlideDown>
                    <SlideDown className="animated fast">
                        {this.props.extended &&
                            <div className="p-2">
                                <div className="d-flex">
                                    <div className="flex-grow-1">
                                        <input className="form-control form-control-sm" placeholder="email"></input>
                                    </div>
                                    <div className="">
                                        <button className="btn btn-sm btn-success" onClick={this.props.toggleExtended}>senden</button>
                                    </div>
                                </div>
                                <div className="text-secondary text-left" style={{ fontSize: '.7rem' }}>{t(`Wir senden einen Link an diese Email-Adresse, über den eine Fremdeinschätzung abgegeben werden kann.`)}</div>
                            </div>}
                    </SlideDown>
                </div>
            </div>
        )
    }
}

export default withTranslation()(makeExtendable(Toolbar))
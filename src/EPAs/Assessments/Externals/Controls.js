import React, { useState } from 'react'
import _ from 'lodash/fp'
import SlideDown from 'react-slidedown'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMailBulk, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { actions } from './Store'
import Request from './Request'
import List from './List'

export default _.compose([connect(null, { resetFilter: () => actions.setFilter(null) }), withTranslation()])(
    ({ t, ...props }) => {

        const Button = props =>
            <div className={` ${props.className || ''}`}>
                <button className='btn btn-sm mr-2 mb-2 text-wrap color-button-color' onClick={props.onClick}>
                    <span className="d-lg-inline mr-2" id={props.id}>{props.children}</span>
                    <FontAwesomeIcon icon={props.icon} />
                </button>
            </div>

        const [extended, setExtended] = useState(0)
        const toggle = i => setExtended(extended !== i && i)

        return <div className="container-fluid p-4">
            <div className="row">
                <div className="col-sm-6">
                    <Button icon={faMailBulk} active={extended === 1}
                        onClick={() => { toggle(1); props.resetFilter(); }}
                        id='Button Erhaltene Fremdbewertungen'>
                        {t('Erhaltene Fremdbewertungen')}
                    </Button>
                </div>
                <div className="col-sm-6 text-sm-right">
                    <Button icon={faEnvelope} active={extended === 2}
                        onClick={() => toggle(2)} id='Button Fremdbewertung einfordern'>
                        {t('Fremdbewertung einfordern')}
                    </Button>
                </div>
            </div>
            <SlideDown className="animated fast">
                {extended === 1 && <List />}
                {extended === 2 && <Request />}
            </SlideDown>
        </div>
    })
import React from 'react'
import _ from 'lodash/fp'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import { selectors, actions as requestActions } from './Store'
import { selectors as assessmentsSelectors, actions } from '../../Store'
import { selectors as epasSelectors, actions as epasActions } from '../../../Store'
import needsData, { Spinner } from '../../../../Core/needsData'
import { asItem } from '../../../Common/Item'
import { asEpasTabs } from '../../../Common/Tabs'
import CheatSheetCard from '../../../Common/CheatSheetCard'
import Info from './Info'
import Rating from './Rating'

const load = ownProps => _.over([ requestActions.loadWithToken(ownProps.match.params.token), epasActions.load() ])
const loaded = (state, ownProps) => selectors.itemLoaded(state, ownProps.match.params.token) && epasSelectors.loaded(state) || selectors.getStatus(state).failed

const Item = asItem(null, null, Rating)
const Tabs = asEpasTabs(Item)

const stateToProps = (state, ownProps) => ({ 
    request: selectors.getByToken(state, ownProps.match.params.token),
    failed: selectors.getStatus(state).failed,
    ...assessmentsSelectors.getStatus(state),
})

const catchFail = Comp => ({ failed, ...props }) => 
    failed ? <p className="text-center m-2">
        Das angegebene Token ist ungültig. Es wurde entweder bereits eine Bewertung abgeschickt, oder es liegt keine Anfrage vor.
    </p> : <Comp {...props} />

const Assessment = _.compose([needsData(loaded, load), connect(stateToProps, actions), catchFail, withTranslation()])(
    ({ t, request, send, request: { token }, error, sending, sent }) =>
    !sent ? <div className="container-fluid">
        <div className="row">
            <div className="col-lg-4">
                <div className="d-lg-none mt-2">
                    <Info {...request} />
                </div>
                <div className="sticky-top" style={{top: '4rem'}}>
                    <CheatSheetCard />
                </div>
            </div>
            <div className="col-lg-8 mt-2">
                <div className="d-none d-lg-block">
                    <Info {...request} />
                </div>
                <div className="card mt-2">
                    <Tabs />
                </div>
                {error && <div className="p-2 text-center text-danger">
                    {t('Das hat leider nicht funktioniert. Bitte senden Sie uns eine Mail an ')}
                    <a className="color-navigation" href={`mailto: levelup@charite.de?subject=${token} failed to send`}>levelup@charite.de</a>.
                </div>}
                <div className="p-2">
                    <button type="submit" className="w-100 btn btn-info"
                        disabled={sending}
                        onClick={() => window.confirm(t('Soll die Bewertung jetzt abgesendet werden?')) && send(token)}>
                        {sending ? <Spinner className="text-white" /> : t('absenden')}
                    </button>
                </div>
            </div>
        </div>
    </div> :
    <div className="text-center">{t('Vielen Dank. Die Bewertung wurde abgesendet. Wir werden die anfordernde Person darüber informieren.')}</div>
)
export default Assessment
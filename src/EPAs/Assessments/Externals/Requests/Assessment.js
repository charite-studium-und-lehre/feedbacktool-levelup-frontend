import React from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import { selectors, actions as requestActions } from './Store'
import { selectors as assessmentsSelectors, actions } from '../../Store'
import { selectors as epasSelectors } from '../../../Store'
import needsData, { Spinner } from '../../../../Core/needsData'
import Tab from './Tab'
import Tabs from '../../../../Utils/Tabs'
import CheatSheetCard from '../../../Common/CheatSheetCard'
import Info from './Info'

const load = ownProps => requestActions.loadWithToken(ownProps.match.params.token)
const loaded = (state, ownProps) => selectors.loaded(state, ownProps.match.params.token)

const Title = connect((state, ownProps) => ({label: epasSelectors.getById(state, ownProps.entryId).label}))(props => props.label)

const stateToProps = (state, ownProps) => ({ 
    request: selectors.getByToken(state, ownProps.match.params.token),
    root: epasSelectors.getById(state),
    ...assessmentsSelectors.getStatus(state),
})
const Assessment = [needsData(loaded, load), connect(stateToProps, actions), withTranslation()].reduceRight((f,g) => g(f), 
    ({ t, request, root, send, match: { params: { token }}, error, sending, sent }) =>
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
                    <Tabs inactiveColor="#e9ecef">
                        {root.entries.map(e => <Tab key={e} entryId={e} title={ <Title entryId={e}/> } /> )}
                    </Tabs>
                </div>
                {error && <div className="p-2 text-center text-danger">
                    {t('Das hat leider nicht funktioniert. Bitte senden Sie uns eine Mail an ')}
                    <a className="color-navigation" href={`mailto: levelup@charite.de?subject=${token} failed to send`}>levelup@charite.de</a>.
                </div>}
                <div className="p-2">
                    <button type="submit" className="w-100 btn btn-info"
                        disabled={sending}
                        onClick={() => window.confirm(t('Soll die Bewertung jetzt abgesendet werden?')) && send(token)}>
                        {sending ? <Spinner className="text-white" /> : 'absenden'}
                    </button>
                </div>
            </div>
        </div>
    </div> :
    <div className="text-center">{t('Vielen Dank. Die Bewertung wurde abgesendet. Wir werden die anfordernde Person darüber informieren.')}</div>
)
export default Assessment
import React from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import { selectors, actions as requestActions } from './RequestsStore'
import { actions } from '../Store'
import { selectors as epasSelectors } from '../../Store'
import needsData from '../../../Core/needsData'
import Tab from './Tab'
import Tabs from '../../../Utils/Tabs'
import CheatSheetCard from '../../static/CheatSheetCard'
import Legend from '../../../Charting/Legend'

const load = ownProps => requestActions.loadWithToken(ownProps.match.params.token)
const loaded = (state, ownProps) => selectors.loaded(state, ownProps.match.params.token)

const Title = connect((state, ownProps) => ({label: epasSelectors.getById(state, ownProps.entryId).label}))(props => props.label)

const Info = withTranslation()(({ t, name, angefragteTaetigkeiten, studiName, studiEmail, kommentar, datum }) => 
<div className="card">
        <div className="p-3"><Legend extended={true} title={t('Fremdbewertung abgeben')} >
                <p>Hallo <strong>{name}</strong>!</p>
                <p>Sie wurden am <strong>{datum.toLocaleDateString()}</strong> von <strong>{studiName}</strong> gebeten eine Einschätzung zu seinen*ihren ärztlichen Tätigkeiten abzugeben.</p>
                {angefragteTaetigkeiten && <p><u>Tätigkeit / Kurs:</u> {angefragteTaetigkeiten}</p>}
                {kommentar && <p><u>Kommentar:</u> {kommentar}</p>}
                <p>Sie müssen nicht alle Items bewerten. Bei Fragen können Sie den*die Student*in unter <a className="color-navigation" href={`mailto: ${studiEmail}`}>{studiEmail}</a> erreichen. Bei technischen Problemen können Sie uns unter <a className="color-navigation" href={'mailto: levelup@charite.de'}>levelup@charite.de</a> kontaktieren.</p>
            </Legend>
        </div>
    </div>)

const stateToProps = (state, ownProps) => ({ 
    request: selectors.getByToken(state, ownProps.match.params.token),
    root: epasSelectors.getById(state),
    error: selectors.getError,
})
const Assessment = [needsData(loaded, load), connect(stateToProps, actions), withTranslation()].reduceRight((f,g) => g(f), 
    ({ t, request, root, send, match: { params: { token }}, error }) =>
    <div className="container-fluid">
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
                {error && <div className="p-2">
                    <div>{error}</div>
                </div>}
                <div className="p-2">
                    <button type="submit" className="w-100 btn btn-info" 
                        onClick={() => window.confirm(t('Soll die Bewertung jetzt abgesendet werden?')) && send(token)}>
                        absenden
                    </button>
                </div>
            </div>
        </div>
    </div>
)
export default Assessment
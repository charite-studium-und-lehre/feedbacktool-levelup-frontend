import React from 'react'
import { withTranslation } from 'react-i18next'
import Legend from '../../../../Charting/Legend'

const Info = withTranslation()(
    ({ t, name, angefragteTaetigkeiten, studiName, studiEmail, kommentar, datum }) => 
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
export default Info
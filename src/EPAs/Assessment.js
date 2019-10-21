
import React, { useState } from 'react'
import { withTranslation } from 'react-i18next'
import SlideDown from 'react-slidedown'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'

import { Button } from './Toolbar'
import ExternAsk from './ExternAsk'
import ExternAssessingn from './ExternAssessing'

const Assessment = ({ t, ...props }) => {
    const [extended, setExtended] = useState(0)
    const toggle = i => setExtended(extended !== i && i)

    return <div className=" mt-4 py-4 pb-2 card">
        <div className='row'>
            <div className="col-4">
                <input className='form-control' placeholder='Bewertungen filtern nach Stichwort'/>
            </div>
            <div className="col-4">
                <Button icon={faEnvelopeOpenText} active={extended === 1} onClick={() => toggle(1)}>{t(`Erhaltene Fremdbewertung`)}</Button>
            </div>
        </div>
        <SlideDown className="animated fast">
            {extended === 1 &&
                <div className='row p-2'>
                    <ExternAssessingn />
                </div>}
        </SlideDown>
        < SlideDown className="animated fast">
            {extended === 2 && <ExternAsk onClick={props.toggleExtended} />}
        </SlideDown>
    </div>
}

export default withTranslation()(Assessment)


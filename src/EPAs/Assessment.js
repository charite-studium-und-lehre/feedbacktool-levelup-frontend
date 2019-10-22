import React, {useState} from 'react'
import {withTranslation} from 'react-i18next'
import SlideDown from 'react-slidedown'
import {faMailBulk, faEnvelope} from '@fortawesome/free-solid-svg-icons'

import {Button} from './Toolbar'
import ExternAsk from './ExternAsk'
import ExternAssessing from './ExternAssessing'

export default withTranslation()(({t, ...props}) => {
    const [extended, setExtended] = useState(0)
    const toggle = i => setExtended(extended !== i && i)

    return <div className="container-fluid">
        <div className="row p-2 ">
            <div className="col">
                <Button icon={faMailBulk} active={extended === 1}
                        onClick={() => toggle(1)}>{t(`Erhaltene Fremdbewertungen`)}</Button>
            </div>
            <div className="col">
                <Button className="float-md-right" icon={faEnvelope} active={extended === 2}
                        onClick={() => toggle(2)}>{t(`Fremdbewertung einfordern`)}</Button>
            </div>
        </div>
        <SlideDown className="animated fast p-2">
            {extended === 1 && <ExternAssessing/>}
        </SlideDown>
        < SlideDown className="animated fast p-2">
            {extended === 2 && <ExternAsk onClick={props.toggleExtended}/>}
        </SlideDown>
    </div>
})


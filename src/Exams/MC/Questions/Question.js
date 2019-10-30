import React from 'react'
import SimpleBar from '../../../Charting/SimpleBar'
import { withTranslation } from 'react-i18next'
import { colors } from './Filters'

const Answer = withTranslation()(({t, ...props}) => (
    <div className="m-1">
        <span>{props.children}</span>
        {props.richtig ? (<span className='ml-1 badge badge-success'>{t(`richtige Antwort`)}</span>) : ''}
        {props.ausgewaehlt ? (<span className='ml-1 badge badge-danger'>{t(`deine Antwort`)}</span>) : ''}
    </div>
))

const Question = ({t, ...props}) => {
    const tags = [
        { color: colors[0], label: props.fach.titel },
        { color: colors[1], label: props.modul.titel },
    ]
    return <div className="row">
        <div className="col">
            <div className="p-2 mb-2" style={{ borderTop: '1px solid lightgrey' }}>
                <span className="font-weight-bold ml-1" style={{fontSize: '.8rem'}}>
                    {props.text}
                </span>
                <div style={{fontSize: '.8rem'}}>
                    { props.antworten.map((answer, i) => 
                        <Answer key={i} {...answer}>{answer.text}</Answer>) }
                </div>
                {props.durchschnittRichtig !== null && 
                    <SimpleBar value={Math.round(props.durchschnittRichtig * 100)}>
                        {Math.round(props.durchschnittRichtig * 100)} {t(`% haben diese Frage richtig beantwortet`)}
                    </SimpleBar>
                }
                <div className="text-right">
                    { tags.map(tag => <span style={{ backgroundColor: tag.color }} className="badge badge-primary mr-1" key={tag.label}>{ tag.label }</span> )}
                </div>
            </div>
        </div>
    </div>
}

export default withTranslation() (Question)
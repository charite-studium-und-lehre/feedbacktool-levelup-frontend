import React from 'react'
import SimpleBar from '../../../Charting/SimpleBar'
import { colors } from './Filters'
import COLORS from "../../../colors";

const Answer = props => (
    <div className="m-1">
        <span>{props.children}</span>
        {props.richtig
            ? (<span className='ml-1 badge' style={{backgroundColor: 'var(--color-graphs-correct)'}}>richtige Antwort</span>)
            : ''}
        {props.ausgewaehlt
            ? (<span className='ml-1 badge'
                     style={{backgroundColor: (props.ausgewaehlt===props.richtig)? 'var(--color-graphs-correct)': 'var(--color-graphs-wrong)'}}>
                deine Antwort`</span>)
            : ''}
    </div>
)

const Question = props => {
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
                    <SimpleBar value={Math.round(props.durchschnittRichtig * 100)}
                     colorPartOfTotal={COLORS.mc.darker0} colorTotal={COLORS.mc.lighter1}>
                        {Math.round(props.durchschnittRichtig * 100)} % haben diese Frage richtig beantwortet
                    </SimpleBar>
                }
                <div className="text-right">
                    { tags.map(tag => <span style={{ backgroundColor: tag.color }} className="badge badge-primary mr-1" key={tag.label}>{ tag.label }</span> )}
                </div>
            </div>
        </div>
    </div>
}

export default Question
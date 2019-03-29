import React from 'react'
import SimpleBar from '../../Charting/SimpleBar'
const Answer = props => (
    <div className="m-1">
        <span>{props.label}) </span>
        <span>{props.children}</span>
        {props.correct ? (<span className='ml-1 badge badge-success'>richtige Antwort</span>) : ''}
        {props.selected ? (<span className='ml-1 badge badge-danger'>deine Antwort</span>) : ''}
        <div className="bg-success" style={{width:props.percentage}}></div>
    </div>
)

const Question = props => {
    const percentage = props.answers.find(a => a.correct).percentage
    return (
        <div className="row">
            <div className="col">
                <div className="card p-2 mb-2">
                    <span className="font-weight-bold" style={{fontSize: '.8rem'}}>
                        {props.text}
                    </span>
                    <div style={{fontSize: '.8rem'}}>
                        { props.answers.map(answer => 
                            <Answer key={answer.label} {...answer}>{answer.text}</Answer>) }
                    </div>
                    <SimpleBar value={percentage}>
                        {percentage} % haben diese Frage richtig beantwortet
                    </SimpleBar>
                    <div className="text-right">
                        { (props.tags || []).map(tag => <span className="badge badge-primary mr-1 bg-info" key={tag.label}>{ tag.label }</span> )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question
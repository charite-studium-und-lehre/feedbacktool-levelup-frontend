import React from 'react'

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
                    <div className="my-1 text-center text-white question-bar" style={{backgroundImage: `linear-gradient(to right, rgba(23, 162, 184, .8) ${percentage}%, rgba(23, 162, 184, .4) ${percentage}%)`}}>
                        {percentage} % haben diese Frage richtig beantwortet
                    </div>
                    <div className="text-right">
                        { (props.tags || []).map(tag => <span className="badge badge-primary mr-1" style={{backgroundColor: tag.color}} key={tag.label}>{ tag.label }</span> )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question
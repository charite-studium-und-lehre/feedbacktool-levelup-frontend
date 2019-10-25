import React from 'react'
import Subjects from './Subjects'
import Rankings from './Rankings'
import Legend from '../Charting/Legend'
import Legends from '../Core/LegendTexts'

const Strengths = ({match}) => {
    const LegendText = Legends.Strengths
    return (
        <div className="container-fluid">
            <div className="card mb-4">
                <div className="card-body">
                    <Legend title={LegendText.Explanation.title}>
                        {LegendText.Explanation.text}
                    </Legend>
                </div>
            </div>
            <div className="mb-4">
                <Rankings/>
            </div>
            <div className="card">
                <div className="card-body">
                    <Legend title={LegendText.Subjects.title}>{LegendText.Subjects.text}</Legend>
                </div>
                <Subjects flash={match.params.subject}/>
            </div>
        </div>
    )
}

export default Strengths
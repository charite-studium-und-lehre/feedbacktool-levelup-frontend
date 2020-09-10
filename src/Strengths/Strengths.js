import React from 'react'
import Subjects from './Subjects'
import Rankings from './Rankings'
import Legend from '../Charting/Legend'
import Legends from '../Core/LegendTexts'

const Strengths = ({ match }) => {
    const LegendText = Legends.Strengths
    const legende = <Legend
        title={LegendText.Explanation.title}>
        {LegendText.Explanation.text.map((text, index) =>
            <p style={{ fontWeight: index === 1 && 'bold' }} key={text}>{text}</p>)}
    </Legend>
    return (
        <div className="container-fluid">
            <div className="card mt-2">
                <div className="card-body">
                    {legende}
                </div>
            </div>
            <div className="mt-2">
                <Rankings />
            </div>
            <div className="card my-2">
                <div className="card-body">
                    <Legend title={LegendText.Subjects.title}>{LegendText.Subjects.text}</Legend>
                </div>
                <Subjects flash={match.params.subject} />
            </div>
        </div>
    )
}

export default Strengths
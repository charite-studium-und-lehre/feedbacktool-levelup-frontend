import React from 'react'
import Subjects from './Subjects'
import Rankings from './Rankings'
import PTMResults from '../Exams/Ptm/Results'
import Legend from '../Charting/Legend'
import Legends from '../Core/LegendTexts'

const Strengths = ({ match }) => {
    const LegendText = Legends.Strengths
    return (
    <div className="container-fluid">
        <div className="row">
            <div className="col">
                <Legend title={LegendText.Main.title}>
                {LegendText.Main.text}
                </Legend>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-md-8 mb-2">
                <Rankings />
            </div>
            <div className="col-md-4 mb-2">
                <PTMResults />
            </div>
        </div>
        <div className="row">
            <div className="col">
                <div className="card p-3">
                    <Legend title={LegendText.Subjects.title}>{LegendText.Subjects.text}</Legend>
                    <Subjects flash={match.params.subject} />
                </div>
            </div>
        </div>
    </div>
)}

export default Strengths
import React from 'react'
import Legend from '../../Charting/Legend'
import LegendTexts from '../../Core/LegendTexts'
import Subjects from './Subjects'
import Results from './Results'

const Ptm = ({ match }) => {
    const LegendText = LegendTexts.Exams.Ptm
    
    return (
        <div className="container-fluid mb-2">
            <div className="row">
                <div className="col">
                    <h4 className="mr-auto">PTM - {match.params.test}</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4 mb-2">
                    <Results semester={match.params.test} />
                </div>
                <div className="col-xl-8">
                    <div className="card p-3">
                        <Legend title={LegendText.Subjects.title}>{LegendText.Subjects.text}</Legend>
                        <Subjects semester={match.params.test} />
                    </div>
                </div>
            </div>
            {/* <div className="row">
                <div className="col">
                <div className="card p-3">
                <Legend title={LegendText.Organsystem.title}>{LegendText.Organsystem.text}</Legend>
                <SubjectsTabs>
                {props.data.fächer.map(c => 
                    <div key={c.title} title={c.title} className="d-flex flex-wrap">
                    {_.sortBy(c.subjects, d => d.title).map(s => <SubjectAlt key={s.title} name={s.title} semester={match.params.test} />)}
                    </div>
                    )}
                    </SubjectsTabs>
                    </div>
                    </div>
                </div> */}
        </div>
    )
}

export default Ptm
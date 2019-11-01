import React from 'react'

export const ScoreWrapper = ({ levels }) => 
    <div className="container-fluid">
        <div className="row text-center">
            {levels.map( (l, i) => <div key={i} className="col-12 col-sm-4 p-0 pb-2">{l}</div> )}
        </div>
    </div>

export default ScoreWrapper
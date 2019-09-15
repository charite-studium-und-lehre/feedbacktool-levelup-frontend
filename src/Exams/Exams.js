import React from 'react'
import MainChart from './MainChart'

const Exams = props =>
    <div className="container-fluid">
        <div className="row my-2">
            <div className="col">
                <div className="card">
                    <div className="card-body p-4" style={{height: '5rem'}}>
                        <MainChart />
                    </div>
                </div>
            </div>
        </div>
    </div>

export default Exams
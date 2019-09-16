import React from 'react'
import MainChart from './MainChart'

const Exams = props =>
    <div className="container-fluid pb-4 mb-2" style={{backgroundColor: '#e9ecef', marginTop: '-.5rem'}}>
        <div className="row">
            <div className="col p-0">
                <div className="" style={{height: '1rem'}}>
                    <MainChart />
                </div>
            </div>
        </div>
    </div>

export default Exams
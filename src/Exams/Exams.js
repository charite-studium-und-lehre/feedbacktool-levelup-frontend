import React from 'react'
import MainChart from './MainChart'

const Exams = props =>
<nav aria-label="breadcrumb">
    <ol className="breadcrumb p-0">
        <li className="breadcrumb-item w-100" aria-current="page">
            <div className="container-fluid py-4 mb-2" style={{}}>
                <div className="row">
                    <div className="col p-0">
                        <div className="" style={{height: '1rem'}}>
                            <MainChart />
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </ol>
</nav>
        

export default Exams
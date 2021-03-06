import React from 'react'
import MainChart from './MainChart'

const Exams = () =>
<nav aria-label="breadcrumb">
    <ol className="breadcrumb p-0">
        <li className="breadcrumb-item w-100" aria-current="page">
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col pb-4 pt-2 overflow-auto" >
                        <MainChart />
                    </div>
                </div>
            </div>
        </li>
    </ol>
</nav>
        

export default Exams
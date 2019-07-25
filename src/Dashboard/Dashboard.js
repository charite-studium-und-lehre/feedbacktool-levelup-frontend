import React from 'react'
import { Link } from 'react-router-dom'
import Progress from './Progress/Progress'
import Timeline from './Timeline/Timeline'
import Stations from './Stations'
import Practicals from './Practicals'
import Strengths from './Strengths'

export default () => 
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-6 mt-2">
                <Progress />
            </div>
            <div className="col-lg-6 mt-2">
                <Timeline />
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4">
                <div className="mt-2">
                    <Link to="/practicals">
                        <Practicals />
                    </Link>
                </div>
            </div>
            <div className="col-lg-4 mt-2">
                <Link to="/exams/stations/all">
                    <Stations />
                </Link>
            </div>
            <div className="col-lg-4">
                <div className="mt-2">
                    <Link to="/strengths">
                        <Strengths />
                    </Link>
                </div>
            </div>
        </div>
    </div>
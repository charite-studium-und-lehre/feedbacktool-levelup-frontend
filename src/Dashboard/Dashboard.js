import React from 'react'
import { Link } from 'react-router-dom'
import Progress from './Progress'
import Timeline from './Timeline/Timeline'
import Ptm from './Ptm'
import Practicals from './Practicals'
import Strengths from './Strengths'
import TellMe from './TellMe'


export default () => 
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-6 mt-2">
                <Link to="/progress">
                    <Progress />
                </Link>
            </div>
            <div className="col-lg-6 mt-2">
                <Timeline />
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 mt-2">
                <Link to="/practicals">
                    <Practicals />
                </Link>
            </div>
            <div className="col-lg-4 mt-2">
                <Ptm />
            </div>
            <div className="col-lg-4 mt-2">
                <Link to="/strengths">
                    <Strengths />
                </Link>
            </div>
            <div className="col-lg-4">
                <div className="mt-2">
                       <TellMe/>
                </div>
            </div>
        </div>
    </div>
import React from 'react'
import { Link } from 'react-router-dom'
import Progress from './Progress'
import Newsfeed from './Newsfeed/Newsfeed'
import Ptm from './Ptm'
import EPAs from './EPAs'
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
                <Newsfeed />
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 mt-2">
                <Link to="/epas">
                    <EPAs />
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
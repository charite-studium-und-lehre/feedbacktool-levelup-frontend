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
        <div className="row flex-wrap-reverse">
            <div className="col-lg-8">
                <div className="row">
                    <div className="col-lg-6 mt-2">
                        <Link to="/progress">
                            <Progress />
                        </Link>
                    </div>
                    <div className="col-lg-6 mt-2">
                        <Ptm />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 mt-2">
                        <Link to="/epas">
                            <EPAs />
                        </Link>
                    </div>
                    <div className="col-lg-6 mt-2">
                        <Link to="/strengths">
                            <Strengths />
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 mt-2">
                        <TellMe/>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <Newsfeed />
            </div>
        </div>
    </div>
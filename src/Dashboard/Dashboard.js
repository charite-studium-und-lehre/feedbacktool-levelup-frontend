import React from 'react'
import {Link} from 'react-router-dom'
import Progress from './Progress'
import Newsfeed from './Newsfeed/Newsfeed'
import NewsfeedMobile from './Newsfeed/NewsfeedMobile'
import Ptm from './Ptm'
import EPAs from './EPAs'
import Strengths from './Strengths'
import TellMe from './TellMe'

export default () =>
    <div className="container-fluid h-100">
        <div className="row h-100 flex-row-reverse">
            <div className="col-lg-4" style={{backgroundColor: '#eee'}}>
                <div className="d-none d-lg-block h-100">
                    <Newsfeed/>
                </div>
                <div className="d-lg-none">
                    <NewsfeedMobile/>
                </div>
            </div>
            <div className="col-lg-8 pt-2 container-fluid" id="deviceInependantWrapper">
                <div className="d-none d-md-block h-100" id="desktopWrapper">
                    <div className="row h-100">
                    <div className="col">
                        <div className="d-flex flex-column justify-content-around h-100">
                            <Link to="/progress">
                                <Progress/>
                            </Link>
                            <Link to="/epas">
                                <EPAs/>
                            </Link>
                            <TellMe/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex flex-column justify-content-around h-100">
                            <Ptm/>
                            <Link to="/strengths">
                                <Strengths/>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="d-md-none" id="mobileWrapper">
                    <Link to="/progress">
                        <Progress/>
                    </Link>
                    <Ptm/>
                    <Link to="/epas">
                        <EPAs/>
                    </Link>
                    <Link to="/strengths">
                        <Strengths/>
                    </Link>
                    <TellMe/>
                </div>
            </div>
        </div>
    </div>
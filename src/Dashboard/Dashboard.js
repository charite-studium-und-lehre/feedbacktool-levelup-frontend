import React from 'react'
import { Link } from 'react-router-dom'
import Progress from './Progress'
import Newsfeed from './Newsfeed/Newsfeed'
import NewsfeedMobile from './Newsfeed/NewsfeedMobile'
import Ptm from './Ptm'
import EPAs from './EPAs'
import Strengths from './Strengths'
import TellMe from './TellMe'

const Cards = () => <div>
    <Link to="/progress">
        <Progress />
    </Link>
    <Ptm />
    <Link to="/epas">
        <EPAs />
    </Link>
    <Link to="/strengths">
        <Strengths />
    </Link>
    <TellMe />
</div>

export default () => 
    <div className="container-fluid h-100">
        <div className="row h-100">
            <div className="col-lg-4" style={{backgroundColor: '#eee'}}>        
                <div className="d-none d-lg-block h-100">
                    <Newsfeed />
                </div>
                <div className="d-lg-none">
                    <NewsfeedMobile />
                </div>
            </div>
            <div className="col-lg-8 pt-2">
                <div className="row">
                    <div className="col">
                        <div className="card-columns d-none d-md-block" style={{columnCount: 2}}>
                            <Cards />
                        </div>
                        <div className="d-md-none">
                            <Cards />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
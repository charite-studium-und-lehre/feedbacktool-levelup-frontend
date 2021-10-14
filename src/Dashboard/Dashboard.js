import React from 'react'
import { Link } from 'react-router-dom'
import Progress from './Progress'
import Aktuell from './Aktuell'
import Newsfeed from './Newsfeed/Newsfeed'
import NewsfeedMobile from './Newsfeed/NewsfeedMobile'
import Ptm from './Ptm'
import EPAs from './EPAs'
import Strengths from './Strengths'
import COLORS from "../colors"
import Evasy from './Evasys'

const Cards = () => <div className="col">
    <Link to="/progress">
        <Progress />
    </Link>
    <Link to="/epas">
        <EPAs />
    </Link>
    <Link to="/strengths">
        <Strengths />
    </Link>
    <Ptm />
    <Evasy/>
</div>

export default () =>
    <div className="container-fluid h-100">
        <div className="row h-100 flex-row-reverse">
            <div className="col-lg-4" style={{ backgroundColor: COLORS.background.grey0 }}>
                <div className="d-none d-lg-block h-100">
                    <Newsfeed />
                </div>
                <div className="d-lg-none">
                    <NewsfeedMobile />
                </div>
            </div>
            <div className="col-lg-8 py-2">
                <div className="row h-100 d-none d-md-flex">
                    <div className="col-6 d-flex flex-column justify-content-around">
                        <Link to="/progress">
                            <Aktuell />
                        </Link>
                        <Link to="/progress">
                            <Progress />
                        </Link>
                        <Link to="/epas">
                            <EPAs />
                        </Link>
                    </div>
                    <div className="col-6  d-flex flex-column justify-content-around">
                        <div className='mt-lg-5'>
                            <Link to="/strengths">
                                <Strengths />
                            </Link>
                        </div>
                        <div className='mb-lg-5'>
                            <Ptm />
                        </div>
                        <div className='mb-lg-5'>
                            <Evasy/>
                        </div>
                
                    </div>
                </div>
                <div className="row d-flex d-md-none">
                    <Cards />
                </div>
            </div>
        </div>
    </div>
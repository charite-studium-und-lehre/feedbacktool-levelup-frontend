
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import COLORS from "../colors"
import Studienfortschritt from './slides/Studienfortschritt.PNG'
import Newsfeed from './slides/Newsfeed.PNG'



const Slide = props => {
    const [show, setShow] = useState(false)
    return (
        <div className='border' style={{ position: 'relative' }}>
            <div onMouseEnter={() => setShow(!show)} onMouseLeave={() => setShow(!show)} style={{ width: '100%', opacity: show ? '0.07' : '0.07' }}>
                <img style={{ width: '100%' }} src={props.slide}></img>
            </div>
            <div className='p-2' style={{ position: 'absolute', top: '0', fontSize: '1.3rem', fontWeight:'500',  display: 'table' }}>
                <h4 style={{display: 'table-cell' ,verticalAlign: 'middle'}}>Du willst wissen, welche Meilensteine du in deinem Studium schon erreicht hast und welche noch fehlen?</h4>
            </div>
        </div>
    )
}

const Tutorial = () =>
    <div className="container-fluid row h-100  ">
        <div className='col-10 m-auto border '>
            <div className="row h-100 flex-row-reverse">
                <div className="col-lg-4">
                    <Slide slide={Newsfeed} />
                </div>
                <div className="col-lg-8 py-2">
                    <div className="row h-100 d-none d-md-flex">
                        <div className="col-6 d-flex flex-column justify-content-around">
                            <Link to="/tutorial/studienfort">
                                <Slide slide={Studienfortschritt} />
                                <div>jjj</div>
                            </Link>
                            <Link to="/tutorial/studien">
                                <Slide slide={Studienfortschritt} />
                            </Link>
                        </div>
                        <div className="col-6  d-flex flex-column justify-content-around">
                            <div className='mt-lg-5'>
                                <Link to="/strengths">
                                    <Slide slide={Studienfortschritt} />
                                </Link>
                            </div>
                            <div className='mb-lg-5'>
                                <Slide slide={Studienfortschritt} />
                            </div>
                            <div className='mb-lg-5'>
                                <Slide slide={Studienfortschritt} />
                            </div>

                        </div>
                    </div>
                    <div className="row d-flex d-md-none">
                        {/* <Cards /> */}
                    </div>
                </div>
            </div>
        </div>
    </div>


export default Tutorial
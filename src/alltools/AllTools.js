import React from 'react';
import { Link } from 'react-router-dom' 
import {StudyToolsData, OtherToolsData } from './AllToolsData'
import stift from '../images/stift.svg'
import spritze from '../images/spritze.svg'
const  MakeStairsList = props => (
    <div className='col-12 col-md-6 col-xl-5 mt-4 mt-md-2'>
            <img src={props.img} alt='' style={{
                    position: "absolute",
                    height: "80%",
                    transform:`rotate(17deg) translate(${props.translate}) scale(${props.scale})`,
                    zIndex: -1
                }}/>
        <h2 className='pl-3'>{props.heading}</h2>
                 <div className='mt-4' >
            {props.data.map((d, i) => <div className='mt-3 pl-3' style={{marginLeft: window.innerWidth > 942 ?`${ 8 - i}rem`: '1rem'}} key={i}>
                <h5 className="font-weight-bold">{d.title}</h5>
                { i === 0 && props.link  ? <Link to='/consulting' className="text-primary" >{d.href}</Link>
                :<a className="text-primary " style={{overflowWrap: 'break-word'}} id={d.title}  href={d.href} target="blank">{d.href}</a>}
                </div>)}
            </div>
    </div>
) 

const  AllTools = props => (
    <div className='row pb-3'>
         <MakeStairsList 
             img={stift}
             translate='6rem, 9rem'
             scale='1.4'
             heading="Lern-Tools"
             data={StudyToolsData}/>
         <MakeStairsList 
             img={spritze}
             translate='5rem'
             scale='1'
             heading="Weiteres"
             link={true}
             data={OtherToolsData}/>
    </div>
)

export default AllTools

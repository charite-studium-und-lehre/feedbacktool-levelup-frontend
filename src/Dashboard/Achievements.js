import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat, faHeart, faSyringe, faHospital, faBandAid, faBookOpen, faMedkit } from '@fortawesome/free-solid-svg-icons'

export default function Achievements() {
    const achievements = [
        {name: 'Basic Life Support', done: true, icon: faHeart}, 
        {name: 'Advanced Life Support',  done: false, icon: faHeartbeat}, 
        {name: 'Famulaturreife',  done: true, icon: faSyringe}, 
        {name: 'Pflegepraktikum',  done: true, icon: faBandAid}, 
        {name: 'Physikum',  done: true, icon: faBookOpen}, 
        {name: 'PJ',  done: false, icon: faHospital}, 
        {name: 'OSCE', done: false, icon: faMedkit},
    ]
    const cards = achievements.map((a,i) => (
        <span key={i} style={{fontSize: '.7rem'}} className={`text-center m-2 flex-grow-1 ${a.done ? 'text-info' : 'text-light'}`}>
            <FontAwesomeIcon style={{fontSize: '3rem'}} icon={a.icon}/>
            <br /><br />{a.name}
        </span>
    ))

    return (<div className="card">
        <div className="card-body">
            <h5 className="card-title">Achievements</h5>
            <div className="card-text">
                <div className="row">
                    <div className="col d-flex flex-wrap">
                        {cards}
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
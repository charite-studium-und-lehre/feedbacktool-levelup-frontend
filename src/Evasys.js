import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDumbbell, faFrown, faSmile, faGrinBeam} from '@fortawesome/free-solid-svg-icons'

const Evasy = () => (
    <div className='card with-border mt-2'>
        <div className='card-body text-center p-0'>
            <h3 className=' mt-3'>Nutzerumfrage LevelUp</h3>
            <p  className=' mt-3'>" gib uns Deine Feedbak "</p>
            <div>
                <span><FontAwesomeIcon icon={faFrown}/></span>
                <span><FontAwesomeIcon icon={faSmile}/></span>
                <span><FontAwesomeIcon icon={faGrinBeam}/></span>
            </div>
            <div className='m-auto' style={{width:'12rem'}}>
            <a className='btn color-button-color form-control mt-2' target="blank" href='https://charite.evasys.de/evasys/online.php?p=19W_LevelUp' >
                    Mitmachen <span className='ml-2'><FontAwesomeIcon icon={faDumbbell}/></span>
                </a>
                
            </div>
        </div>
    </div>
)
export default Evasy


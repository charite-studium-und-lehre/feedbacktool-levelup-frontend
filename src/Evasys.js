import React from 'react'
import COLORS from "./colors"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks, faFrown, faSmile, faGrinBeam } from '@fortawesome/free-solid-svg-icons'


const Icon = (props) =><span className='mr-4'><FontAwesomeIcon icon={props.icon} style={{backgroundColor:COLORS.textBlack, color:COLORS.smiley, fontSize: '2rem',borderRadius:'50%'}}/></span>

const Evasy = () => (
    <div className='card with-border mt-2'>
        <div className='card-body text-center p-0'>
            <h3 className='mt-3'>Nutzerumfrage LevelUp</h3>
            <h5 className='mt-3'>"gib uns Deine Feedback"</h5>
            <div className='mx-auto my-3' style={{ width: '16rem' }}>
                <div className='mt-4'>
                    <Icon icon={faFrown} />
                    <Icon icon={faSmile} />
                    <Icon icon={faGrinBeam} />
                </div>
                <a className='btn color-button-color form-control mt-3' target="blank" href='https://charite.evasys.de/evasys/online.php?p=19W_LevelUp'>
                    Mitmachen <span className='ml-2' ><FontAwesomeIcon icon={faTasks} style={{fontSize:'1.3rem'}} /></span>
                </a>
            </div>
        </div>
    </div>
)
export default Evasy


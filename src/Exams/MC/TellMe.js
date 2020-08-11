import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDumbbell} from "@fortawesome/free-solid-svg-icons";
import tellMeLogo from "../../images/tellMeLogo.PNG";


const TellMe = () => (
    <div className='card p-3' style={{ fontSize: '.9rem' }}>
        <div className='row'>
            <div className=' col-12'>
                <img src={tellMeLogo} alt="tellme-logo" className='pb-1 mb-2 mr-3'
                     style={styles.tellMeLogo}/>
                <span className='mt-3 font-weight-bold'>Das Lehr-/Lerntool für den MSM 2.0</span>
            </div>
            <div className='col-12'>
                <p className='mt-2 p-0 '>Hier kannst du dein aktuelles Wissen zu den originalen MC-Fragen testen</p>
            </div>
            <a className='btn color-button-color ml-3 mt-2 px-4' style={{ position: 'relative', bottom: '0' }} target="blank" href='https://msm-tellme.charite.de/lernen' >
                Trainieren mit<span className='ml-2'><FontAwesomeIcon icon={faDumbbell} /></span>
            </a>
        </div>
    </div>
)

const styles = _ => ({
    tellMeLogo: {
        width: "7rem"
    }
});

export default TellMe;

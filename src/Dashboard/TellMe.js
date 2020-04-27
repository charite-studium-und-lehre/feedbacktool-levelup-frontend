import React from 'react'
import DashbordCard from './DashboardCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { withTranslation } from 'react-i18next'
import tellMeLogo from '../images/tellMeLogo.PNG'

const Tellme = ({ t }) => (
    <div className='card p-3' style={{ fontSize: '.9rem' }}>
        <div className='row'>
            <div className=' col-12'>
                <img src={tellMeLogo} alt="tellme-logo" className='pb-1 mb-2 mr-3' style={{ width: '7rem' }}></img>
                <span className='mt-3 font-weight-bold'>Das Lehr-/Lerntool für den MSM 2.0</span>
            </div>
            <div className='col-12'>
                <p className='mt-2 p-0 '>Hier kannst du dein aktuelles Wissen zu den originalen MC-Fragen testen</p>
            </div>
            <a className='btn color-button-color ml-3 mt-2 px-4' style={{ position: 'relative', bottom: '0' }} target="blank" href='https://msm-tellme.charite.de/lernen' >
                {t(`Trainieren mit`)}<span className='ml-2'><FontAwesomeIcon icon={faDumbbell} /></span>
            </a>
        </div>
    </div>
)
export default withTranslation()(Tellme)

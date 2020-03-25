import React from 'react'
import DashbordCard from './DashboardCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { withTranslation } from 'react-i18next'
import tellMeLogo from '../images/tellMeLogo.PNG'

const Tellme = ({ t }) => (
    <DashbordCard>
        <div className='row'>
        <div className='col-4 col-md-3'>
        <img src={tellMeLogo} alt="tellme-logo" className='pb-1 mb-2' style={{ width: '7rem' }}></img>
        </div>
        <div className='col-8 col-md-9'>
            <p className='mt-3 font-weight-bold'>Das Lehr-/Lerntool für den MSM 2.0</p>
        </div>
            <div className='col-12'>
                <p className='mt-2'>Hier kannst du dein aktuelles Wissen zu den originalen</p>
                <p style={{textDecorationLine:'underline'}}>MC-Fragen testen</p>
            </div>
            <div className='col-6 col-md-4'>
                <a className='btn color-button-color form-control mt-2' style={{ position: 'relative', bottom: '0' }} target="blank" href='https://msm-tellme.charite.de/lernen' >
                    {t(`Trainieren mit`)}<span className='ml-2'><FontAwesomeIcon icon={faDumbbell} /></span>
                </a>
            </div>
        </div>
    </DashbordCard>
)
export default withTranslation()(Tellme)
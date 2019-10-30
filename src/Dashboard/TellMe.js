import React from 'react'
import DashbordCard from './DashboardCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDumbbell, faBookOpen} from '@fortawesome/free-solid-svg-icons'
import {withTranslation} from 'react-i18next'
import tellMeLogo from '../images/tellMeLogo.PNG'

const Tellme =({t})=> (
    <DashbordCard>
        <img src={tellMeLogo} alt="tellme-logo" className='pb-1 mb-2' style={{width: '7rem'}}></img>
        <div className='row'> 
            <div className='col-12'>
                <span className='font-weight-bold ' style={{borderBottom:'2px solid black'}}>{t(`news`)}:</span>
                <p className='mt-2'>Unsere ersten Lerneinheiten für Dich sind fertig: M14 & M17</p>
            </div>
        </div>
        <div className="row">
            <div className='col-md-6'>
                <a className='btn color-button-color form-control mt-2' style={{position:'relative', bottom:'0'}} target="blank" href='https://msm-tellme.charite.de/lernen' >
                    {t(`Trainieren`)}<span className='ml-2'><FontAwesomeIcon icon={faDumbbell}/></span>
                </a>
            </div>
            <div className='col-md-6'>
                <a className='btn color-button-color form-control mt-2' style={{position:'relative', bottom:'0'}} target="blank" href='https://msm-tellme.charite.de/lernen' >
                    {t(`Mitmachen`)}<span className='ml-2'><FontAwesomeIcon icon={faBookOpen}/></span>
                </a>
            </div>
        </div>
    </DashbordCard>
)
export default withTranslation()(Tellme)
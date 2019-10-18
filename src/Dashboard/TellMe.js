import React from 'react'
import DashbordCard from './DashboardCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDumbbell} from '@fortawesome/free-solid-svg-icons'
import legends from '../Core/LegendTexts'
import {withTranslation} from 'react-i18next'

const Tellme =({t,})=> (
    <div>
        <DashbordCard>
            <div className='tellMeLogo pb-1 mb-3'></div>
            <div>{legends.TellMe.text}</div>
                <div className='row'> 
                    <div className='col-12'>
                        <span className='font-weight-bold ' style={{borderBottom:'2px solid black'}}>{t(`Neues`)}:</span>
                        <p className='mt-2'>Unsere ersten Lerneinheiten für Dich sind fertig: M14 & M17</p>
                    </div>
                        <div className='col-12 col-sm-6 '>
                        <a className='btn btn-secondary form-control mt-2' style={{position:'relative', bottom:'0'}} target="blank" href='https://msm-tellme.charite.de/lernen' >
                          {t(`Trainieren`)}<span className='ml-2'><FontAwesomeIcon icon={faDumbbell}/></span>
                        </a>
                    </div>
                </div>
        </DashbordCard>
    </div>
)
export default withTranslation()(Tellme)
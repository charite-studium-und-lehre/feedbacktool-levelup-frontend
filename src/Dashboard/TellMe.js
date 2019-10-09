import React from 'react'
import DashbordCard from './DashboardCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDumbbell} from '@fortawesome/free-solid-svg-icons'


const tellme =()=> (
    <div>
        <DashbordCard>
        <div className='tellMeLogo pb-1 mb-2'></div>
         <p>Hier kannst du dein aktuelles Wissen anhand von Prüfungsfragen testen und erhältst Rückmeldungen zu deinen Antworten. Pilotphase: TellMe ist gerade erst an den Start gegangen und braucht noch ein wenig Unterstützung. Daher sind aktuell nur die Fragen aus Modul 17 vollständig einsehbar und kommentiert. Wenn du das ändern möchtest, dann mach mit und kommentiere zusammen mit Kommiliton*innen und XX weitere Fragen mit deinen Lösungsvorschlägen.</p>
            <div className='row'> 
                <div className='col-12 '>
                    <span className='font-weight-bold ' style={{borderBottom:'2px solid black'}}>Neues:</span>
                    <p className='mt-2'>Aktulle ...Version M17 mit kommentierten Fragen. </p>
                </div>
                    <div className='col-12 col-sm-6 '>
                    <a className='btn btn-secondary form-control mt-2' style={{position:'relative', bottom:'0'}}  href='https://msm-tellme.charite.de/lernen' >
                    Trainieren  <span className='ml-2'><FontAwesomeIcon icon={faDumbbell}/></span></a>
                </div>
            </div>
        </DashbordCard>
    </div>
)
export default tellme
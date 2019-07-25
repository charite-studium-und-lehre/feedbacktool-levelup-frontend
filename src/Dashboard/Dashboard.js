import React from 'react'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import DashboardCard from './DashboardCard'
import Progress from './Progress/Progress'
import Timeline from './Timeline/Timeline'
import SimpleBar from '../Charting/SimpleBar'
import Subjects, { strongestSubject } from '../Exams/Subjects'
import Stations from './Stations'
import Practicals from './Practicals'

const mcStrongestSubject = strongestSubject(Subjects('mc'))
const ptmStrongestSubject = strongestSubject(Subjects('ptm'))
export default withTranslation()(({ t }) => 
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-6 mt-2">
                <Progress />
            </div>
            <div className="col-lg-6 mt-2">
                <Timeline />
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4">
                <div className="mt-2">
                    <Link to="/practicals">
                        <Practicals />
                    </Link>
                </div>
            </div>
            <div className="col-lg-4 mt-2">
                <Link to="/exams/stations/all">
                    <Stations />
                </Link>
            </div>
            <div className="col-lg-4">
                <div className="mt-2">
                    <Link to="/strengths">
                        <DashboardCard 
                        header={Math.round(Math.random() * 100) + ' p'} 
                        title={t(`Deine Stärken`)} 
                        text={t(`Dein Überblick zu deinen fächerorientierten Stärken im PTM und den Semesterprüfungen über das gesamte Studium.`)}>
                        <div className="mb-3">
                            <div style={{fontSize: '.8rem'}} className="text-secondary">{t`Stärkstes Fach in deinen gesamten MCs`}</div>
                            {mcStrongestSubject.name}
                            <SimpleBar value={mcStrongestSubject.richtig} total={mcStrongestSubject.gesamt}>{mcStrongestSubject.richtig} von {mcStrongestSubject.gesamt}</SimpleBar>
                        </div>
                        <div className="">
                            <div style={{fontSize: '.8rem'}} className="text-secondary">{t(`Stärkstes Fach im letzten PTM`)}</div>
                            {ptmStrongestSubject.name}
                            <SimpleBar value={ptmStrongestSubject.richtig} total={ptmStrongestSubject.gesamt}>{ptmStrongestSubject.richtig} von {ptmStrongestSubject.gesamt}</SimpleBar>
                        </div>
                        </DashboardCard>
                    </Link>
                </div>
            </div>
        </div>
    </div>)
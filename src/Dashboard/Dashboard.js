import React from 'react'
import { Link } from 'react-router-dom'
import DashboardCard from './DashboardCard'
import Progress from './Progress/Progress'
import Timeline from './Timeline/Timeline'
import graphs from '../Exams/Graphs'
import PracticalsScore from '../Practicals/Score'
import SimpleBar from '../Charting/SimpleBar'
import Subjects, { strongestSubject } from '../Exams/Subjects'
import StationsData from '../Exams/Stations/Data'

const mcStrongestSubject = strongestSubject(Subjects('mc'))
const ptmStrongestSubject = strongestSubject(Subjects('ptm'))
export default function Dashboard() {
    return (
        <div className="container-fluid">
          <div className="row">
                <div className="col-lg-6 mt-2">
                    <Progress />
                </div>
                <div className="col-lg-6 mt-2">
                    <Timeline data={graphs.data} />
                </div>
          </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="mt-2">
                        <Link to="/practicals">
                            <DashboardCard 
                            header={Math.round(Math.random() * 100) + ' p'} 
                            title="Ärztliche Tätigkeiten" 
                            text="Dein Überblick zur Entwicklung deiner praktischen Fähigkeiten im Studienverlauf.">
                            <div className="m-2">
                                <PracticalsScore headings />
                            </div>
                            </DashboardCard>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4 mt-2">
                    <Link to="/exams/stations/all">
                        <DashboardCard 
                        header={Math.round(Math.random() * 100) + ' %'} 
                        title="Praktische Prüfungen" 
                        text="Dein Überblick zu den praktischen Prüfungen im Studium.">
                            {StationsData.map(e => 
                            <div key={e.exam}>
                                <span className="text-secondary" style={{fontSize: '.8rem'}}>{e.exam}</span>
                                <SimpleBar value={e.result} >{e.result} %</SimpleBar>
                            </div>)}
                        </DashboardCard>
                    </Link>
                </div>
                <div className="col-lg-4">
                    <div className="mt-2">
                        <Link to="/strengths">
                            <DashboardCard 
                            header={Math.round(Math.random() * 100) + ' p'} 
                            title="Deine Stärken" 
                            text="Dein Überblick zu deinen fächerorientierten Stärken im PTM und den Semesterprüfungen über das gesamte Studium.">
                            <div className="mb-3">
                                <div style={{fontSize: '.8rem'}} className="text-secondary">Stärkstes Fach in den MCs</div>
                                {mcStrongestSubject.title}
                                <SimpleBar value={mcStrongestSubject.correct} total={mcStrongestSubject.questions}>{mcStrongestSubject.correct} von {mcStrongestSubject.questions}</SimpleBar>
                            </div>
                            <div className="">
                                <div style={{fontSize: '.8rem'}} className="text-secondary">Stärkstes Fach im letzten PTM</div>
                                {ptmStrongestSubject.title}
                                <SimpleBar value={ptmStrongestSubject.correct} total={ptmStrongestSubject.questions}>{ptmStrongestSubject.correct} von {ptmStrongestSubject.questions}</SimpleBar>
                            </div>
                            </DashboardCard>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
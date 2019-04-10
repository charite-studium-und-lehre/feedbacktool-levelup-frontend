import React from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import DashboardCard from './DashboardCard'
import { LinearChart } from '../Charting/Chart'
import BarGraph from '../Charting/BarGraph'
import Progress from './Progress/Progress'
import { XAxis, YAxis } from '../Charting/Axis'
import Timeline from './Timeline/Timeline'
import graphs from '../Exams/Graphs'
import PracticalsScore from '../Practicals/Score'
import PracticalsTree from '../Practicals/tree'
import SimpleBar from '../Charting/SimpleBar'
import Subjects, { strongestSubject } from '../Exams/Subjects'

const mcStrongestSubject = strongestSubject(Subjects())
const ptmStrongestSubject = strongestSubject(Subjects())
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
                                <PracticalsScore headings entry={PracticalsTree} />
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
                            <div className="m-3" style={{height: '6rem'}}>
                                <LinearChart yDomain={[0,100]} xDomain={[0,11]}>
                                    <XAxis />
                                    <YAxis />
                                    <BarGraph data={_.range(0,10).map((d,i) => ({x: i+1, y: Math.random() * 100}))} color="rgba(64,64,64,.3)" width={.8}></BarGraph>
                                </LinearChart>
                            </div>
                        </DashboardCard>
                    </Link>
                </div>
                <div className="col-lg-4">
                    <div className="mt-2">
                        <Link to="/strengths">
                            <DashboardCard 
                            header={Math.round(Math.random() * 100) + ' p'} 
                            title="Deine Stärken" 
                            text="Dein Überblick zu deinen Stärken und deiner Entwicklung im PTM und den Semesterprüfungen über das gesamte Studium.">
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
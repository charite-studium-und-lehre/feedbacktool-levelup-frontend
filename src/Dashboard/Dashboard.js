import React from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import DashboardCard from './DashboardCard'
import { LinearChart } from '../Charting/Chart'
import BarGraph from '../Charting/BarGraph'
import Progress from './Progress/Progress'
import { XAxis, YAxis } from '../Charting/Axis'
import Timeline from './Timeline'
import graphs from '../Exams/Graphs'

export default function Dashboard() {
    return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
                <div className="row mt-2">
                    <div className="col-12">
                        <Progress />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12">
                        <Timeline data={graphs.data} />
                    </div>
                </div>
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
                            </DashboardCard>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
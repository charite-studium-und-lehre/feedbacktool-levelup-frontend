import React from 'react';
import { Link } from 'react-router-dom';
import DashboardCard from './DashboardCard';
import { LinearChart } from '../Charting/Chart';
import BarGraph from '../Charting/BarGraph';
import Progress from './Progress/Progress'
import Achievements from './Achievements'
import { XAxis, YAxis } from '../Charting/Axis'
import Timeline from './Timeline'
import graphs from '../Exams/Graphs'

export default function Dashboard() {
    return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
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
            <div className="col-lg-4 mt-2">
                <Achievements></Achievements>
            </div>
          </div>
            <div className="row">
                <div className="col-lg-4 mt-2">
                    <Link to="/exams/stations">
                        <DashboardCard 
                        header={Math.round(Math.random() * 100) + ' %'} 
                        title="Stationsprüfungen" 
                        text="Deine Stärken und Schwächen">
                            <div className="m-3" style={{height: '6rem'}}>
                                <LinearChart yDomain={[0,100]} xDomain={[0,11]}>
                                    <XAxis />
                                    <YAxis />
                                    <BarGraph data={new Array(10).fill(0).map((d,i) => ({x: i+1, y: Math.random() * 100}))} color="rgba(64,64,64,.3)" width={.8}></BarGraph>
                                </LinearChart>
                            </div>
                        </DashboardCard>
                    </Link>
                </div>
                <div className="col-lg-4">
                    <div className="mt-2">
                        <Link to="/practicals">
                            <DashboardCard 
                            header={Math.round(Math.random() * 100) + ' p'} 
                            title="Ärztliche Tätigkeiten" 
                            text="Dein Fortschritt in praktischen Fähigkeiten auf dem Weg zum Healthcare Professional.">
                            </DashboardCard>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="mt-2">
                        <Link to="/strengths">
                            <DashboardCard 
                            header={Math.round(Math.random() * 100) + ' p'} 
                            title="Deine Stärken" 
                            text="Deine Entwicklung in allen Fächern im gesamten Studium.">
                            </DashboardCard>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
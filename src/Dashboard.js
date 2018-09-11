import React from 'react';
import DashboardCard from './DashboardCard';
import Chart from './Chart';
import BarGraph from './BarGraph';
import LineGraph from './LineGraph'
import { Link } from 'react-router-dom';

export default function Dashboard() {
    return (
        <div className="container-fluid">
          <div className="row mb-2 mt-2">
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Dein Fortschritt im Studium</h5>
                        <div className="card-text">
                        Hier kommt ein Fortschrittsbalken mit Meilensteinen.
                        </div>
                    </div>
                    <div className="m-4">
                        <Chart xDomain={[0, 17]} yDomain={[0,60]} ticks={{x:6}}>
                            <BarGraph data={new Array(16).fill(0).map(() => Math.random() * 50)}></BarGraph>
                        </Chart>
                    </div>
                </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
                <Link to="/exams/semester">
                    <DashboardCard 
                        header={Math.round(Math.random() * 100) + ' %'} 
                        title="Semesterprüfungen" 
                        text="Deine Ergebnisse für alle Semester">
                        <div className="m-3" style={{height: '6rem'}}>
                            <Chart yDomain={[0,100]} xDomain={[0,9]}>
                                <LineGraph data={new Array(10).fill(0).map(() => Math.random() * 100)} color="rgba(64,64,64,.3)"></LineGraph>
                            </Chart>
                        </div>
                    </DashboardCard>
                </Link>
            </div>
            <div className="col-lg-4">
                <Link to="/exams/stations">
                    <DashboardCard 
                    header={Math.round(Math.random() * 100) + ' %'} 
                    title="Stationsprüfungen" 
                    text="Deine Stärken und Schwächen">
                        <div className="m-3" style={{height: '6rem'}}>
                            <Chart yDomain={[0,100]} xDomain={[0,11]}>
                                <BarGraph data={new Array(10).fill(0).map(() => Math.random() * 100)} color="rgba(64,64,64,.3)"></BarGraph>
                            </Chart>
                        </div>
                    </DashboardCard>
                </Link>
            </div>
            <div className="col-lg-4">
                <Link to="/exams/ptm">
                    <DashboardCard 
                    header={Math.round(Math.random() * 100) + ' %'} 
                    title="PTM" 
                    text="Alle Ergbenisse, alle Semester">
                    <div className="m-3" style={{height: '6rem'}}>
                        <Chart yDomain={[0,100]} xDomain={[0,9]}>
                            <LineGraph data={new Array(10).fill(0).map(() => Math.random() * 100)} color="rgba(64,64,64,.3)"></LineGraph>
                        </Chart>
                    </div>
                    </DashboardCard>
                </Link>
            </div>
          </div>
        </div>
    );
}
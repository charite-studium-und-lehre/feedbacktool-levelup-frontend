import React from 'react';
import { Link } from 'react-router-dom';
import DashboardCard from './DashboardCard';
import Chart from '../Charting/Chart';
import BarGraph from '../Charting/BarGraph';
import LineGraph from '../Charting/LineGraph'
import Progress from './Progress'
import Achievements from './Achievements'
import { XAxis, YAxis } from '../Charting/Axis'

export default function Dashboard() {
    return (
        <div className="container-fluid">
          <div className="row mt-2">
            <div className="col-lg-8">
                <Progress></Progress>
            </div>
            <div className="col-lg-4">
                <Achievements></Achievements>
            </div>
          </div>
          <div className="row">
          <div className="col-xl-9 mt-2">
          <div className="row">
            <div className="col-lg-4">
                <Link to="/exams/semester">
                    <DashboardCard 
                        header={Math.round(Math.random() * 100) + ' %'} 
                        title="Semesterprüfungen" 
                        text="Deine Ergebnisse für alle Semester"
                        color="color-1">
                        <div className="m-3" style={{height: '6rem'}}>
                            <Chart yDomain={[0,100]} xDomain={[1,4]}>
                                <XAxis />
                                <YAxis />
                                <LineGraph data={new Array(4).fill(0).map((d,i) => ({x: i+1, y: Math.random() * 100}))} color="rgba(64,64,64,.3)"></LineGraph>
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
                    text="Deine Stärken und Schwächen"
                    color="color-3">
                        <div className="m-3" style={{height: '6rem'}}>
                            <Chart yDomain={[0,100]} xDomain={[0,11]}>
                                <XAxis />
                                <YAxis />
                                <BarGraph data={new Array(10).fill(0).map((d,i) => ({x: i+1, y: Math.random() * 100}))} color="rgba(64,64,64,.3)" width={.8}></BarGraph>
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
                    text="Alle Ergbenisse, alle Semester"
                    color="color-2">
                    <div className="m-3" style={{height: '6rem'}}>
                        <Chart yDomain={[0,100]} xDomain={[1,10]}>
                            <XAxis />
                            <YAxis />
                            <LineGraph data={new Array(10).fill(0).map((d,i) => ({x: i+1, y: Math.random() * 100}))} color="rgba(64,64,64,.3)"></LineGraph>
                        </Chart>
                    </div>
                    </DashboardCard>
                </Link>
            </div>
          </div>
          </div>
        <div className="col-xl-3 mt-2">
            <div className="card">
                <Link to="/practcals">
                    <DashboardCard 
                    header={Math.round(Math.random() * 100) + ' p'} 
                    title="Ärztliche Tätigkeiten" 
                    text="Dein Fortschritt in praktischen Fähigkeiten auf dem Weg zum Healthcare Professional."
                    color="color-2">
                    </DashboardCard>
                </Link>
            </div>
        </div>
          </div>
        </div>
    );
}
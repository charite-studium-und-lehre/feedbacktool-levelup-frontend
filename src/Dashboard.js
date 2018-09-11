import React from 'react';
import DashboardCard from './DashboardCard';
import AreaChart from './AreaGraph';
import Chart from './Chart';
import LineGraph from './LineGraph';
import BarGraph from './BarGraph';

export default function Dashboard() {
    const data = new Array(10).fill(0).map(() => [Math.random() * 100, Math.random() * 25, Math.random() * 25 + 25, Math.random() * 25 + 50, Math.random() * 25 + 75 ])

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
          <div className="row mb-2 mt-2">
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Semesterprüfungen</h5>
                    </div>
                    <div className="m-4">
                        <Chart xDomain={[0,data.length - 1]} yDomain={[0,100]}>
                            <AreaChart data={data.map(d => d.slice(1,3))} color="hsla(120, 100%, 30%, .4)"></AreaChart>
                            <AreaChart data={data.map(d => d.slice(2,4))} color="hsla(120, 100%, 50%, .4)"></AreaChart>
                            <AreaChart data={data.map(d => d.slice(3))} color="hsla(120, 100%, 70%, .4)"></AreaChart>
                            <LineGraph data={data.map(d => d[0])} color="hsla(240, 100%, 50%, .4)"></LineGraph>
                        </Chart>
                    </div>
                </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <DashboardCard 
                header={Math.round(Math.random() * 100) + ' %'} 
                title="Semesterprüfungen" 
                text="">
              </DashboardCard>
            </div>
            <div className="col-sm-4">
              <DashboardCard 
                header={Math.round(Math.random() * 100) + ' %'} 
                title="Stationsprüfungen" 
                text="Some quick example text to build on the card title and make up the bulk of the card's content.">
              </DashboardCard>
            </div>
            <div className="col-sm-4">
              <DashboardCard 
                header={Math.round(Math.random() * 100) + ' %'} 
                title="PTM" 
                text="Some quick example text to build on the card title and make up the bulk of the card's content.">
              </DashboardCard>
            </div>
          </div>
        </div>
    );
}
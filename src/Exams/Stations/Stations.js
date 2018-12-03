import React from 'react'

const Stations = ({ match }) => {
    return (
    <div className="container-fluid">
        <div className="row">
            <div className="col">
                <h4 className="mr-auto">Stationsprüfungen - {match.params.test}</h4>
            </div>
        </div>
    </div>)
}

export default Stations
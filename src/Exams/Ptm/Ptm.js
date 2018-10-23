import React from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'

const Ptm = () => {
        return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <h4 className="mr-auto">Dein aktueller PTM</h4>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <div className="d-flex">
                        <div className="card m-2">
                            <div className="card-body">
                                <h4>Zahlen</h4>
                            </div>
                        </div>
                        <div className="card m-2">
                            <div className="card-body">
                                <h4>Fakten</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ptm
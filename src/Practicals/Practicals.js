import React from 'react'
import Container from './Container'
import List from './List'

const Practicals = props => (
    <div className="container-fluid">
        <div className="Practicals">
            <div className="row">
                <div className="col-md-9 mb-2">
                    <Container />
                </div>
                <div className="col-md-3">
                    <List/>
                </div>
            </div>
        </div>
    </div>
)

export default Practicals


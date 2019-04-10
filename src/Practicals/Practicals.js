import React from 'react'
import makeExtendable from '../Core/makeExtendable'
import Container from './Container'
import List from './List'

const Practicals = props => (
    <div className="container-fluid">
            <div className="row position-relative">
                <div className="col-lg-9 mb-2">
                    <Container />
                </div>
                <div className="col-lg-3 d-none d-lg-block">
                    <div className="card py-1 sticky-top" style={{top: '3.7rem'}}>
                        <List/>
                    </div>
                </div>
            </div>
    </div>
)

export default makeExtendable(Practicals)


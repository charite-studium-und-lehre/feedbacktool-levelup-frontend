import React from 'react'
import PracticalsTree from './PracticalsTree'
import PracticalsList from './PracticalsList'

const Practicals = props => (
    <div className="container-fluid">
        <div className="Practicals">
            <div className="row">
                <div className="col-md-9 mb-2">
                    <PracticalsTree />
                </div>
                {/* <div className="col-md-3">
                    <PracticalsList/>
                </div> */}
            </div>
        </div>
    </div>
)

export default Practicals


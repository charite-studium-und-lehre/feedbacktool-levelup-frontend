import React from 'react'
import makeExtendable from '../Core/makeExtendable'
import Controls from './Assessments/Externals/Controls'
import Tabs from './Common/Tabs'
import Explanation from './Common/Explanation'
import CheatSheetCard from "./Common/CheatSheetCard"

const EPAs = () => (
    <div className="container-fluid">
        <div className="row position-relative">
            <div className="col-lg-9 mb-2">
                <Explanation/>
                <div className="d-lg-none"><CheatSheetCard extendet="false"/></div>
                <div className="card mt-2">
                    <Controls />
                    <Tabs />
                </div>
            </div>
            <div className="col-lg-3 d-none d-lg-block">
                <div className="sticky-top" style={{top: '4rem'}}>
                    <CheatSheetCard/>
                </div>
            </div>
        </div>
    </div>
)

export default makeExtendable()(EPAs)
import React from 'react'
import makeExtendable from '../Core/makeExtendable'
import Container from './AssessmentView'
import Explanation from './static/Explanation'
import CheatSheetCard from "./static/CheatSheetCard";

const EPAs = () => (
    <div className="container-fluid">
        <div className="row position-relative">
            <div className="col-lg-9 mb-2">
                <Explanation/>
                <Container/>
            </div>
            <div className="col-lg-3 d-none d-lg-block sticky-top">
                <CheatSheetCard/>
            </div>
        </div>
    </div>
)

export default makeExtendable(EPAs)


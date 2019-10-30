import React from 'react'
import _ from 'lodash/fp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import Filter from '../../../Utils/Filter'
import makeExtendable from '../../../Core/makeExtendable'
import SlideDown from 'react-slidedown';
import COLORS from "../../../colors";

export const colors = [COLORS.background.grey7, COLORS.background.grey4, COLORS.background.grey1]

const filterElementColors = [
    { // Subjects
        background: COLORS.background.grey7,
        line: COLORS.background.grey7,
        text: COLORS.background.base },
    { // Modules
        background: COLORS.background.grey4,
        line: COLORS.background.grey4,
        text: COLORS.background.base },
    { // Difficult
        background: COLORS.background.grey1,
        line: COLORS.background.grey3,
        text: COLORS.textBlack },
    { // Correct
        background: COLORS.background.grey1,
        line: COLORS.background.grey3,
        text: COLORS.textBlack }
]

const Filters = makeExtendable()(
    ({ filters, setters, ...props }) => 
    <div className="p-2">   
        <div className="text-right">
            <button className={`btn btn-sm btn-outline-${_.some(f => f.selected, _.flatten(filters)) ? 'danger' : 'secondary'}`} onClick={props.toggleExtended}>
                Filtern <FontAwesomeIcon icon={faFilter} />
            </button>
        </div>
        <SlideDown className="animated fast">
            {props.extended && <div>
                <div className="d-flex flex-wrap">
                    {filters.map( (f, i) => <Filter key={i} className="mr-2" filters={ f } onUpdate={ setters[i] } color={filterElementColors[i]} /> )}
                </div>
                {props.children}
            </div>}
        </SlideDown>
    </div>)

export default Filters
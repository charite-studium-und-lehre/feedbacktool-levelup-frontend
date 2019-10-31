import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFilter} from '@fortawesome/free-solid-svg-icons'
import Filter from '../../../Utils/Filter'
import makeExtendable from '../../../Core/makeExtendable'
import SlideDown from 'react-slidedown';
import COLORS from "../../../colors";

export const colors = [COLORS.background.grey7, COLORS.background.grey4, COLORS.background.grey1]

const styles = [
    { // Subjects
        colors: {
            background: COLORS.background.grey7,
            line: COLORS.background.grey7,
            text: COLORS.background.base
        },
        classes: ''
    },
    { // Modules
        colors: {
            background: COLORS.background.grey4,
            line: COLORS.background.grey4,
            text: COLORS.background.base
        },
        classes: 'mr-auto'
    },
    { // Difficult
        colors: {
            background: COLORS.background.grey0,
            line: COLORS.background.grey7,
            text: COLORS.background.grey7
        },
        classes: 'float-right'
    },
    { // Correct
        colors: {
            background: COLORS.background.grey0,
            line: COLORS.background.grey7,
            text: COLORS.background.grey7
        },
        classes: 'ml-auto float-right'
    }
]

const Filters = makeExtendable()(
    ({filters, setters, ...props}) =>
        <div className="p-2">
            <div className="text-right">
                <button
                    className={`btn btn-sm color-button-color`}
                    onClick={props.toggleExtended}>
                    Filtern <FontAwesomeIcon icon={faFilter}/>
                </button>
            </div>
            <SlideDown className="animated fast">
                {props.extended && <div>
                    <div className="d-flex flex-wrap">
                        {filters.map((f, i) => <Filter key={i} filters={f} onUpdate={setters[i]}
                                                       className={styles[i].classes} colors={styles[i].colors}/>)}
                    </div>
                    {props.children}
                </div>}
            </SlideDown>
        </div>)

export default Filters
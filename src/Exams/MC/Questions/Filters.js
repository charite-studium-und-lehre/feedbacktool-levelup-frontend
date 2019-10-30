import React from 'react'
import _ from 'lodash/fp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import Filter from '../../../Utils/Filter'
import makeExtendable from '../../../Core/makeExtendable'
import SlideDown from 'react-slidedown';

export const colors = ["hsla(210, 50%, 55%, .8)", "hsla(40, 50%, 55%, .8)", "hsla(150, 50%, 55%, .8)"]
const Filters = makeExtendable(
    ({ filters, setters, ...props }) => 
    <div className="p-2">   
        <div className="d-md-none text-right">
            <button className={`btn btn-sm btn-outline-${_.some(f => f.selected, _.flatten(filters)) ? 'danger' : 'secondary'}`} onClick={props.toggleExtended}>
                Filtern <FontAwesomeIcon icon={faFilter} />
            </button>
        </div>
        <SlideDown className="animated fast">
            {props.extended && <div>
                <div className="d-flex flex-wrap">
                    {filters.map( (f, i) => <Filter key={i} className="mr-2" filters={ f } onUpdate={ setters[i] } color={colors[i]} /> )}
                </div>
                {props.children}
            </div>}
        </SlideDown>
    </div>, true)

export default Filters
import React from 'react'
import _ from 'lodash/fp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import Filter from '../../../Utils/Filter'
import makeExtendable from '../../../Core/makeExtendable'
import SlideDown from 'react-slidedown';

const colors = ["hsla(210, 50%, 55%, 1)", "hsla(170, 50%, 55%, 1)", "hsla(150, 50%, 55%, 1)"]
const Filters = makeExtendable(
    ({ filters, setters, ...props }) => 
    <div className="p-2">   
        <div className="d-md-none text-right" style={{color: _.some(f => f.selected, _.flatten(filters)) ? 'red' : 'grey' }}>
            <FontAwesomeIcon icon={faFilter} onClick={props.toggleExtended} />
        </div>
        <SlideDown className="animated fast">
            {props.extended && <div>
                <div className="d-flex">
                    {filters.map( (f, i) => <Filter key={i} className="mr-2" filters={ f } onUpdate={ setters[i] } color={colors[i]} /> )}
                </div>
                {props.children}
            </div>}
        </SlideDown>
    </div>, true)

export default Filters
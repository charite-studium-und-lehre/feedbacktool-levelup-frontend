import React from 'react'
import _ from 'lodash'
import { withTranslation } from 'react-i18next'
import SimpleBar from '../../Charting/SimpleBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMinus } from '@fortawesome/free-solid-svg-icons'

const StationDetails = props => (
    <div className="mt-2">
        {props.data.map(d => 
            <div key={d.label}>
                <div style={{fontSize: '.7rem'}}>{d.label}</div>
                {_.isNumber(d.value) ? 
                <SimpleBar height='1rem' value={d.value} mean={d.mean} color="hsla(210, 100%, 50%, 1)">
                    {d.value} %
                    <span className="ml-2" style={{float:'left' }}>
                        <FontAwesomeIcon style={{fontSize:'.8rem'}} icon={faMinus}/>
                    </span>
                </SimpleBar> :
                <span>{d.value}</span>
                }
            </div>
        )}
        <div style={{fontSize: '.8rem'}} className="text-primary text-right">{props.t(`schließen`)}</div>
    </div>
)

export default withTranslation() (StationDetails)
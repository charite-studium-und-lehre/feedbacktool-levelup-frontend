import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartLine} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import COLORS from "../../colors";

export function GraphButton(props) {
    return <span className='d-inline-block mx-2 text-center'
                style={{width: '1.2em', height:'1.2em', borderRadius: '1.2em', verticalAlign: 'middle',
                backgroundColor: props.clicked ? COLORS.background.buttonGrey : 'var(--color-navigation)'}}>
        <FontAwesomeIcon style={{color: COLORS.background.base, fontSize: '.81em', verticalAlign: 'baseline'}}
                         icon={faChartLine}/>
    </span>
}
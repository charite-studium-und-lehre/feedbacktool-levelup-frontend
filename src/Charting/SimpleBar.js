import React from 'react'
import _ from 'lodash'
import colors from "../colors"
import KohortenMittelDot from "./KohortenMittelDot";

const defaultStyle = {
    lineHeight: '.8rem',
    fontSize: '.7rem',
    height: '.8rem',
    width: "100%",
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
}

const SimpleBar = props => {
    const total = props.total || 100
    const colorTotal = props.colorTotal || colors.background.grey1
    const colorPartOfTotal = props.colorPartOfTotal || colors.default

    const style = _.defaults({
        backgroundImage: 'linear-gradient(to right, '+ colorPartOfTotal +' 100%,  transparent)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: `${props.value / total * 100}% 100%`,
        backgroundColor: colorTotal,
        height: props.height,
        width: props.width,
    }, defaultStyle)
    
    return (
    <div 
        className="my-1 text-center text-white animated"
        style={style}>
        <span>{props.children}</span>
        {!_.isUndefined(props.mean) && <KohortenMittelDot placing='valueInPercent' valueInPercent={props.mean / total * 100} />}
    </div>
)}

export default SimpleBar
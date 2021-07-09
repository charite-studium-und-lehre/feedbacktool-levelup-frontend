import React from 'react'
import colors from "../colors"
import KohortenMittelDot from "./KohortenMittelDot"

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

    const style = {
        backgroundImage: 'linear-gradient(to right, '+ colorPartOfTotal +' 100%,  transparent)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: `${props.value / total * 100}% 100%`,
        backgroundColor: colorTotal,
        height: props.height,
        width: props.width,
        ...defaultStyle
    }

    return (
    <div
        className="my-1 text-center text-white animated"
        style={style}>
        <span>{props.children}</span>
        {!(props.mean === undefined) && <KohortenMittelDot valueInPercent={props.mean / total * 100} />}
    </div>
)}

export default SimpleBar

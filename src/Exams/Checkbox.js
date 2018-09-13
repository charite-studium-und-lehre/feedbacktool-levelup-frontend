import React from 'react'

export default function Checkbox(props) {
    return (<div className="input-group col-sm-4">
            <div className="input-group-prepend" onClick={() => props.onChange()}>
                <div className="input-group-text" style={{backgroundColor: `hsla(${props.color}, 100%, 60%, .4)`}}>
                    <input type="checkbox" checked={props.checked} onChange={() => props.onChange()} />
                </div>
                <span className="input-group-text">{props.label}</span>
            </div>
        </div>)
}
import React from 'react'
import { withTranslation } from 'react-i18next'

const size = '3rem'
const style = {
    margin: '0 auto',
    borderRadius: '50%',
    height: size,
    width: size,
    lineHeight: size,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
}
const Item = ({t, ...props} ) =>
    (<div className="p-3 bg-white" style={{borderBottom: '1px solid lightgrey'}}>
        <div className="d-flex">
            <div className="p-1">
                <div style={{...style, backgroundColor: props.color}}>{props.icon}</div>
                <div className="font-italic pt-2" style={{fontSize: '.9rem'}}>{props.date.toLocaleDateString()}</div>
            </div>
            <div className="flex-grow-1 px-3">
                {props.children}
            </div>
        </div>
    </div>)

export default withTranslation() (Item)
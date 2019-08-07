import React from 'react'
import { withTranslation } from 'react-i18next'
import _ from 'lodash'
const Circle = props => {
    const dev=[]
    const range = props.range
    for (let i = 0; i < range ; i++) {
        dev.push(<div key={i + "10"} className="mr-1" style={{height:'.95rem', width:'.95rem',backgroundColor:'hsla(161, 100%, 25%, 1)' , display:'inline-block',borderRadius:'5%'}}></div>)
    }
    for (let i = range; i < 5 ; i++) {
        dev.push(<div key={i + "10"} className="mr-1" style={{height:'.95rem', width:'.95rem',backgroundColor:'hsla(161, 100%, 25%, .2)' , display:'inline-block', border: '1px solid hsla(161, 100%, 25%, 1)', borderRadius:'5%'}}></div>)
    }
    return dev
}
const List = ({ t},...pros) => {
     return <div className="p-3">
        <h4>{t(`Level der Eigenständigkeit und Aufsicht`)}</h4>
        <div className="mb-1">{t(`0 - keine Ausführung `)}</div>
        <Circle range={0}/>
        <div className="mb-1">{t(`1 - gemeinsam mit dem Arzt`)}</div>
        <Circle range={1}/>
        <div className="mb-1">{t(`2 - unter Beobachtung des Arztes `)}</div>
        <Circle range={2}/>
        <div className="mb-1">{t(`3 - eigenständig, alles wird nachgeprüft (Arzt auf Station)`)}</div>
        <Circle range={3}/>
        <div className="mb-1">{t(`4 - eigenständig, Wichtiges wird nachgeprüft (Arzt auf Station)`)}</div>
        <Circle range={4}/>
        <div className="mb-1">{t(`5 - eigenständig, Wichtiges wird nachgeprüft (Arzt nur telefonisch erreichbar)`)}</div>
        <Circle range={5}/>
    </div>
}
export default withTranslation() (List)
 





import React from 'react'
import { withTranslation } from 'react-i18next'
import _ from 'lodash'
import Square from './Square'
const level = [`keine Ausführung`,`gemeinsam mit dem Arzt`, `unter Beobachtung des Arztes`, `eigenständig, alles wird nachgeprüft (Arzt auf Station`, `eigenständig, Wichtiges wird nachgeprüft (Arzt auf Station)`, `eigenständig, Wichtiges wird nachgeprüft (Arzt nur telefonisch erreichbar)`]

  
const List = ({ t},...props) => {
     return <div className="p-3">
                <h4>{t(`Level der Eigenständigkeit und Aufsicht`)}</h4>
                {level.map((e, d) => 
                <div key={d}>
                    <div>{`${d} - ${e}`}</div>
                    {_.range(5).map((e, i) =>{
                        const cutoff = _.clamp( i- d + 1 , 0, 1) * 100
                    return <Square key={i} style={{backgroundImage :` linear-gradient(to right, rgb(127, 144, 30, .3) ${cutoff}%, rgb(127, 144, 30) ${cutoff}%)`}}/> 
                    })}
                </div>)}
          </div>
}
export default withTranslation() (List)

 





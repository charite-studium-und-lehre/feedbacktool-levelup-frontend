import React from 'react'
import { withTranslation } from 'react-i18next'
import Numbers from './Numbers'
const level = t => [t(`keine Ausführung`),t(`gemeinsam mit dem Arzt`), t(`unter Beobachtung des Arztes`), t(`eigenständig, alles wird nachgeprüft (Arzt auf Station`), t(`eigenständig, Wichtiges wird nachgeprüft (Arzt auf Station)`), t(`eigenständig, Wichtiges wird nachgeprüft (Arzt nur telefonisch erreichbar)`)]

const List = ({ t }) => {
     return <div className="p-3">
                <h4>{t('Level der Eigenständigkeit und Aufsicht')}</h4>
                {level(t).map((e, d) => 
                <div key={d}>
                    <div>{`${d} - ${e}`}</div>
                    <Numbers color="hsl(161, 100%, 25%)" colorsRgb="hsl(161, 100%, 25%, .2)" value={d} />
                </div>)}
          </div>
}
export default withTranslation() (List)

 





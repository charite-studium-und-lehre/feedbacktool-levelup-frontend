import React from 'react'
import { withTranslation } from 'react-i18next'

const List = ({ t }) => (
    <div className="p-3">
        <h4>{t(`Level der Eigenständigkeit und Aufsicht`)}</h4>
        <div className="mb-1">{t(`0 - keine Ausführung `)}</div>
        <div className="mb-1">{t(`1 - gemeinsam mit dem Arzt`)}</div>
        <div className="mb-1">{t(`2 - unter Beobachtung des Arztes `)}</div>
        <div className="mb-1">{t(`3 - eigenständig, alles wird nachgeprüft (Arzt auf Station)`)}</div>
        <div className="mb-1">{t(`4 - eigenständig, Wichtiges wird nachgeprüft (Arzt auf Station)`)}</div>
        <div className="mb-1">{t(`5 - eigenständig, Wichtiges wird nachgeprüft (Arzt nur telefonisch erreichbar)`)}</div>
    </div>
)

export default withTranslation() (List)
 






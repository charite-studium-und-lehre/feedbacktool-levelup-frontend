import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { withTranslation } from 'react-i18next'

const datenProtection =({t, ...props})=> (
    <div className='pb-3'>
         <h4 className='text-center'>{t(`Datenschutzhinweise`)}</h4>
         <p>{(`Deine Daten werden vertrauensvoll behandelt und sind nicht für Dritte einsehbar.`)}</p>
         <p>{(`Bestimmte Angebote der Webseite kannst Du nur nutzen, wenn Du dich zuvor als Nutzer registrierst. Dabei wird nach deiner Einwilligung ein Hash erstellt und gespeichert, der nur dir nach Login die Zuordnung deiner Prüfungsdaten erlaubt.`)}</p>
         <p>{(`Dieser Hash ist die einzige Information, die als „Nutzerkonto“ gespeichert wird. Er erlaubt keine direkte Identifizierung einer Person.`)}</p>
         <p>{(`Die Anmeldung erfolgt durch den zentralen Single-Sign-On-Dienst der Charité (SSO). Durch diesen Dienst erfährt LevelUp temporär deinen Namen, deine Mailadresse und deinen Nutzernamen.`)}</p>
         <p>{(`LevelUp speichert weder deinen Namen, deine Mailadresse, deinen Nutzernamen noch deine Matrikelnummer. Nach Logout aus LevelUp sind diese Informationen LevelUp nicht mehr bekannt. Die Matrikelnummer wird nur direkt bei der Registrierung verwendet und ist danach für die Webseite nicht mehr wiederherstellbar.`)}</p>
         <p>{(`Die Verarbeitung der Daten im Rahmen der Registrierung und der Einrichtung eines Nutzerkontos (in Form eines Hashes) erfolgen auf der Grundlage deiner Einwilligung. Die Registrierung und das Einrichten eines Nutzerkontos sind freiwillig. Indem Du selbst Deine Registrierung bei LevelUp vornimmst bzw. Dein Nutzerkonto aktivierst, willigst Du in die Verarbeitung der in diesem Rahmen erhobenen Daten ein.`)}</p>
         <p>{(`Die Zuordnung der anonymisierten Prüfungsdaten zu deinem Nutzerkonto, das im Rahmen der Registrierung und der Einrichtung des Nutzerkontos erstellt wurde, besteht für die Dauer des Fortbestehens der Registrierung und der Existenz des Nutzerkontos. Eine Zuordnung ist nur nach Login über SSO möglich. Auch für Administratoren der Webseite ist eine Zuordnung von personenbezogenen Daten ohne Zugriff auf weitere Daten nicht möglich.`)}</p>
         <p>{(`Wenn Du dein Nutzerkonto löschen möchtest, kannst Du uns eine entsprechende Nachricht an die folgende E-Mail-Adresse senden: levelup@charite.de`)}</p>
         <p>{(`Nach Mitteilung Deines Löschbegehrens wird das Nutzerkonto, das heißt der gespeicherte Hash, von uns innerhalb von wenigen Werktagen gelöscht.`)}</p>

        <div className='text-primary' onClick={ props.onClick}>
            <FontAwesomeIcon icon={faChevronLeft}/>
             <span className='font-weight-bold ml-2' style={{cursor:'pointer', fontSize:'15px'}}>{t(`Züruck`)}</span>
        </div>
    </div>
)
export default withTranslation() (datenProtection)
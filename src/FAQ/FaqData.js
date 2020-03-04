import React from 'react'
import {Trans} from 'react-i18next'

const FaqData = [
{
    question: <Trans> Welche Daten brauche ich, um mich zu registrieren?</Trans>,
    answer: <Trans> Du brauchst nur Deine Emailadresse und Deine Matrikelnummer.</Trans>
},
{
    question: <Trans> Ist LevelUp nur für Studierende im MSM 2.0?</Trans>,
    answer: <Trans> Ja, LevelUp funktioniert nur für den MSM 2.0.</Trans>
},
{
    question: <Trans> Ich studiere im MSM 1.1., kann ich trotzdem LevelUp nutzen?</Trans>,
    answer: <Trans> Leider ist LevelUp nur für Studierende im MSM 2.0.</Trans>
},
{
    question: <Trans> Kann ich LevelUp ansehen, wenn ich nicht studiere?</Trans>,
    answer: <Trans> Leider ist die Nutzung von LevelUp nur für Studierende im MSM 2.0 möglich. Es gibt jedoch eine Demo-Version für nicht-Studierende (bzw. auch für Studierende, die noch am Beginn ihres Studiums sind und die spätere Darstellung der Prüfungsergebnisse ansehen möchten). Einfach auf der Login-Seite auf die Demo-Version gehen, oder diesen Link folgen:</Trans>,
     link: <Trans><a className='color-navigation font-weight-bold' target="blank" href='https://levelup.charite.de/app-demo'>https://levelup.charite.de/app-demo</a></Trans>
},
{
    question: <Trans> Kann ich LevelUp vom Handy aus nutzen?</Trans>,
    answer: <Trans> Ja, LevelUp lässt sich ganz bequem  vom Handy aus nutzen. Einfach im Handy-Browser die Adresse aufrufen. LevelUp ist keine App, sondern wird im Browser dargestellt. Somit wird kein Speicherplatz für die App auf Deinem Handy benötigt.</Trans>
},
{
    question: <Trans> Meine letzten Prüfungen werden nicht dargestellt, warum nicht?</Trans>,
    answer: <Trans> Die Ergebnisse der Prüfungen werden erst nach einigen Wochen in LevelUp dargestellt. Teilweise kann es leider auch einige Monate dauern, wie beim PTM. Nicht davon betroffen sind die Daten aus HIS wie Anwesenheiten und Meilensteine wie Pflegepraktikum etc. Diese werden spätestens 2 Tage nach der Darstellung in HIS auch in LevelUp angezeigt.</Trans>
},
{
    question: <Trans> Eines meiner Prüfungsergebnisse stimmt nicht mit den Daten im HIS überein. Woran liegt das?</Trans>,
    answer: <Trans> Möglicherweise handelt es sich um einen Importfehler. Bitte kontaktiere in diesem Fall den Support unter <a className='color-navigation font-weight-bold' href='mailto:levelup@charite.de'>levelup@charite.de</a></Trans>
},
{
    question: <Trans> Ich kann mich mit meinen Charité-Logindaten im LevelUp nicht anmelden/registrieren.</Trans>,
    answer: <Trans> Bist Du aktuell im MSM 2.0 immatrikuliert? Wenn ja,  kontaktiere den Support unter <a className='color-navigation font-weight-bold' href='mailto:levelup@charite.de'>levelup@charite.de</a></Trans>
}

 ]

export default FaqData
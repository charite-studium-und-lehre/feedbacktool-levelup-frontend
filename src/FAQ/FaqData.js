import React from 'react'
const FaqData = [
{
    question: 'Welche Daten brauche ich, um mich zu registrieren?',
    answer: 'Du brauchst nur Deine Emailadresse und Deine Matrikelnummer.'
},
{
    question: 'Ist LevelUp nur für Studierende im MSM 2.0?',
    answer: 'Ja, LevelUp funktioniert nur für den MSM 2.0.'
},
{
    question: 'Ich studiere im MSM 1.1., kann ich trotzdem LevelUp nutzen?',
    answer: 'Leider ist LevelUp nur für Studierende im MSM 2.0.'
},
{
    question: 'Kann ich LevelUp ansehen, wenn ich nicht studiere?',
    answer: 'Leider ist die Nutzung von LevelUp nur für Studierende im MSM 2.0 möglich. Es gibt jedoch eine Demo-Version für nicht-Studierende (bzw. auch für Studierende, die noch am Beginn ihres Studiums sind und die spätere Darstellung der Prüfungsergebnisse ansehen möchten). Einfach auf der Login-Seite auf die Demo-Version gehen, oder diesen Link folgen:',
     link: <a className="color-navigation font-weight-bold"target="blank"href="https://levelup.charite.de/app-demo">https://levelup.charite.de/app-demo</a>
},
{
    question: 'Kann ich LevelUp vom Handy aus nutzen?',
    answer: 'Ja, LevelUp lässt sich ganz bequem  vom Handy aus nutzen. Einfach im Handy-Browser die Adresse aufrufen. LevelUp ist keine App, sondern wird im Browser dargestellt. Somit wird kein Speicherplatz für die App auf Deinem Handy benötigt.'
},
{
    question: 'Meine letzten Prüfungen werden nicht dargestellt, warum nicht?',
    answer: 'Die Ergebnisse der Prüfungen werden erst nach einigen Wochen in LevelUp dargestellt. Teilweise kann es leider auch einige Monate dauern, wie beim PTM. Nicht davon betroffen sind die Daten aus HIS wie Anwesenheiten und Meilensteine wie Pflegepraktikum etc. Diese werden spätestens 2 Tage nach der Darstellung in HIS auch in LevelUp angezeigt.'
},
{
    question: 'Eines meiner Prüfungsergebnisse stimmt nicht mit den Daten im HIS überein. Woran liegt das?',
    answer: 'Möglicherweise handelt es sich um einen Importfehler. Bitte kontaktiere in diesem Fall den Support unter',
    email :<a className="color-navigation font-weight-bold"href="mailto:levelup@charite.de">levelup@charite.de</a>
},
{
    question: 'Ich kann mich mit meinen Charité-Logindaten im LevelUp nicht anmelden/registrieren.',
    answer:'Bist Du aktuell im MSM 2.0 immatrikuliert? Wenn ja,  kontaktiere den Support unter',
    email: <a className="color-navigation font-weight-bold"href="mailto:levelup@charite.de">levelup@charite.de</a>
}

]

export default FaqData

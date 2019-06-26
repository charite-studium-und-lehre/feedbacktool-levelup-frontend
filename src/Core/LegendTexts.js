import React from 'react'


const Legends =  t  =>  ({
    Dashboard: {
        Progress: {
            title: t(`Dein Studienfortschritt`),
            text: t(`Hier siehst Du deinen Studienfortschritt und deine bereits erreichten Meilensteinen.`),
        },
        Timeline: {
            title: t(`Timeline`),
            text: t(`Hier siehst du die Prüfungen, die du in letzter Zeit abgelegt hast.`),
        },
    },
    Exams: {
        MainChart: {
            title: t(`Deine Prüfungsergebnisse`),
            text: t(`Hier siehst du einen Überblick über deine bisherigen Prüfungsergebnisse. Über die Checkboxen kannst du selber auswählen, welche Prüfungsergebnisse du angezeigt bekommen möchtest. Du kannst auf die jeweiligen Ergebnisse klicken, um detaillierte Informationen zu erhalten (z.B. Ergebnisse der einzelnen Module).`),
        },
        Semester: {
            Summary: {
                title: t(`Zusammenfassung deiner Antworten in den Semesterprüfungen`),
                text: t(`Hier siehst du eine Aufstellung nach Fächern der von dir beantworteten Fragen in deinen Semesterprüfungen.`),
            },
            Totals: {
                title: t(`Gesamtes Ergebnis`),
                text: t(`Dies ist eine Darstellung deines Prüfungsergebnisses. Das kumulative Histogramm stellt dar, in welchem Verhältnis du zu deiner Kohorte abgeschnitten hast. Durch das einfache Histogramm lässt sich die Verteilung der Prüfungsergebnisse einsehen.`),
            },
            Details: {
                title: t(`Detaillierte Ergebnisse`),
                text: t(`Hier kannst du sehen, wie du in den zu dieser Semesterprüfung dazugehörigen Modulen und Fächern in Vergleich zu der Kohorte abgeschnitten hast.`),
            },
            Questions: {
                title: t(`Fragen und Antworten`),
                text: <div>
                    <p>{t`Hier kannst du dir alle Fragen der Semesterprüfung mit den dazugehörigen Antworten ansehen.`}</p> 
                    <p>{t`Jede Frage wurde mit verschiedenen Tags versehen, mit deren Hilfe du die Fragen filtern kannst.`}</p>
                    <p>{t`So kannst du dir z.B. nur die Fragen anzeigen lassen, die du falsch beantwortest hast.`}</p>
                    <p>{t`Die Filter schwer und leicht, zeigen dir wieviel deiner Mitstudierenden diese Frage beantworten konnten. Schwere Fragen sind Fragen, die weniger als 50% deiner Mitstudierenden beantworten konnten. Leichte Fragen hingegen konnten mehr als 70% deiner Kommilitonen beantworten`}</p>
                </div>
            }
        },
        Ptm: {
            Totals: {
                title: t(`Gesamtes Ergebnis`),
                text: t(`Hier findest du eine generelle Auswertung deines PTMs im Vergleich mit der Kohorte.`)
            },
            Strengths: {
                title: t(`Starke Fächer in diesem PTM`),
                text: t(`Hier findest du eine Übersicht zu deinen besten vorklinischen, klinischen und Querschnittsfächern im PTM diesen Semesters. Die Auswertung beruht auf dem Verhältnis der richtig beantworteten im Vergleich zu allen beantworteten Fragen.`),
            },
            Subjects: {
                title: t(`Alle Fächer`),
                text: t(`Hier findest du eine Übersicht zu deinen Leistungen in den vorklinischen, klinischen und Querschnittsfächern. Die Ergebnisse basieren auf deinem letzten PTM. Die Auswertung beruht auf dem Verhältnis der richtig beantworteten im Vergleich zu allen gestellten Fragen.`),
            },
            Organsystem : {
                title: t(`Alle Organsystem`),
                text: t(`Hier findest du eine Übersicht zu deinen Leistungen in den vorklinischen, klinischen und Querschnittsfächern. Die Ergebnisse basieren auf deinem letzten PTM. Die Auswertung beruht auf dem Verhältnis der richtig beantworteten im Vergleich zu allen gestellten Fragen.`),
            },
        },
        Stations: {
            Main: {
                title: t(`Praktische Prüfungen`),
                text: t(`Hier siehst du deine Ergebnisse in den bis jetzt absolvierten praktischen Prüfungen. Klicke auf die Flächen über dem Diagramm um deine Ergebnisse zu filtern. Wenn du auf die Balken im Diagramm klickst, bekommst du genauere Informationen zu der jeweiligen Station.`),
            },
        },
    },
    Strengths: {
        Main: {
            title: t(`Deine Stärken und Schwächen`),
            text: t(`Auf dieser Seite findest du eine Übersicht zu deinen stärkeren und schwächeren Fächern in den Semesterprüfungen und dem PTM. Die Auswertung basiert auf den Ergebnissen aller zurückliegenden Semesterprüfungen und dem Ergebnis desaktuellen PTMs. Wichtig: Die Anzahl der gestellten Fragen pro Fach kann sich durch die Verteilung der Fächer im Curriculum und bei der Auswahl der MC-Fragen in den Klausuren stark unterscheiden. Weiterhin findet keine Gewichtung des Rankings der Fächer nach schweren und leichten Fragen statt.`),
        },
        Totals: {
            title: t(`Gesamte Ergebnisse`),
            text: t(`Hier findest du eine Übersicht über deine Ergebnisse in allen Semesterprüfungen.`),
        },
        Semester: {
            title: t(`Starke Fächer in den Semesterprüfungen`),
            text: t(`Hier findest du eine Übersicht zu deinen besten Fächern basierend auf allen deinen Semesterprüfungen. Die Auswertung beruht auf dem Verhältnis der richtig beantworteten im Vergleich zu allen gestellten Fragen. Achtung: Nur Fächer mit mehr als 4 Fragen werden dargestellt um Verzerrungen der Auswertung zu vermeiden.`),
        },
        PTM: {
            title: t(`Starke Fächer im PTM`),
            text: t(`Hier findest du eine Übersicht zu deinen besten Fächern in dem letzten PTM. Die Auswertung beruht auf dem Verhältnis der richtig beantworteten im Vergleich zu allen gestellten Fragen. Der Mittelwert der Kohorte ist durch einen roten Kreis gekennzeichnet. Achtung: Nur Fächer mit mehr als 4 Fragen werden dargestellt um Verzerrungen der Auswertung zu vermeiden.`),
        },
        PTMResults: {
            title: t(`Gesamtes Ergebnis im PTM`),
            text: t(`Hier findest du eine generelle Auswertung deines PTMs im Vergleich mit der Kohorte.`),
        },
        Subjects: {
            title: t(`Alle Fächer`),
            text: t(`Hier findest du eine Übersicht zu deinen Leistungen in den vorklinischen, klinischen und Querschnittsfächern. Die Ergebnisse basieren zum einen auf allen deinen Semesterprüfungen (MCs) und zum anderen auf deinem letzten PTM. Die Auswertung beruht auf dem Verhältnis der richtig beantworteten im Vergleich zu allen gestellten Fragen.`),
        },
    },
    Practicals: {
        Main: {
            title: t(`Mein Level`),
            text: <div><p>{t`Hier siehst du eine Übersicht zu den ärztlichen Tätigkeiten, die du im Laufe des Studiums kennenlernen und praktisch üben wirst. Das Ziel ist, dass du als Absolvent*in des Medizinstudiums dazu in der Lage bist, die hier aufgeführten Tätigkeiten zu Berufsbeginn eigenständig durchzuführen und nur Wichtiges nachgeprüft wird (Level 5).`} </p>
            <p>{t`Bitte gib mindestens einmal im Halbjahr an, unter welchem Level du die jeweilige Tätigkeit bislang ausgeführt hast und unter welchem Level du dir die Tätigkeit zutraust. Hierdurch kannst du permanent einen Überblick über die Entwicklung deiner praktischen Fertigkeiten erhalten. Es ist zudem möglich Fremdeinschätzungen von Ärzten*innen einzuholen.`} </p>
            <p>{t`Insgesamt sind 11 ärztliche Tätigkeiten und 8 Prozeduren gelistet. Die 11 Tätigkeiten werden wiederum in kleinere Tätigkeiten (35) aufgeteilt, die du im Laufe des Studiums ausführen wirst`}.</p>
            <p>{t`Da es das Ziel ist, dass du dir die ärztlichen Tätigkeiten zu Berufsbeginn unter Level 5 zutraust, kannst du maximal 175 „Level“ erreichen`}.</p>
            <p>{t`In roter Schrift siehst du die Anzahl der Level, unter der du die Tätigkeiten ausgeführt hast. In grüner Schrift die Anzahl der Level, unter der du dir die Tätigkeiten zutraust`}.</p>
            </div>
        }
    }
    
})

export default Legends
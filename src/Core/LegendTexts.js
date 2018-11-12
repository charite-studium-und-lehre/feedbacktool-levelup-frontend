import React from 'react'

export default {
    Exams: {
        MainChart: {
            title: 'Deine Prüfungsergebnisse',
            text: 'Hier siehst du einen Überblick über deine bisherigen Prüfungsergebnisse. Über die Checkboxen kannst du selber auswählen, welche Prüfungsergebnisse du angezeigt bekommen möchtest. Du kannst auf die jeweiligen Ergebnisse klicken, um detaillierte Informationen zu erhalten (z.B. Ergebnisse der einzelnen Module).',
        },
        Semester: {
            Summary: {
                title: 'Zusammenfassung deiner Antworten in den Semesterprüfungen',
                text: 'Hier siehst du eine Aufstellung nach Fächern der von dir beantworteten Fragen in deinen Semesterprüfungen.'
            },
            Totals: {
                title: 'Gesamtes Ergebnis',
                text: 'Dies ist eine Darstellung deines Prüfungsergebnisses. Das kumulative Histogramm stellt dar, in welchem Verhältnis du zu deiner Kohorte abgeschnitten hast. Durch das einfache Histogramm lässt sich die Verteilung der Prüfungsergebnisse einsehen.'
            },
            Details: {
                title: 'Detaillierte Ergebnisse',
                text: 'Hier kannst du sehen, wie du in den zu dieser Semesterprüfung dazugehörigen Modulen und Fächern in Vergleich zu der Kohorte abgeschnitten hast. Du kannst auf die jeweiligen Module klicken, um die Verteilung der Prüfungsergebnisse zu sehen.  Die Fächer sind in vorklinische, klinische und Querschnittsfächer eingeteilt. Du kannst auf eine Kategorie klicken, um detaillierte Informationen zu den dazugehörigen Fächern zu erhalten.',
            },
            Questions: {
                title: 'Fragen und Antworten',
                text: <div>
                    <p>Hier kannst du dir alle Fragen der Semesterprüfung mit den dazugehörigen Antworten ansehen.</p> 
                    <p>Jede Frage wurde mit verschiedenen Tags versehen, mit deren Hilfe du die Fragen filtern kannst.</p>
                    <p>So kannst du dir z.B. nur die Fragen anzeigen lassen, die du falsch beantwortest hast.</p>
                </div>
            }
        },
        Ptm: {
            Totals: {
                title: 'Gesamtes Ergebnis',
                text: 'Hier findest du eine generelle Auswertung deines PTMs im Vergleich mit der Kohorte.'
            },
            Strengths: {
                title: 'Starke Fächer in diesem PTM',
                text: 'Hier findest du eine Übersicht zu deinen besten vorklinischen, klinischen und Querschnittsfächern im PTM diesen Semesters. Die Auswertung beruht auf dem Verhältnis der richtig beantworteten im Vergleich zu allen beantworteten Fragen.'
            }
        },
    },
    Strengths: {
        Main: {
            title: 'Deine Stärken und Schwächen',
            text: 'Auf dieser Seite findest du eine Übersicht zu deinen stärkeren und schwächeren Fächern in den Semesterprüfungen und dem PTM. Die Auswertung basiert auf den Ergebnissen aller zurückliegenden Semesterprüfungen und dem Ergebnis des aktuellen PTMs.'
        },
        Totals: {
            title: 'Gesamte Ergebnisse',
            text: 'Hier findest du eine Übersicht über deine Ergebnisse in allen Semesterprüfungen.'
        },
        Strengths: {
            title: 'Starke Fächer in diesem PTM',
            text: 'Hier findest du eine Übersicht zu deinen besten vorklinischen, klinischen und Querschnittsfächern im PTM diesen Semesters. Die Auswertung beruht auf dem Verhältnis der richtig beantworteten im Vergleich zu allen beantworteten Fragen.'
        }
    }
}
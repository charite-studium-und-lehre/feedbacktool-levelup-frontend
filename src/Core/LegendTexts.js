import React from 'react'

export default {
    Dashboard: {
        Progress: {
            title: 'Dein Studienfortschritt',
            text: 'Hier siehst Du deinen Studienfortschritt und deine bereits erreichten Meilensteinen.',
        },
        Timeline: {
            title: 'Timeline',
            text: 'Hier siehst du die Prüfungen, die du in letzter Zeit abgelegt hast.'
        },
    },
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
                text: 'Hier kannst du sehen, wie du in den zu dieser Semesterprüfung dazugehörigen Modulen und Fächern in Vergleich zu der Kohorte abgeschnitten hast.',
            },
            Questions: {
                title: 'Fragen und Antworten',
                text: <div>
                    <p>Hier kannst du dir alle Fragen der Semesterprüfung mit den dazugehörigen Antworten ansehen.</p> 
                    <p>Jede Frage wurde mit verschiedenen Tags versehen, mit deren Hilfe du die Fragen filtern kannst.</p>
                    <p>So kannst du dir z.B. nur die Fragen anzeigen lassen, die du falsch beantwortest hast.</p>
                    <p>Die Filter schwer und leicht, zeigen dir wieviel deiner Mitstudierenden diese Frage beantworten konnten. Schwere Fragen sind Fragen, die weniger als 50% deiner Mitstudierenden beantworten konnten. Leichte Fragen hingegen konnten mehr als 70% deiner Kommilitonen beantworten.</p>
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
        Stations: {
            Main: {
                title: 'Praktische Prüfungen',
                text: 'Hier siehst du deine Ergebnisse in den bis jetzt absolvierten praktischen Prüfungen. Klicke auf die Flächen über dem Diagramm um deine Ergebnisse zu filtern. Wenn du auf die Balken im Diagramm klickst, bekommst du genauere Informationen zu der jeweiligen Station.'
            },
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
        Semester: {
            title: 'Starke Fächer in den Semesterprüfungen',
            text: 'Hier findest du eine Übersicht zu deinen besten Fächern basierend auf allen deinen Semesterprüfungen. Die Auswertung beruht auf dem Verhältnis der richtig beantworteten im Vergleich zu allen gestellten Fragen. Hier findest du eine Übersicht zu deinen besten Fächern basierend auf allen deinen Semesterprüfungen. Die Auswertung beruht auf dem Verhältnis der richtig beantworteten im Vergleich zu allen gestellten Fragen. Achtung: Nur Fächer mit mehr als 4 Fragen werden dargestellt um Verzerrungen der Auswertung zu vermeiden.'
        },
        PTM: {
            title: 'Starke Fächer im PTM',
            text: 'Hier findest du eine Übersicht zu deinen besten Fächern in dem letzten PTM. Die Auswertung beruht auf dem Verhältnis der richtig beantworteten im Vergleich zu allen gestellten Fragen. Der Mittelwert der Kohorte ist durch einen roten Kreis gekennzeichnet. Hier findest du eine Übersicht zu deinen besten Fächern basierend auf allen deinen Semesterprüfungen. Die Auswertung beruht auf dem Verhältnis der richtig beantworteten im Vergleich zu allen gestellten Fragen. Achtung: Nur Fächer mit mehr als 4 Fragen werden dargestellt um Verzerrungen der Auswertung zu vermeiden.'
        },
        PTMResults: {
            title: 'Gesamtes Ergebnis im PTM',
            text: 'Hier findest du eine generelle Auswertung deines PTMs im Vergleich mit der Kohorte.'
        },
        Subjects: {
            title: 'Alle Fächer',
            text: 'Hier findest du eine Übersicht zu deinen Leistungen in den vorklinischen, klinischen und Querschnittsfächern. Die Ergebnisse basieren zum einen auf allen deinen Semesterprüfungen (MCs) und zum anderen auf deinem letzten PTM. Die Auswertung beruht auf dem Verhältnis der richtig beantworteten im Vergleich zu allen gestellten Fragen.'
        },
    },
    Practicals: {
        Main: {
            title: 'Mein Level',
            text: <div><p>Hier siehst du eine Übersicht zu den ärztlichen Tätigkeiten, die du im Laufe des Studiums kennenlernen und praktisch üben wirst. Das Ziel ist, dass du als Absolvent*in des Medizinstudiums dazu in der Lage bist, die hier aufgeführten Tätigkeiten zu Berufsbeginn eigenständig durchzuführen und nur Wichtiges nachgeprüft wird (Level 5). </p>
            <p>Bitte gib mindestens einmal im Halbjahr an, unter welchem Level du die jeweilige Tätigkeit bislang ausgeführt hast und unter welchem Level du dir die Tätigkeit zutraust. Hierdurch kannst du permanent einen Überblick über die Entwicklung deiner praktischen Fertigkeiten erhalten. Es ist zudem möglich Fremdeinschätzungen von Ärzten*innen einzuholen. </p>
            <p>Insgesamt sind 11 ärztliche Tätigkeiten und 8 Prozeduren gelistet. Die 11 Tätigkeiten werden wiederum in kleinere Tätigkeiten (35) aufgeteilt, die du im Laufe des Studiums ausführen wirst.</p>
            <p>Da es das Ziel ist, dass du bei den ärztlichen Tätigkeiten zu Berufsbeginn unter Level 5 ausführen kannst, kannst du maximal 175 „Level“ erreichen. </p>
            <p>In roter Schrift siehst du die Anzahl der Level, unter der du die Tätigkeiten ausgeführt hast. In grüner Schrift die Anzahl der Level, unter der du dir die Tätigkeiten zutraust.</p>
            </div>
        }
    }
}
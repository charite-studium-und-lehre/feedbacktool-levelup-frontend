import React from 'react'
import { Trans } from 'react-i18next'

const Legends = {
    Dashboard: {
        Progress: {
            title: <Trans>Dein Studienfortschritt</Trans>,
            text: <Trans>Hier siehst Du deinen Studienfortschritt und deine bereits erreichten Meilensteinen.</Trans>,
        },
        Timeline: {
            title: <Trans>Timeline</Trans>,
            text: <Trans>Hier siehst du die Prüfungen, die du in letzter Zeit abgelegt hast.</Trans>,
        },
    },
    Exams: {
        MainChart: {
            title: <Trans>Deine Prüfungsergebnisse</Trans>,
            text: <Trans>Hier siehst du einen Überblick über deine bisherigen Prüfungsergebnisse. Über die Checkboxen kannst du selber auswählen, welche Prüfungsergebnisse du angezeigt bekommen möchtest. Du kannst auf die jeweiligen Ergebnisse klicken, um detaillierte Informationen zu erhalten (z.B. Ergebnisse der einzelnen Module).</Trans>,
        },
        Semester: {
            Summary: {
                title: <Trans>Zusammenfassung deiner Antworten in den Semesterprüfungen</Trans>,
                text: <Trans>Hier siehst du eine Aufstellung nach Fächern der von dir beantworteten Fragen in deinen Semesterprüfungen.</Trans>,
            },
            Totals: {
                title: <Trans>Gesamtes Ergebnis</Trans>,
                text: <Trans>Dies ist eine Darstellung deines Prüfungsergebnisses. Das kumulative Histogramm stellt dar, in welchem Verhältnis du zu deiner Kohorte abgeschnitten hast. Durch das einfache Histogramm lässt sich die Verteilung der Prüfungsergebnisse einsehen.</Trans>,
            },
            Details: {
                title: <Trans>Detaillierte Ergebnisse</Trans>,
                text: <Trans>Hier kannst du sehen, wie du in den zu dieser Semesterprüfung dazugehörigen Modulen und Fächern in Vergleich zu der Kohorte abgeschnitten hast.</Trans>,
            },
            Questions: {
                title: <Trans>Fragen und Antworten</Trans>,
                text: <Trans i18nKey="exams.semester.questions.text">
                    <p>Hier kannst du dir alle Fragen der Semesterprüfung mit den dazugehörigen Antworten ansehen.</p> 
                    <p>Jede Frage wurde mit verschiedenen Tags versehen, mit deren Hilfe du die Fragen filtern kannst.</p>
                    <p>So kannst du dir z.B. nur die Fragen anzeigen lassen, die du falsch beantwortest hast.</p>
                    <p>Die Filter schwer und leicht, zeigen dir wieviel deiner Mitstudierenden diese Frage beantworten konnten. Schwere Fragen sind Fragen, die weniger als 50% deiner Mitstudierenden beantworten konnten. Leichte Fragen hingegen konnten mehr als 70% deiner Kommilitonen beantworten</p>
                </Trans>
            }
        },
        Ptm: {
            Totals: {
                title: <Trans>Gesamtes Ergebnis</Trans>,
                text: <Trans>Hier findest du eine generelle Auswertung deines PTMs im Vergleich mit der Kohorte.</Trans>
            },
            Strengths: {
                title: <Trans>Starke Fächer in diesem PTM</Trans>,
                text: <Trans>Hier findest du eine Übersicht zu deinen besten theoretischen, klinischen und Querschnittsfächern im PTM diesen Semesters. Die Auswertung beruht auf dem Verhältnis der richtig beantworteten im Vergleich zu allen beantworteten Fragen.</Trans>,
            },
            Subjects: {
                title: <Trans>Alle Fächer</Trans>,
                text: <Trans>Hier findest du eine Übersicht zu deinen Leistungen in den theoretischen, klinischen und Querschnittsfächern. Die Ergebnisse dargestellt im grünen Balken basieren auf deinem letzten PTM. Die Auswertung beruht auf dem Verhältnis der richtig beantworteten im Vergleich zu allen gestellten Fragen. Deine Entwicklung im PTM innerhalb eines bestimmten Faches kannst du in der darunter stehenden Graphik erkennen.</Trans>,
            },
            Organsystem : {
                title: <Trans>Alle Organsystem</Trans>,
                text: <Trans>Hier findest du eine Übersicht zu deinen Leistungen in den theoretischen, klinischen und Querschnittsfächern. Die Ergebnisse basieren auf deinem letzten PTM. Die Auswertung beruht auf dem Verhältnis der richtig beantworteten im Vergleich zu allen gestellten Fragen.</Trans>,
            },
        },
        Stations: {
            Main: {
                title: <Trans>Praktische Prüfungen</Trans>,
                text: <Trans>Hier siehst du deine Ergebnisse in den bis jetzt absolvierten praktischen Prüfungen. Klicke auf die Flächen über dem Diagramm um deine Ergebnisse zu filtern. Wenn du auf die Balken im Diagramm klickst, bekommst du genauere Informationen zu der jeweiligen Station.</Trans>,
            },
        },
    },
    Strengths: {
        Main: {
            title: <Trans>Deine Stärken und Schwächen</Trans>,
            text: <Trans i18nKey="strengths.main.text">
                <p>Auf dieser Seite findest du eine Übersicht zu deinen stärkeren und schwächeren Fächern in den Semesterprüfungen und dem PTM. Die Auswertung basiert auf den Ergebnissen aller zurückliegenden Semesterprüfungen und dem Ergebnis des aktuellen PTMs.</p>
                <strong>Wichtig:</strong>
                <p>Die Anzahl der gestellten Fragen pro Fach kann sich durch die Verteilung der Fächer im Curriculum und bei der Auswahl der MC-Fragen in den Klausuren stark unterscheiden. Weiterhin findet keine Gewichtung des Rankings der Fächer nach schweren und leichten Fragen statt.</p>
            </Trans>
        },
        Semester: {
            title: <Trans>Starke Fächer in den Semesterprüfungen</Trans>,
            text: <Trans>
                    <p>Hier findest du eine Übersicht zu deinen besten Fächern basierend auf allen deinen Semesterprüfungen. Die Auswertung beruht auf dem Verhältnis der richtigbeantworteten im Vergleich zu allen gestellten Fragen.<br/><strong>Achtung: </strong>Nur Fächer mit mehr als 4 Fragen werden dargestellt um Verzerrungen der Auswertung zu vermeiden.</p>
                  </Trans>,
        },
        PTM: {
            title: <Trans>Starke Fächer im PTM</Trans>,
            text: <Trans><p>Hier findest du eine Übersicht zu deinen besten Fächern in dem letzten PTM. Die Auswertung beruht auf dem Verhältnis der richtig beantworteten im Vergleich zu allen gestellten Fragen. Der Mittelwert der Kohorte ist durch einen Kreis gekennzeichnet.<br/><strong>Achtung: </strong> Nur Fächer mit mehr als 4 Fragen werden dargestellt um Verzerrungen der Auswertung zu vermeiden.</p></Trans>,
        },
        PTMResults: {
            title: <Trans>Gesamtes Ergebnis im PTM</Trans>,
            text: <Trans><p>Hier findest du eine generelle Auswertung deines PTMs im Vergleich mit der Kohorte. Der Mittelwert der Kohorte ist durch einen Kreis gekennzeichnet.<br/> <strong>Achtung: </strong>Die angegebene Zahl bezieht sich immer auf dein Ergebnis.</p></Trans>,
        },
        Subjects: {
            title: <Trans>Alle Fächer</Trans>,
            text: <Trans>Hier findest du eine Übersicht zu deinen Leistungen in den theoretischen, klinischen und Querschnittsfächern. Die Ergebnisse basieren zum einen auf allen deinen Semesterprüfungen (MCs) und zum anderen auf deinem letzten PTM. Die Auswertung beruht auf dem Verhältnis der richtig beantworteten im Vergleich zu allen gestellten Fragen.</Trans>,
        },
    },
    Practicals: {
        Main: {
            title: <Trans>Mein Level</Trans>,
            text: <Trans><p>Hier siehst du eine Übersicht zu den ärztlichen Tätigkeiten, die du im Laufe des Studiums kennenlernen und praktisch üben wirst. Das Ziel ist, dass du als Absolvent*in des Medizinstudiums dazu in der Lage bist, die hier aufgeführten Tätigkeiten zu Berufsbeginn eigenständig durchzuführen und nur Wichtiges nachgeprüft wird (Level 5).</p>
            <p>Bitte gib mindestens einmal im Halbjahr an, unter welchem Level du die jeweilige Tätigkeit bislang ausgeführt hast und unter welchem Level du dir die Tätigkeit zutraust. Hierdurch kannst du permanent einen Überblick über die Entwicklung deiner praktischen Fertigkeiten erhalten. Es ist zudem möglich Fremdeinschätzungen von Ärzten*innen einzuholen. </p>
            <p>Insgesamt sind 11 ärztliche Tätigkeiten und 8 Prozeduren gelistet. Die 11 Tätigkeiten werden wiederum in kleinere Tätigkeiten (35) aufgeteilt, die du im Laufe des Studiums ausführen wirst.</p>
            <p>Da es das Ziel ist, dass du dir die ärztlichen Tätigkeiten zu Berufsbeginn unter Level 5 zutraust, kannst du maximal 175 „Level“ erreichen.</p>
            <p>In roter Schrift siehst du die Anzahl der Level, unter der du die Tätigkeiten ausgeführt hast. In grüner Schrift die Anzahl der Level, unter der du dir die Tätigkeiten zutraust.</p>
            </Trans>
        }
    }   
}

export default Legends
import React from 'react'
import {Trans} from 'react-i18next'
import Video from '../EPAs/static/EPAsVideo'
import {GraphButton} from "../Exams/Ptm/GraphButton"

const Legends = {
    Exams: {
        MainChart: {
            title: <Trans>Deine Prüfungsergebnisse</Trans>,
            text: <Trans>Hier siehst du einen Überblick über deine bisherigen Prüfungsergebnisse. Über die Checkboxen
                kannst du selber auswählen, welche Prüfungsergebnisse du angezeigt bekommen möchtest. Du kannst auf die
                jeweiligen Ergebnisse klicken, um detaillierte Informationen zu erhalten (z.B. Ergebnisse der einzelnen
                Module).</Trans>,
        },
        MC: {
            Summary: {
                title: <Trans>Zusammenfassung deiner Antworten in den Semesterprüfungen</Trans>,
                text: <Trans>Hier siehst du eine Aufstellung nach Fächern der von dir beantworteten Fragen in deinen
                    Semesterprüfungen.</Trans>,
            },
            Totals: {
                title: <Trans>Gesamtes Ergebnis</Trans>,
                text: <Trans>Dies ist eine Darstellung deines Prüfungsergebnisses. Der kumulative Graph stellt dar, in
                    welchem Verhältnis du zu deiner Kohorte abgeschnitten hast. Durch das einfache Histogramm lässt sich
                    die Verteilung der Prüfungsergebnisse einsehen.</Trans>,
            },
            Details: {
                title: <Trans>Detaillierte Ergebnisse</Trans>,
                text: <Trans>Hier kannst du sehen, wie du in den zu dieser Semesterprüfung dazugehörigen Modulen und
                    Fächern in Vergleich zu der Kohorte abgeschnitten hast.</Trans>,
            },
            Questions: {
                title: <Trans>Fragen und Antworten</Trans>,
                text: <Trans>Schwere Fragen konnten weniger als 40% deiner Mitstudierenden beantworten, leichte Fragen
                    mehr als 80%.</Trans>,
            },
            QuestionsDetails: {
                title: <Trans>Fragen und Antworten</Trans>,
                text: <Trans i18nKey="exams.mc.questions.text">
                    <p>Hier kannst du dir alle Fragen der Semesterprüfung mit den dazugehörigen Antworten ansehen. Jede
                        Frage wurde mit verschiedenen Tags versehen, mit deren Hilfe du die Fragen filtern kannst. Die
                        Filter schwer und leicht zeigen dir wie viel deiner Mitstudierenden diese Frage beantworten
                        konnten. Schwere Fragen sind Fragen, die weniger als 40% deiner Mitstudierenden beantworten
                        konnten. Leichte Fragen hingegen konnten mehr als 80% deiner Kommilitonen beantworten.So kannst
                        du dir z.B. nur die Fragen anzeigen lassen, die du falsch beantwortest hast.</p>
                </Trans>
            }
        },
        Ptm: {
            Totals: {
                title: <Trans>Gesamtes Ergebnis</Trans>,
                text: <Trans>Hier findest du eine generelle Auswertung deines PTMs im Vergleich mit der Kohorte.</Trans>
            },
            Timeline: {
                title: <Trans>Deine Entwicklung</Trans>,
                text: <Trans>Hier findest du eine generelle Auswertung deines PTMs im zeitlichen Verlauf.</Trans>
            },
            Strengths: {
                title: <Trans>Starke Fächer in diesem PTM</Trans>,
                text: <Trans>Hier findest du eine Übersicht zu deinen besten theoretischen, klinischen und
                    Querschnittsfächern im PTM diesen Semesters. Die Auswertung beruht auf dem Verhältnis der richtig
                    beantworteten im Vergleich zu allen beantworteten Fragen.</Trans>,
            },
            Subjects: {
                title: <Trans>Alle Fächer</Trans>,
                text: <Trans>
                    <p>Hier findest du eine Übersicht zu deinen Leistungen in den theoretischen, klinischen und
                        Querschnittsfächern. Die Ergebnisse innerhalb des grünen Balken basieren auf deinem letzten PTM
                        und zeigen das Verhältnis zwischen richtig beantworteten und allen gestellten Fragen.</p>
                    <p>Deine Entwicklung im PTM innerhalb eines bestimmten Faches siehst du in der darunter stehenden
                        Graphik<GraphButton/></p>
                </Trans>,
            },
            Organsystem: {
                title: <Trans>Alle Organsystem</Trans>,
                text: <Trans>Hier findest du eine Übersicht zu deinen Leistungen in den theoretischen, klinischen und
                    Querschnittsfächern. Die Ergebnisse basieren auf deinem letzten PTM. Die Auswertung beruht auf dem
                    Verhältnis der richtig beantworteten im Vergleich zu allen gestellten Fragen.</Trans>,
            },
        },
        Stations: {
            Explanation: {
                title: <Trans>Ergebnisse</Trans>,
                text: <Trans>Hier siehst Du die Ergebnisse deiner absolvierten mündlich-praktischen Prüfungen. Klick auf die jeweilige Station und Du bekommst genauere Informationen zu den jeweiligen Teilaufgaben.</Trans>,
            },
        },
    },
    Strengths: {
        Explanation: {
            title: <Trans>Deine Stärken und Schwächen</Trans>,
            text: <Trans i18nKey="strengths.main.text">
                <p>Auf dieser Seite findest du eine Übersicht zu deinen stärkeren und schwächeren Fächern in den
                    Semesterprüfungen und dem PTM. Die Auswertung basiert auf den Ergebnissen aller zurückliegenden
                    Semesterprüfungen und dem Ergebnis des aktuellen PTMs.</p>
                <strong>Wichtig:</strong>
                <p>Die Anzahl der gestellten Fragen pro Fach kann sich durch die Verteilung der Fächer im Curriculum und
                    bei der Auswahl der MC-Fragen in den Klausuren stark unterscheiden. Weiterhin findet keine
                    Gewichtung des Rankings der Fächer nach schweren und leichten Fragen statt.</p>
            </Trans>
        },
        MC: {
            title: <Trans>Starke Fächer in den Semesterprüfungen</Trans>,
            text: <Trans>
                <p>Hier findest du eine Übersicht zu deinen besten Fächern basierend auf allen deinen Semesterprüfungen.
                    Die Auswertung beruht auf dem Verhältnis der richtig beantworteten im Vergleich zu allen gestellten
                    Fragen.<br/><strong>Achtung: </strong>Nur Fächer mit mehr als 4 Fragen werden dargestellt um
                    Verzerrungen der Auswertung zu vermeiden.</p>
            </Trans>,
        },
        PTM: {
            title: <Trans>Starke Fächer im PTM</Trans>,
            text: <Trans><p>Hier findest du eine Übersicht zu deinen besten Fächern im letzten PTM. Die Auswertung beruht auf dem Verhältnis der richtig beantworteten im Vergleich zu allen gestellten Fragen.<br/><strong>Achtung: </strong> Nur Fächer mit mehr als 4 Fragen werden dargestellt um Verzerrungen der Auswertung zu vermeiden.</p></Trans>,
        },
        PTMResults: {
            title: <Trans>Gesamtes Ergebnis im PTM</Trans>,
            text: <Trans><p>Hier findest du eine generelle Auswertung deines aktuellen PTMs im Vergleich mit der Kohorte.</p></Trans>,
        },
        Subjects: {
            title: <Trans>Alle Fächer</Trans>,
            text: <Trans>Hier findest du eine Übersicht zu deinen Leistungen in den theoretischen, klinischen und
                Querschnittsfächern. Die Ergebnisse basieren zum einen auf allen deinen Semesterprüfungen (MCs) und zum
                anderen auf deinem letzten PTM. Die Auswertung beruht auf dem Verhältnis der richtig beantworteten im
                Vergleich zu allen gestellten Fragen.</Trans>,
        },
    },
    EPAs: {
        Explanation: {
            title: <Trans>Ärztliche Tätigkeiten (EPAs)</Trans>,
            text: <Trans>
                    Hier siehst du eine Übersicht zu den ärztlichen Kern-Tätigkeiten, die du im Laufe des Studiums
                    trainieren wirst. Nutze die Funktion ärztliche Tätigkeiten, um die Entwicklung deiner praktischen
                    Kompetenz festzuhalten und ggf. nachzusteuern. Ziel ist, dass du als Absolvent*in des
                    Medizinstudiums dazu in der Lage bist, die aufgeführten Tätigkeiten zu Berufsbeginn eigenständig
                    durchzuführen und nur Wichtiges nachgeprüft wird (Level 5).
                 </Trans>
        },
        CheatSheetCard: {
            levels: {
                title: <Trans>Level der Eigenständigkeit</Trans>,
                text: ['keine Ausführung',
                    'gemeinsam mit dem Arzt',
                    'unter Beobachtung des Arztes',
                    'eigenständig, alles/vieles wird nachgeprüft (Arzt auf Station)',
                    'eigenständig, Wichtiges wird nachgeprüft (Arzt auf Station)',
                    'eigenständig, Wichtiges wird nachgeprüft (Arzt nur telefonisch erreichbar)']
            },
            video: {
                title: <Trans>Video: Was sind EPAs?</Trans>,
                text: <Trans><Video/></Trans>
            }
        }
    },
    DatenProtection: {
        text: <Trans>
            <p>Deine Daten werden vertrauensvoll behandelt und sind nicht für Dritte einsehbar.</p>
            <p>Bestimmte Angebote der Webseite kannst Du nur nutzen, wenn Du dich zuvor als Nutzer registrierst. Dabei
                wird nach deiner Einwilligung ein Hash erstellt und gespeichert, der nur dir nach Login die Zuordnung
                deiner Prüfungsdaten erlaubt.</p>
            <p>Dieser Hash ist die einzige Information, die als „Nutzerkonto“ gespeichert wird. Er erlaubt keine direkte
                Identifizierung einer Person.</p>
            <p>Die Anmeldung erfolgt durch den zentralen Single-Sign-On-Dienst der Charité (SSO). Durch diesen Dienst
                erfährt LevelUp temporär deinen Namen, deine Mailadresse und deinen Nutzernamen.</p>
            <p>LevelUp speichert weder deinen Namen, deine Mailadresse, deinen Nutzernamen noch deine Matrikelnummer.
                Nach Logout aus LevelUp sind diese Informationen LevelUp nicht mehr bekannt. Die Matrikelnummer wird nur
                direkt bei der Registrierung verwendet und ist danach für die Webseite nicht mehr wiederherstellbar.</p>
            <p>Die Verarbeitung der Daten im Rahmen der Registrierung und der Einrichtung eines Nutzerkontos (in Form
                eines Hashes) erfolgen auf der Grundlage deiner Einwilligung. Die Registrierung und das Einrichten eines
                Nutzerkontos sind freiwillig. Indem Du selbst Deine Registrierung bei LevelUp vornimmst bzw. Dein
                Nutzerkonto aktivierst, willigst Du in die Verarbeitung der in diesem Rahmen erhobenen Daten ein.</p>
            <p>Die Zuordnung der anonymisierten Prüfungsdaten zu deinem Nutzerkonto, das im Rahmen der Registrierung und
                der Einrichtung des Nutzerkontos erstellt wurde, besteht für die Dauer des Fortbestehens der
                Registrierung und der Existenz des Nutzerkontos. Eine Zuordnung ist nur nach Login über SSO möglich.
                Auch für Administratoren der Webseite ist eine Zuordnung von personenbezogenen Daten ohne Zugriff auf
                weitere Daten nicht möglich.</p>
            <p>Wenn Du dein Nutzerkonto löschen möchtest, kannst Du uns eine entsprechende Nachricht an die folgende
                E-Mail-Adresse senden: levelup@charite.de</p>
            <p>Nach Mitteilung Deines Löschbegehrens wird das Nutzerkonto, das heißt der gespeicherte Hash, von uns
                innerhalb von wenigen Werktagen gelöscht.</p>
        </Trans>
    }
}

export default Legends

const Legends = {
    Exams: {
        MainChart: {
            title: 'Deine Prüfungsergebnisse',
            text: 'Hier siehst du einen Überblick über deine bisherigen Prüfungsergebnisse. Über die Checkboxen kannst du selber auswählen, welche Prüfungsergebnisse du angezeigt bekommen möchtest. Du kannst auf die jeweiligen Ergebnisse klicken, um detaillierte Informationen zu erhalten (z.B. Ergebnisse der einzelnen Module).',
        },
        MC: {
            Summary: {
                title: 'Zusammenfassung deiner Antworten in den Semesterprüfungen',
                text: 'Hier siehst du eine Aufstellung nach Fächern der von dir beantworteten Fragen in deinen Semesterprüfungen.',
            },
            Totals: {
                title: 'Gesamtes Ergebnis',
                text: 'Dies ist eine Darstellung deines Prüfungsergebnisses. Der kumulative Graph stellt dar, in welchem Verhältnis du zu deiner Kohorte abgeschnitten hast. Durch das einfache Histogramm lässt sich die Verteilung der Prüfungsergebnisse einsehen.',
            },
            Details: {
                title: 'Detaillierte Ergebnisse',
                text: 'Hier kannst du sehen, wie du in den zu dieser Semesterprüfung dazugehörigen Modulen und Fächern in Vergleich zu der Kohorte abgeschnitten hast.',
            },
            Questions: {
                title: 'Fragen und Antworten',
                text: 'Schwere Fragen konnten weniger als 40% deiner Mitstudierenden beantworten, leichte Fragen mehr als 80%.',
            },
            QuestionsDetails: {
                title: 'Fragen und Antworten',
                text: `Hier kannst du dir alle Fragen der Semesterprüfung mit den dazugehörigen Antworten ansehen. Jede
                        Frage wurde mit verschiedenen Tags versehen, mit deren Hilfe du die Fragen filtern kannst. Die
                        Filter schwer und leicht zeigen dir wie viel deiner Mitstudierenden diese Frage beantworten
                        konnten. Schwere Fragen sind Fragen, die weniger als 40% deiner Mitstudierenden beantworten
                        konnten. Leichte Fragen hingegen konnten mehr als 80% deiner Kommilitonen beantworten. So kannst
                        du dir z.B. nur die Fragen anzeigen lassen, die du falsch beantwortest hast.`
            }
        },
        Ptm: {
            Totals: {
                title: 'Gesamtes Ergebnis',
                text: 'Hier findest du eine generelle Auswertung deines PTMs im Vergleich mit der Kohorte.'
            },
            Timeline: {
                title: 'Deine Entwicklung',
                text: 'Hier findest du eine generelle Auswertung deines PTMs im zeitlichen Verlauf.'
            },
            Strengths: {
                title: 'Starke Fächer in diesem PTM',
                text: 'Hier findest du eine Übersicht zu deinen besten theoretischen, klinischen und Querschnittsfächern im PTM diesen Semesters. Die Auswertung beruht auf dem Verhältnis der richtig beantworteten im Vergleich zu allen beantworteten Fragen.',
            },
            Subjects: {
                title: 'Alle Fächer',
                text: [`Hier findest du eine Übersicht zu deinen Leistungen in den theoretischen, klinischen und
                        Querschnittsfächern. Die Ergebnisse innerhalb des grünen Balken basieren auf deinem letzten PTM
                        und zeigen das Verhältnis zwischen richtig beantworteten und allen gestellten Fragen.`,
                    `Deine Entwicklung im PTM innerhalb eines bestimmten Faches siehst du in der darunter stehenden
                        Graphik`]
            },
            Organsystem: {
                title: 'Alle Organsystem',
                text: 'Hier findest du eine Übersicht zu deinen Leistungen in den theoretischen, klinischen und Querschnittsfächern. Die Ergebnisse basieren auf deinem letzten PTM. Die Auswertung beruht auf dem Verhältnis der richtig beantworteten im Vergleich zu allen gestellten Fragen.',
            },
        },
        Stations: {
            Explanation: {
                title: 'Ergebnisse',
                text: 'Hier siehst Du die Ergebnisse deiner absolvierten mündlich-praktischen Prüfungen. Klick auf die jeweilige Station und Du bekommst genauere Informationen zu den jeweiligen Teilaufgaben.',
            },
        },
    },
    Strengths: {
        Explanation: {
            title: 'Deine Stärken und Schwächen',
            text: [`Auf dieser Seite findest du eine Übersicht zu deinen stärkeren und schwächeren Fächern in den
            Semesterprüfungen und dem PTM. Die Auswertung basiert auf den Ergebnissen aller zurückliegenden
                    Semesterprüfungen und dem Ergebnis des aktuellen PTMs.`,
                `Wichtig:`,
                `Die Anzahl der gestellten Fragen pro Fach kann sich durch die Verteilung der Fächer im Curriculum und
                bei der Auswahl der MC-Fragen in den Klausuren stark unterscheiden. Weiterhin findet keine
                    Gewichtung des Rankings der Fächer nach schweren und leichten Fragen statt.`]
        },
        MC: {
            title: 'Starke Fächer in den Semesterprüfungen',
            text: [`Hier findest du eine Übersicht zu deinen besten Fächern basierend auf allen deinen Semesterprüfungen.
            Die Auswertung beruht auf dem Verhältnis der richtig beantworteten im Vergleich zu allen gestellten Fragen.`,
                `Achtung:`,
                `Nur Fächer mit mehr als 4 Fragen werden dargestellt um
                    Verzerrungen der Auswertung zu vermeiden.`]
        },
        PTM: {
            title: 'Starke Fächer im PTM',
            text: [`Hier findest du eine Übersicht zu deinen besten Fächern im letzten PTM. Die Auswertung beruht auf dem Verhältnis der richtig beantworteten im Vergleich zu allen gestellten Fragen.`,
                `Achtung:`,
                `Nur Fächer mit mehr als 4 Fragen werden dargestellt um Verzerrungen der Auswertung zu vermeiden.`
            ]
        },
        PTMResults: {
            title: 'Gesamtes Ergebnis im PTM',
            text: `Hier findest du eine generelle Auswertung deines aktuellen PTMs im Vergleich mit der Kohorte.`,
        },
        Subjects: {
            title: 'Alle Fächer',
            text: 'Hier findest du eine Übersicht zu deinen Leistungen in den theoretischen, klinischen und Querschnittsfächern. Die Ergebnisse basieren zum einen auf allen deinen Semesterprüfungen (MCs) und zum anderen auf deinem letzten PTM. Die Auswertung beruht auf dem Verhältnis der richtig beantworteten im Vergleich zu allen gestellten Fragen.',
        },
    },
    EPAs: {
        Explanation: {
            title: 'Ärztliche Tätigkeiten (EPAs)',
            text: ' Hier siehst du eine Übersicht zu den ärztlichen Kern-Tätigkeiten, die du im Laufe des Studiums trainieren wirst. Nutze die Funktion ärztliche Tätigkeiten, um die Entwicklung deiner praktischen Kompetenz festzuhalten und ggf. nachzusteuern. Ziel ist, dass du als Absolvent*in des Medizinstudiums dazu in der Lage bist, die aufgeführten Tätigkeiten zu Berufsbeginn eigenständig durchzuführen und nur Wichtiges nachgeprüft wird (Level 5).'
        },
        CheatSheetCard: {
            levels: {
                title: 'Level der Eigenständigkeit',
                text: ['keine Ausführung',
                    'gemeinsam mit dem Arzt',
                    'unter Beobachtung des Arztes',
                    'eigenständig, alles/vieles wird nachgeprüft (Arzt auf Station)',
                    'eigenständig, Wichtiges wird nachgeprüft (Arzt auf Station)',
                    'eigenständig, Wichtiges wird nachgeprüft (Arzt nur telefonisch erreichbar)']
            },
            video: {
                title: 'Video: Was sind EPAs?',
            }
        }
    },
    DatenProtection: {
        text: [`Deine Daten werden vertrauensvoll behandelt und sind nicht für Dritte einsehbar.`, 
            `Bestimmte Angebote der Webseite kannst Du nur nutzen, wenn Du dich zuvor als Nutzer registrierst. Dabei
            wird nach deiner Einwilligung ein Hash erstellt und gespeichert, der nur dir nach Login die Zuordnung
                deiner Prüfungsdaten erlaubt.`, 
            `Dieser Hash ist die einzige Information, die als „Nutzerkonto“ gespeichert wird. Er erlaubt keine direkte
                Identifizierung einer Person.`, 
            `Die Anmeldung erfolgt durch den zentralen Single-Sign-On-Dienst der Charité (SSO). Durch diesen Dienst
                erfährt LevelUp temporär deinen Namen, deine Mailadresse und deinen Nutzernamen.`, 
            `LevelUp speichert weder deinen Namen, deine Mailadresse, deinen Nutzernamen noch deine Matrikelnummer.
            Nach Logout aus LevelUp sind diese Informationen LevelUp nicht mehr bekannt. Die Matrikelnummer wird nur
                direkt bei der Registrierung verwendet und ist danach für die Webseite nicht mehr wiederherstellbar.`, 
            `Die Verarbeitung der Daten im Rahmen der Registrierung und der Einrichtung eines Nutzerkontos (in Form
            eines Hashes) erfolgen auf der Grundlage deiner Einwilligung. Die Registrierung und das Einrichten eines
            Nutzerkontos sind freiwillig. Indem Du selbst Deine Registrierung bei LevelUp vornimmst bzw. Dein
                Nutzerkonto aktivierst, willigst Du in die Verarbeitung der in diesem Rahmen erhobenen Daten ein.`, 
            `Die Zuordnung der anonymisierten Prüfungsdaten zu deinem Nutzerkonto, das im Rahmen der Registrierung und
            der Einrichtung des Nutzerkontos erstellt wurde, besteht für die Dauer des Fortbestehens der
            Registrierung und der Existenz des Nutzerkontos. Eine Zuordnung ist nur nach Login über SSO möglich.
            Auch für Administratoren der Webseite ist eine Zuordnung von personenbezogenen Daten ohne Zugriff auf
                weitere Daten nicht möglich.`, 
            `Wenn Du dein Nutzerkonto löschen möchtest, kannst Du uns eine entsprechende Nachricht an die folgende
                E-Mail-Adresse senden: levelup@charite.de`, 
            `Nach Mitteilung Deines Löschbegehrens wird das Nutzerkonto, das heißt der gespeicherte Hash, von uns
                innerhalb von wenigen Werktagen gelöscht.`, 
       
            ]
    }
}

export default Legends
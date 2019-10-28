import React from 'react'
import {Trans} from 'react-i18next'
import Numbers from '../EPAs/assessmentViewComponents/Numbers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import Video from '../EPAs/static/EPAsVideo'

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
                        Frage wurde mit verschiedenen Tags versehen, mit deren Hilfe du die Fragen filtern kannst.Die
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
                    <p>Hier findest du eine Übersicht zu deinen Leistungen in den theoretischen, klinischen und Querschnittsfächern. Die Ergebnisse innerhalb des grünen Balken basieren auf deinem letzten PTM und zeigen das Verhältnis zwischen richtig beantworteten und allen gestellten Fragen.</p>
                    <p>Deine Entwicklung im PTM innerhalb eines bestimmten Faches siehst du in der darunter stehenden Graphik<span  className='text-primary ml-2' ><FontAwesomeIcon icon={faChartLine}/></span></p>
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
                text: <Trans>Hier siehst du deine Ergebnisse in den bis jetzt absolvierten praktischen Prüfungen. Klicke
                    auf die Flächen über dem Diagramm um deine Ergebnisse zu filtern. Wenn du auf die Balken im Diagramm
                    klickst, bekommst du genauere Informationen zu der jeweiligen Station.</Trans>,
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
                {/* <div className="my-2">
                    Hier siehst du eine Übersicht zu den ärztlichen Kern-Tätigkeiten, die du im Laufe des Studiums trainieren wirst. Nutze diese Funktion, um die Entwicklung deiner praktischen Kompetenz festzuhalten und ggf. nachzusteuern. Für die Einschätzung jeder Tätigkeit gibt es 6 Level, die als Balken dargestellt
                    <Numbers className="mx-1 d-inline-block" value={3} color="hsl(161, 100%, 25%)" colorsRgb="hsl(161, 100%, 25%, .2)" />
                    und auf der rechten Seite in der Legende definiert sind. Das Ziel ist, dass du als Absolvent*in des Medizinstudiums dazu in der Lage bist, die hier aufgeführten Tätigkeiten zu Berufsbeginn eigenständig durchzuführen und nur Wichtiges nachgeprüft wird (Level 5).
                </div>
                <strong className=' d-block my-2'>Schätze Dich selber ein</strong>
                <div>
                    So kannst du im Laufe deines Studiums zum Beispiel nach U- oder UaK-Kursen oder Famulaturen angeben, unter welchem Level du die jeweilige Tätigkeit ausgeführt hast
                    <Numbers className="mx-1 d-inline-block" value={3} color="hsla(208, 51%, 27%)" colorsRgb="hsla(208, 51%, 27%,.2)" width={'.9rem'} height={'.9rem'} borderRadius={'50%'} headings='Habe ich gemacht' />
                    und unter welchem Level du dir die Tätigkeit zutraust
                    <Numbers className="mx-1 d-inline-block" value={2} color="hsl(188, 86%, 26%)" colorsRgb="hsl(188, 86%, 26%, .2)" width={'.9rem'} height={'.9rem'} borderRadius={'50%'} headings='Traue ich mir zu' /></div>
                <strong className=' d-block mt-2'>Bitte um eine Fremdeinschätzung</strong>
                <div>
                    Es ist zudem möglich, Fremdeinschätzungen von deinen Lehrenden/ Ärzt*innen einzuholen
                    <Numbers className="mx-1 d-inline-block" value={1} color="hsl(15, 100%, 25%)" colorsRgb="hsl(15, 100%, 25%, .2)" width={'.9rem'} height={'.9rem'} borderRadius={'50%'} headings='Habe ich gemacht' />.
                    Hierfür klickst du auf diesen Button
                    <button className='btn btn-secondary d-inline-block mx-1'>
                        Fremdbewertung einfordern
                        <FontAwesomeIcon icon={faEnvelope} />
                    </button>und kannst die E-Mail-Adresse deines Dozierenden eingeben und eine Einladung senden. Unter der E-Mail-Funktion siehst du alle bisherigen Fremdeinschätzungen.</div>
*/}
                <div className="my-2 w-100 position-relative">

                    <div>
                        Video: <a className="color-navigation" href="https://levelup.charite.de/videos/epa_2019.mp4">Was
                        sind
                        EPAs?</a>
                    </div>
                    Hier siehst du eine Übersicht zu den ärztlichen Kern-Tätigkeiten, die du im Laufe des Studiums
                    trainieren wirst. Nutze die Funktion ärztliche Tätigkeiten, um die Entwicklung deiner praktischen
                    Kompetenz festzuhalten und ggf. nachzusteuern. Ziel ist, dass du als Absolvent*in des
                    Medizinstudiums dazu in der Lage bist, die aufgeführten Tätigkeiten zu Berufsbeginn eigenständig
                    durchzuführen und nur Wichtiges nachgeprüft wird (Level 5).
                    <div className="d-block">
                        Level:
                        <Numbers className="mx-2 d-inline" value={3} color="hsl(161, 100%, 25%)"
                                 colorsRgb="hsl(161, 100%, 25%, .2)"/>
                    </div>
                    <h5 className="mt-4">Schätze dich selbst ein</h5>
                    <div>Im Laufe deines Studiums z.B. nach U- oder UaK-Kursen oder Famulaturen kannst du deine Level
                        eintragen.
                    </div>
                    <div className="table-responsive-md">
                    <table className="table table-borderless">
                        <tbody>
                        <tr>
                            <td className="text-nowrap" style={{color: "#224768", lineHeight: ".9rem"}}>
                                <Numbers
                                    colorsRgb="#ffffff"
                                    color="#224768"
                                    width="1rem"
                                    height="1rem"
                                    borderRadius="1rem"
                                    edit={false}
                                    average={true}
                                    value={1}
                                    maxValue={5}
                                    increment={null}
                                    decrement={null}/>
                                <div className="font-weight-bold pr-2">
                                    Habe ich gemacht
                                </div>
                            </td>
                            <td>
                                <div>
                                    - gibt an unter welchem Level du die jeweilige Tätigkeit ausgeführt hast.
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-nowrap" style={{color: "#096c7b", lineHeight: ".9rem"}}>
                                <Numbers
                                    colorsRgb="#ffffff"
                                    color="#096c7b"
                                    width="1rem"
                                    height="1rem"
                                    borderRadius="1rem"
                                    edit={false}
                                    average={true}
                                    value={1.7}
                                    maxValue={5}
                                    increment={null}
                                    decrement={null}/>
                                <div className="font-weight-bold">
                                    <div>Traue ich mir zu</div>
                                </div>
                            </td>
                            <td >
                                <div>
                                    - gibt an unter welchem Level du dir die Tätigkeit zutraust.
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>

                    <h5 className="mt-4">Bitte um eine Fremdeinschätzung</h5>
                    <div>
                        Du kannst auch Fremdeinschätzungen von deinen Lehrenden/ Ärzt*innen einzuholen.
                    </div>
                    <div className="table-responsive-md">
                    <table className="table table-borderless">
                        <tbody>
                        <tr>
                            <td className="p-1"><div className="btn btn-secondary text-nowrap"> Fremdbewertung einfordern</div></td>
                            <td className="p-0">
                                <div>Sende eine Einladung mit einer Fremdbewertungsanforderung an deine*n
                                    Dozierende*n.
                                </div>
                            </td>
                        </tr>
                        <tr >
                            <td className="p-1"><div className="btn btn-secondary text-nowrap"> Erhaltene Fremdbewertungen</div></td>
                            <td className="p-0">
                                <div>
                                    Schau dir alle deine bisher erhaltenen Fremdbewertungen an.
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-nowrap" style={{color: "#802000", lineHeight: ".9rem"}}>
                                <Numbers
                                    colorsRgb="#ffffff"
                                    color="#802000"
                                    width="1rem"
                                    height="1rem"
                                    borderRadius="1rem"
                                    edit={false}
                                    average={true}
                                    value={0}
                                    maxValue={5}
                                    increment={null}
                                    decrement={null}/>
                                <div className="font-weight-bold">
                                    <div>Wird mir zugetraut</div>
                                </div>
                            </td>
                            <td className="p-0">
                                <div>
                                    - gibt an unter welchem Level dir deine Lehrenden/ Ärzt*innen die Tätigkeit
                                    zutrauen.
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </Trans>
        },
        CheatSheetCard: {
            levels: {
                title: <Trans>Level der Eigenständigkeit</Trans>,
                text: ['keine Ausführung',
                    'gemeinsam mit dem Arzt',
                    'unter Beobachtung des Arztes',
                    'eigenständig, alles/vieles wird nachgeprüft (Arzt auf Station',
                    'eigenständig, Wichtiges wird nachgeprüft (Arzt auf Station)',
                    'eigenständig, Wichtiges wird nachgeprüft (Arzt nur telefonisch erreichbar)'
                ].map((e, d) =>
                    <div key={d}>
                        <div>{`${d} - ${e}`}</div>
                        <Numbers color="hsl(161, 100%, 25%)" colorsRgb="hsl(161, 100%, 25%, .2)" value={d}/>
                    </div>)
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
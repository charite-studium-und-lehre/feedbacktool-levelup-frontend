import React from 'react';
import BeratungsCard from "./Beratungscard"
import "./Beratung.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLock, faEnvelope, faSignInAlt, faDivide } from '@fortawesome/free-solid-svg-icons'


export default function DashboardCard(props) {
    return (
        <div className="container-fluid">
            <div className="row beratung" >
                <div className="col-md-6">
                    <div className="beratung-foto">
                    </div>

                </div>
                <div className="col-md-6 beratund-text">
                    <h2>Beratung</h2>
                    <p>Im Laufe des Studiums wirst du sicherlich schon einige Situationen erlebt haben in denen du einen professionellen Rat zu den
                         diversen Themen des Studienalltags gebraucht hättest.  Damit du immer gut informiert bist, wer dir in der jeweiligen
                          Situation weiterhelfen kann, haben wir auf dieser Seite einige hilfreiche Beratungsangebote der Charitè zusammengefasst.

                        Du erhältst hier eine Übersicht samt Links zu den Beratungsangeboten. Falls du dringend Unterstützung und einen
                        vertrauensvollen  Ansprechpartner für eventuelle Probleme im Studium benötigst, dann wende dich direkt per Mail an:
                            medicoach@charite.de
                            >Im Laufe des Studiums wirst du sicherlich schon einige Situationen erlebt haben in denen du einen professionellen Rat zu den
                         diversen Themen des Studienalltags gebraucht hättest.  Damit du immer gut informiert bist, wer dir in der jeweiligen
                          Situation weiterhelfen kann, haben wir auf dieser Seite einige hilfreiche Beratungsangebote der Charitè zusammengefasst.

                        Du erhältst hier eine Übersicht samt Links zu den Beratungsangeboten. Falls du dringend Unterstützung und einen
                        vertrauensvollen  Ansprechpartner für eventuelle Probleme im Studium benötigst, dann wende dich direkt per Mail an:
                            medicoach@charite.de
             </p>
             <button type="button" className="btn btn-primary">Mehr erfahren</button>
                </div>
            </div>
            <div className="row beratug-card">
                <BeratungsCard h2="MediCoach" />
                <BeratungsCard h2="FamilienBüro" />
               
                <BeratungsCard h2="ChiC" />
                <BeratungsCard h2="Peer Mentoring" />
                <BeratungsCard h2="Student Mentoring" />
                <BeratungsCard h2="Fachschaft" />
                <BeratungsCard h2="Referat für Referat für Studienangelegenheiten" />
                <BeratungsCard h2="Frauen-und Gleichstellungsbeauftragte" />
                <BeratungsCard h2="Geschäftsstelle für gute wissenschaftliche Praxis" />

            </div>
        </div>
    )

}








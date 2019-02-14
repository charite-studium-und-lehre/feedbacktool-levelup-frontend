import React from 'react';
import ConsultingCard from "./ConsultingCard"
import "./Consulting.css";
import {Link, NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLock, faEnvelope, faSignInAlt, faDivide } from '@fortawesome/free-solid-svg-icons'


export default function Consulting (props) {
    return (
        <div className="container-fluid">
            <div className="row consulting" >
                <div className="col-md-5">
                    <div className="consulting-foto">
                    </div>
                </div>
                <div className="col-md-5 consulting-text">
                    <h2 className="text-center">Beratung</h2>
                    <p>Im Laufe des Studiums wirst du sicherlich schon einige
                         Situationen erlebt haben in denen du einen professionellen Rat zu den
                         diversen Themen des Studienalltags gebraucht hättest.  Damit du immer gut informiert bist, wer dir in der jeweiligen
                          Situation weiterhelfen kann, haben wir auf dieser Seite einige hilfreiche Beratungsangebote der Charitè zusammengefasst.

                         Charitè zusammengefasst.

                        Du erhältst hier eine Übersicht samt Links zu den Beratungsangeboten. Falls du dringend Unterstützung und einen
                        vertrauensvollen  Ansprechpartner für eventuelle Probleme im Studium benötigst, dann wende dich direkt per Mail an:
                            medicoach@charite.de
                          </p>
             <button type="button" className="btn btn-primary">Mehr erfahren</button>
                </div>
                <div className="col-md-2">
                    <div className="consulting-link">
                    <ul className="list-group ">
                    <h3 className="text-center">Externe Beratung</h3>
                    <Link className="extern-link text-center list-group-item" to="">Link</Link>
                    <Link className="extern-link text-center list-group-item" to="">Link</Link>
                    <Link className="extern-link text-center list-group-item" to="">Link</Link>
                    <Link className="extern-link text-center list-group-item" to="">Link</Link>
                    <Link className="extern-link text-center list-group-item" to="">Link</Link>
                    <Link className="extern-link text-center list-group-item" to="">Link</Link>
                    <Link className="extern-link text-center list-group-item" to="">Link</Link>
                    <Link className="extern-link text-center list-group-item" to="">Link</Link>
                    <Link className="extern-link text-center list-group-item" to="">Link</Link>

                    </ul>
                    </div>
                </div>
            </div>
            <h2 className="text-center">Charitè Beratung</h2>
            <div className="row consulting-card">
                <ConsultingCard h2="MediCoach" />
                <ConsultingCard h2="FamilienBüro" />
                <ConsultingCard h2="ChiC" />
                <ConsultingCard h2="Peer Mentoring" />
                <ConsultingCard h2="Student Mentoring" />
                <ConsultingCard h2="Fachschaft" />
                <ConsultingCard h2="Referat für Referat für Studienangelegenheiten" />
                <ConsultingCard h2="Frauen-und Gleichstellungsbeauftragte" />
                <ConsultingCard h2="Geschäftsstelle für gute wissenschaftliche Praxis" />

            </div>
        </div>
    )

}








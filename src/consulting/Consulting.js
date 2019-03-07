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
                    <h1>Charitè Beratung</h1>
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
                    <ul className="list-group list-group-flush ">
                    <h4 className="text-center">Externe Beratung</h4>
                    <Link className="extern-link text-center list-group-item" to="">Externe Beratung</Link>
                    <Link className="extern-link text-center list-group-item" to="">Externe Beratung</Link>
                    <Link className="extern-link text-center list-group-item" to="">Externe Beratung</Link>
                    <Link className="extern-link text-center list-group-item" to="">Externe Beratung</Link>
                    <Link className="extern-link text-center list-group-item" to="">Externe Beratung</Link>
                    <Link className="extern-link text-center list-group-item" to="">Externe Beratung</Link>
                    <Link className="extern-link text-center list-group-item" to="">Externe Beratung</Link>
                    <Link className="extern-link text-center list-group-item" to="">Externe Beratung</Link>
                    <Link className="extern-link text-center list-group-item" to="">Externe Beratung</Link>
                 
                   
                    </ul>
                    </div>
                </div>
            </div>
            <div  className=" consulting-card">
            <h1 className="text-center">Beratung</h1>
            <div className="row consulting-card">
                <ConsultingCard title="MediCoach"                                         name="Sabine Hilm" tel="02145786531" email="sabine@sabine.de" open="Mo - Do von 9:00 bis 12:00" />
                <ConsultingCard title="FamilienBüro"                                      name="Sabine Hilm" tel="02145786531" email="sabine@sabine.de" open="Mo - Do von 9:00 bis 12:00" />
                <ConsultingCard title="ChiC"                                              name="Sabine Hilm" tel="02145786531" email="sabine@sabine.de" open="Mo - Do von 9:00 bis 12:00" />
                <ConsultingCard title="Peer Mentoring"                                    name="Sabine Hilm" tel="02145786531" email="sabine@sabine.de" open="Mo - Do von 9:00 bis 12:00" />
                <ConsultingCard title="Student Mentoring"                                 name="Sabine Hilm" tel="02145786531" email="sabine@sabine.de" open="Mo - Do von 9:00 bis 12:00" />
                <ConsultingCard title="Fachschaft"                                        name="Sabine Hilm" tel="02145786531" email="sabine@sabine.de" open="Mo - Do von 9:00 bis 12:00" />
                <ConsultingCard title="Referat für Studienangelegenheiten"                name="Sabine Hilm" tel="02145786531" email="sabine@sabine.de" open="Mo - Do von 9:00 bis 12:00" />
                <ConsultingCard title="Frauen-und Gleichstellungsbeauftragte"             name="Sabine Hilm" tel="02145786531" email="sabine@sabine.de" open="Mo - Do von 9:00 bis 12:00" />
                <ConsultingCard title="Geschäftsstelle für gute wissenschaftliche Praxis" name="Sabine Hilm" tel="02145786531" email="sabine@sabine.de" open="Mo - Do von 9:00 bis 12:00" />

            </div>
            </div>
        </div>
    )

}








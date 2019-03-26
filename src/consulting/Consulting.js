import React from 'react';
import ConsultingCard from "./ConsultingCard"
import "./Consulting.css";
import { Link } from 'react-router-dom';
import { ConsultingTree } from './ConsultingTree'



export default function Consulting(props) {
    return (
        <div className="container-fluid">
            <div className="row consulting" >
                <div className="col-md-5">
                    <div className="consulting-foto">
                    </div>
                </div>
                <div className="col-md-5 consulting-text">
                    <h1>Charitè Beratung</h1>
                    <p>Im Laufe des Studiums wirst du sicherlich schon einige Situationen erlebt haben in denen du einen professionellen Rat zu den diversen Themen des Studienalltagsgebraucht hättest. Damit du immer gut informiert bist, wer dir in der jeweiligen Situation weiterhelfen kann, haben wir auf dieser Seite einige hilfreiche Beratungsangebote der Charitè zusammengefasst. Du erhältst hier eine Übersicht samt Links zu den Beratungsangeboten. Falls du dringend Unterstützung und einen vertrauensvollen Ansprechpartnerfür eventuelle Probleme im Studium benötigst, dann wende dich direkt per Mail an:
                        <span>medicoach@charite.de</span>
                    </p>
                    <button type="button" className="btn btn-primary">Mehr erfahren</button>
                </div>
                <div className="col-md-2">
                    <div className="consulting-link">
                        <ul className="list-group list-group-flush ">
                            <h4 className="text-center">Externe Beratung</h4>
                            {ConsultingTree.ExternConsulting.map(d => <Link className="extern-link text-center list-group-item" to="">{d.title}</Link>)}
                        </ul>
                    </div>
                </div>
              
            </div>
            <div className=" consulting-card">
                <h1 className="text-center">Beratung</h1>
                <div className="row consulting-card">
                    {ConsultingTree.ConsultingCard.map(d =>
                        <ConsultingCard
                            title={d.title}
                            paragraph={d.paragraph}
                            name1={d.name1}
                            name2={d.name2}
                            name3={d.name3}
                            email1={d.email1}
                            email2={d.email2}
                            email3={d.email3}
                            tel={d.tel}
                            address={d.address}
                            talk={d.talk}
                            talk1={d.talk1}
                        />
                    )}
                </div>
            </div>
        </div>
    )

}








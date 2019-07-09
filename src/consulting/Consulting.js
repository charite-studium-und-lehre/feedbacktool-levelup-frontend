import React from 'react';
import { withTranslation } from 'react-i18next'
import ConsultingCard from "./ConsultingCard"
import "./Consulting.css";
import { ConsultingTree } from './ConsultingTree'

 function Consulting({t}) {
    return (
        <div className="container-fluid">
            <div className="consulting">
            <h1 className="text-center my-4">{t('Charitè Beratung')}</h1>
                <div className="row  " >
                    <div className="col-lg-5 col-sm-6">
                        <div className="consulting-foto">
                        </div>
                    </div>
                    <div className="col-lg-5 col-sm-6 consulting-text pt-5 pl-4 mb-5">
                        <p>{t(`Im Laufe des Studiums wirst du sicherlich schon einige Situationen erlebt haben in denen du einen professionellen Rat zu den diversen Themen des Studienalltags gebraucht hättest. Damit du immer gut informiert bist, wer dir in der jeweiligen Situation weiterhelfen kann, haben wir auf dieser Seite einige hilfreiche Beratungsangebote der Charitè zusammengefasst. Du erhältst hier eine Übersicht samt Links zu den Beratungsangeboten. Falls du dringend Unterstützung und einen vertrauensvollen Ansprechpartner für eventuelle Probleme im Studium benötigst, dann wende dich direkt per Mail an`)}:

                        <span> {t(`medicoach@charite.de`)}</span>
                        </p>
                        <button type="button" className="btn btn-primary"><a href="https://www.charite.de/studium_lehre/service_beratung/">{t(`Mehr erfahren`)}</a> </button>
                    </div>
                    <div className="col-lg-2 col-sm-6 ">
                        <div className="consulting-link">
                            <ul className="list-group list-group-flush ">
                                <h4 className="text-center mb-4">{t(`Externe Beratung`)}</h4>
                                {ConsultingTree(t).ExternConsulting.map(d => <a className="extern-link text-center list-group-item" href={d.href}>{d.title}</a>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="consulting-card">
                <h1 className="text-center">{t(`Beratung`)}</h1>
                <div className="row">
                
                    {ConsultingTree(t).ConsultingCard.map(d =>
                        <ConsultingCard
                           {...d}
                        />
                    )}
                    
                </div>
            </div>
        </div>
    )
}
export default withTranslation() (Consulting)








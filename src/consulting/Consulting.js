import React, { useState } from 'react';
import { withTranslation } from 'react-i18next'
import ConsultingCard from "./ConsultingCard"
import "./Consulting.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { ConsultingTree } from './ConsultingTree'


function Consulting({ t }) {
    const [selectCard, setCard] = useState(0)
    const tree = ConsultingTree(t)
    return (
        <div className="container-fluid">
            <div className="consulting">
                <h1 className="text-center my-4">{t('Beratungsangebote')}</h1>
                <div className="row " >
                    <div className='col-10 mx-auto'>
                        <div className='row mx-auto'>
                            <div className="col-lg-5 col-sm-6 ">
                                <div className="consulting-foto">
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6 consulting-text pt-5 pl-4 mb-5">
                                <p>{t(`Du brauchst professionellen Rat zu den diversen Themen des Studienalltags? Damit du immer gut informiert bist, wer dir in der jeweiligen Situation weiterhelfen kann, sind hier einige hilfreiche Beratungsangebote der Charité zusammengefasst. Falls du dringend Unterstützung für eventuelle Probleme im Studium benötigst, dann wende dich direkt per Mail an`)}:
                        <span> {t(`medicoach@charite.de`)}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-2 col-sm-6 ">
                        <div className="consulting-link">
                            <ul className="list-group list-group-flush ">
                                <h4 className="text-center mb-4">{t(`Externe Angebote`)}</h4>
                                {tree.ExternConsulting.map((d, i)=> <a className="extern-link text-center list-group-item" key={i} href={d.href}>{d.title}</a>)}
                            </ul>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="consulting-card mt-5 pb-5">
                <div className='row'>
                    <div className='col-12 col-lg-4'>
                        <ul className="list-group list-group-flush">
                            {tree.ConsultingCard.map((e, i) =>
                                <li key={i} className="extern-link text-center list-group-item px-2" style={{ backgroundColor: `${i === selectCard ? ' rgb(34, 71, 104, 0.6)' : ''}`, color: `${i === selectCard ? 'white' : ''}` }} onClick={() => setCard(i)}>{e.title}
                                    <span className='float-right' style={{ color: 'red' }}>
                                        <FontAwesomeIcon icon={i === selectCard ? faChevronDown : faChevronRight} color={i === selectCard ? 'white ' : 'rgb(34, 71, 104)'} />
                                    </span>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className='col-12 col-lg-5 col-xl-4'>
                        <ConsultingCard
                            {...tree.ConsultingCard[selectCard]}
                        />
                    </div>
                    <div className="col-12 col-lg-3 col-xl-4 text-center">
                        <div className="consulting-link ">
                            <ul className="list-group list-group-flush ">
                                <h4 className="text-center mb-4">{t(`Externe Angebote`)}</h4>
                                {tree.ExternConsulting.map((d, i) => <a className="extern-link text-center list-group-item py-3" key={i} href={d.href}>{d.title}</a>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withTranslation()(Consulting)








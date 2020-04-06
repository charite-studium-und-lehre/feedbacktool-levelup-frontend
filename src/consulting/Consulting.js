import React, { useState } from 'react';
import { withTranslation } from 'react-i18next'
import ConsultingCard from "./ConsultingCard"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { ConsultingTree } from './ConsultingTree'


function Consulting({ t }) {
    const [selectCard, setCard] = useState(0)
    const tree = ConsultingTree(t)
    return (
        <div>
            <div>
                <h2 className="text-center font-weight-bold mt-3 mb-0">{t('Beratungsangebote')}</h2>
                <div className="container">
                    <div className="row" >
                        <div className="col-12 col-md-10 col-lg-8 col-xl-6 pt-4 mx-auto">
                            <p style={{lineHeight:'2.1rem'}}>{t(`Du brauchst professionellen Rat zu den diversen Themen des Studienalltags? Damit du immer gut informiert bist, wer dir in der jeweiligen Situation weiterhelfen kann, sind hier einige hilfreiche Beratungsangebote der Charité zusammengefasst. Falls du dringend Unterstützung für eventuelle Probleme im Studium benötigst, dann wende dich direkt per Mail an`)}:
                            <span className='font-weight-bold' style={{ color:'rgb(34, 71, 104)', fontSize:'1.3rem'}}> {t(`medicoach@charite.de`)}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mt-4 mt-md-5 pb-5">
                <div className="row">
                    <div className='col-12 col-lg-4 d-none d-lg-block'>
                        <ul className="list-group list-group-flush">
                            {tree.ConsultingCard.map((e, i) =>
                                <li key={i} className="e text-center list-group-item px-2" style={{ backgroundColor: `${i === selectCard ? ' rgb(34, 71, 104, 0.6)' : ''}`, color: `${i === selectCard ? 'white' : ''}` }} onClick={() => setCard(i)}>{e.title}
                                    <span className='float-right' style={{ color: 'red' }}>
                                        <FontAwesomeIcon icon={i === selectCard ? faChevronDown : faChevronRight} color={i === selectCard ? 'white ' : 'rgb(34, 71, 104)'} />
                                    </span>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className='col-12 col-lg-5 col-xl-4 d-none d-lg-block'>
                        <ConsultingCard
                            {...tree.ConsultingCard[selectCard]}
                        />
                    </div>
                    <div className="col-12 col-md-7 mx-md-auto col-lg-3 col-xl-4 text-center mb-4">
                        <div>
                            <ul className="list-group list-group-flush ">
                                <h4 className="text-center font-weight-bold mb-4">{t(`Externe Angebote`)}</h4>
                                {tree.ExternConsulting.map((d, i) => 
                                    <a target="blank" className="font-weight-bold text-center list-group-item py-3" style={{color:'rgb(34, 71, 104)'}} key={i} href={d.href}>
                                        {d.title}
                                    </a>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row d-lg-none">
                        { tree.ConsultingCard.map(e => 
                        <div className='col-12 col-md-6 p-1'key={e.title}>
                            <ConsultingCard infoDaten={true} { ...e} />
                        </div>)}
                </div>
            </div>
        </div>
    )
}
export default withTranslation()(Consulting)








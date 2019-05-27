import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume, faAt, faUser, faComments, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { ConsultingTree } from './ConsultingTree'




const ConsultingCard = props => (

    <div className="card col-lg-4 col-sm-6  ">
        <div className="card-body">
            <h2 className="card-title text-center ">{props.title}</h2>
            <div className="consulting-paragraph">
                <p className="card-text">{props.paragraph}</p>
            </div>
            <div className="consulting-info">
                <h4>Ansprechpartnerin / Ansprechpartner </h4>
                <div className="row">
                    <div className="col-md-12">
                        <div className="icon">
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <div className="info">
                            {props.names.map(d => <div>{d}</div>)}
                        </div>
                    </div>
                    {
                        (props.emails || []).map(d =>
                            <div className="col-md-12" >
                                <div className="icon">
                                    <FontAwesomeIcon icon={faAt} />
                                </div>
                                <div className="info">
                                    <div className="email1">{d}</div>
                                </div>
                            </div>
                        )
                    }
                    <div className="col-md-12">
                        <div className="icon">
                            <FontAwesomeIcon icon={faPhoneVolume} />
                        </div>
                        <div className="info">
                            <span>{props.tel}</span>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="icon">
                            <FontAwesomeIcon icon={faMapMarkedAlt} />
                        </div>
                        <div className="info">
                            <span>{props.address}</span>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="icon">
                            <FontAwesomeIcon icon={faComments} />
                        </div>
                        <div className="info">
                            {props.talk.map(d => <div>{d}</div>)}
                        </div>
                    </div>

                </div>

            </div>

        </div>
        <a  className="btn btn-primary consulting-butten " href={props.href}>Mehr erfahren</a>
    </div>
)
export default ConsultingCard;




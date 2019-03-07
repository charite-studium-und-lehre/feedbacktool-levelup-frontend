import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume, faAt, faUser, faDoorOpen } from '@fortawesome/free-solid-svg-icons'


class ConsultingCard extends Component {
    render() {
        return (

            <div className="col-md-4">
                <div className="card ">
                    <div className="card-body">
                        <h2 className="card-title text-center ">{this.props.title}</h2>
                        <p className="card-text">Im Laufe des Studiums wirst du sicherlich schon einige Situationen erlebt haben in denen du einen professionellen Rat zu den
                 diversen Themen des Studienalltags gebraucht hättest.  Damit du immer gut informiert bist, wer dir in der jeweiligen
                      Situation weiterhelfen kann, haben wir auf dieser Seite einige hilfreiche Beratungsangebote der Charitè zusammengefasst</p>
                        <div className="consulting-icon">
                        <h4>Ansprechpartner</h4>
                        <div className="row">
                            <div className="col-md-5">
                                <FontAwesomeIcon icon={faUser} />
                                <span>{this.props.name}</span>
                            </div>
                            <div  className="col-md-7" >
                                <FontAwesomeIcon icon={faAt} />
                                <span>{this.props.email}</span>
                            </div>
                            <div  className="col-md-5">
                                <FontAwesomeIcon icon={faPhoneVolume} />
                                <span>{this.props.tel}</span>
                            </div>
                          
                            <div  className="col-md-7">
                                <FontAwesomeIcon icon={faDoorOpen} />
                                <span>{this.props.open}</span>
                            </div>
                            </div>
                        {/* <div>
                            <div>
                                <FontAwesomeIcon icon={faUser} />
                                <span>{this.props.name}</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faPhoneVolume} />
                                <span>{this.props.tel}</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faAt} />
                                <span>{this.props.email}</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faDoorOpen} />
                                <span>{this.props.open}</span>
                            </div>
                            </div> */}
                        </div>
                        <button type="button" className="btn btn-primary">Mehr erfahren</button>



                    </div>

                </div>
            </div>
        )
    }

}
export default ConsultingCard;
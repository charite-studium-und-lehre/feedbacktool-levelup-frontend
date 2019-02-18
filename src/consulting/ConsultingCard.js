import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume, faAt, faUser } from '@fortawesome/free-solid-svg-icons'


class ConsultingCard extends Component {
    render() {
        return (

            <div className="col-md-4">
                <div className="card ">
                    <div className="card-body">
                        <h2 className="card-title text-center ">{this.props.h2}</h2>
                        <p className="card-text">Im Laufe des Studiums wirst du sicherlich schon einige Situationen erlebt haben in denen du einen professionellen Rat zu den
                 diversen Themen des Studienalltags gebraucht hättest.  Damit du immer gut informiert bist, wer dir in der jeweiligen
                      Situation weiterhelfen kann, haben wir auf dieser Seite einige hilfreiche Beratungsangebote der Charitè zusammengefasst</p>
                        <div className="consulting-icon">
                        <h4>Ansprechpartner</h4>
                            <div>
                                <FontAwesomeIcon icon={faUser} />
                                <span>Sabine Hilmen</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faPhoneVolume} />
                                <span>02104578454</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faAt} />
                                <span>Sabine@Hilmen.de</span>

                            </div>


                        </div>
                        <button type="button" className="btn btn-primary">Mehr erfahren</button>



                    </div>

                </div>
            </div>
        )
    }

}
export default ConsultingCard;
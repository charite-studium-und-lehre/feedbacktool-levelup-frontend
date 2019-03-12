import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume, faAt, faUser, faComments, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'


class ConsultingCard extends Component {

    
    render() {
        return (

            <div className="col-md-4">
                <div className="card ">
                    <div className="card-body">
                        <h2 className="card-title text-center ">{this.props.title}</h2>
                        <p className="card-text">{this.props.paragraph}</p>
                        <div className="consulting-icon">
                        <h4>Ansprechpartner</h4>
                        <div className="row">
                            <div className="col-md-12">
                                <FontAwesomeIcon icon={faUser} />
                                <span className="name1">{this.props.name1}</span>
                                <br/>
                                <span className="name2">{this.props.name2}</span>
                            </div>
                            <div  className="col-md-12" >
                                <FontAwesomeIcon icon={faAt} />
                                <span className="email1">{this.props.email1}</span><br/>
                                <span  className="email2">{this.props.email2}</span><br/>
                                <span  className="email3">{this.props.email3}</span>
                            </div>
                            <div  className="col-md-12">
                                <FontAwesomeIcon icon={faPhoneVolume} />
                                <span>{this.props.tel}</span>
                            </div>
                            <div  className="col-md-12">
                                <FontAwesomeIcon icon={faMapMarkedAlt} />
                                <span>{this.props.address}</span>
                            </div>
                            <div  className="col-md-12">
                                <FontAwesomeIcon icon={faComments} />
                                <span>{this.props.talk}</span>
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
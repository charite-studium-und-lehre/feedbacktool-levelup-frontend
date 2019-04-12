import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume, faAt, faUser, faComments, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'


class ConsultingCard extends Component {
    render() {
        let email1 = (
            this.props.email1 ?
                <div className="col-md-12" >
                <div className="icon">
                    <FontAwesomeIcon icon={faAt} />
                    </div>
                    <div className="info">
                    <span className="email1">{this.props.email1}</span>
                    {email2}
                    {email3}
                    </div>
                </div>
                : null
        )
        let email2 = (
            this.props.email2 ? <span><br /><span className="email2">{this.props.email2}</span></span> : null
        )
        let email3 = (
            this.props.email3 ? <span><br /><span className="email3">{this.props.email3}</span></span> : null
        )

        let name2 = (
            this.props.name2 ? <span><br /> <span className="name2">{this.props.name2}</span></span> : null
        )
        let name3 = (
            this.props.name3 ? <span><br /><span className="name3">{this.props.name3}</span> </span> : null
        )
        let talk1 = (
            this.props.talk1 ? <span><br /><span className="talk1">{this.props.talk1}</span> </span> : null
        )

        return (
            <div className="card col-lg-4 col-sm-6  ">
                <div className="card-body">
                    <h2 className="card-title text-center ">{this.props.title}</h2>
                    <div className="consulting-paragraph">
                        <p className="card-text">{this.props.paragraph}</p>
                    </div>
                    <div className="consulting-info">
                        <h4>Ansprechpartnerin / Ansprechpartner </h4>
                        <div className="row">
                            <div className="col-md-12">
                            <div className="icon">
                                <FontAwesomeIcon icon={faUser} />
                                </div>
                                <div className="info">
                                <span className="name1">{this.props.name1}</span>
                                {name2}
                                {name3}
                                </div>
                            </div>
                            {email1}
                            <div className="col-md-12">
                            <div className="icon">
                                <FontAwesomeIcon icon={faPhoneVolume} />
                                </div>
                                <div className="info">
                                <span>{this.props.tel}</span>
                                </div>
                            </div>
                            <div className="col-md-12">
                            <div className="icon">
                                <FontAwesomeIcon icon={faMapMarkedAlt} />
                                </div>
                                <div className="info">
                                <span>{this.props.address}</span>
                                </div>
                            </div>
                            <div className="col-md-12">
                            <div className="icon">
                                <FontAwesomeIcon icon={faComments} />
                                </div>
                                <div className="info">
                                <span>{this.props.talk}</span>
                                {talk1}
                                </div>
                            </div>
                            
                        </div>
                     
                    </div>
                   
                </div>
                <button type="button" className="btn btn-primary consulting-butten ">Mehr erfahren</button>
            </div>
        )
    }

}
export default ConsultingCard;
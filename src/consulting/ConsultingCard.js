import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume, faAt, faUser, faComments, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { ConsultingTree } from './ConsultingTree'

// let email1 = (
//     this.props.email1 ?
//         <div className="col-md-12" >
//         <div className="icon">
//             <FontAwesomeIcon icon={faAt} />
//             </div>
//             <div className="info">
//             <span className="email1">{this.props.email1}</span>
            
//             </div>
//         </div>
//         : null
// )

export const tree = {
   
    nameTree : [
    {
       
        names:["Dipl.-Soz. Silke Boehm","Dipl.-Soz. Sylvie Tappert"],
  
    },
    {
        names:["Sabine Barleben(Leitung)","Stefanie Schmidt(Sekretariat)"],
    }
    ]
}
 


const name = tree.nameTree.map(d => d.names[1] )
console.log(name)

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
                                {ConsultingTree.ConsultingCard.names.map(d => <span>{d}</span> )} */}
                                </div>
                            </div>
                            {/* {email1} */}
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
                                <div className="info">{ConsultingTree.ConsultingCard.map(d =>  <span>{d.talk}</span> )}
                               
                                </div>
                            </div>
                            
                        </div>
                     
                    </div>
                   
                </div>
                <button type="button" className="btn btn-primary consulting-butten ">Mehr erfahren</button>
            </div>
)  
export default ConsultingCard;



      
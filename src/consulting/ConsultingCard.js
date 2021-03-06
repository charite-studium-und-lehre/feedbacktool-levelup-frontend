import React from 'react';
import { SlideDown } from 'react-slidedown'
import makeExtendable from '../Core/makeExtendable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume, faAt, faComments, faMapMarkedAlt, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
const Infos = props => (
    <div className="row p-0 mt-3">
        <div className="col-1" style={{color:' rgb(34, 71, 104)', fontSize:'1.3rem'}}>
            <FontAwesomeIcon icon={props.icon} />
        </div>
        <div className="col-9">
            {props.children}
        </div>
    </div>
) 
const Button =(props)=> (
    <a className={`btn btn-primary px-4 ${props.className}`} id={props.id} style={{backgroundColor:' rgb(34, 71, 104)', color:'white'}} href={props.href}>Mehr erfahren</a>
)
const ContactData = props => (
    <div>
        {props.emails && <Infos icon={faAt}>
            {(props.emails || []).map(d =>
                <div key={d}>{d}</div>)}
        </Infos>}
       {props.tel && < Infos icon={faPhoneVolume} >
            <span>{props.tel}</span>
        </Infos >}
        {props.address && <Infos icon={faMapMarkedAlt}>
            <span>{props.address}</span>
        </Infos>}
        < Infos icon={faComments} >
            {props.talk.map(d => <div key={d}>{d}</div>)}
        </Infos >
         <Button  className='mt-4'{...props}/>
    </div>
)
const ConsultingCard = props  => (
    <div className="card col-12 mb-2">
        <div className="card-body ">
            <div className="mb-4">
                <h4 className="text-center font-weight-bold mb-4 " style={{color:'rgb(34, 71, 104)'}}>{props.title}</h4>
                <p className="card-text pr-2 pr-sm-0">{props.paragraph}</p>
            </div>
            {props.infoDaten ? <div>
                <div className='row font-weight-bold ' style={{ color: 'rgb(34, 71, 104)' }} >
                    <div className='col-6'  onClick={props.toggleExtended}>
                    <span className='mr-2' id={`iPhone -> Kontaktdaten && ${props.title}`}>Kontaktdaten</span>
                    <FontAwesomeIcon icon={props.extended ? faChevronDown : faChevronRight} />
                    </div>
                   {  !props.extended && <div className='col-6 p-0'>
                      <Button className='float-right' id={`iPhone -> mehr erfahrem && ${props.title}`} {...props}/>
                    </div>}
                </div>
                {props.extended && <SlideDown className="animated fast">
                    <ContactData {...props} />
                </SlideDown>}
            </div>
                :
                <ContactData {...props} id={`mehr erfahrem && ${props.title}`} />}
        </div>
    </div>
)
export default makeExtendable()(ConsultingCard)





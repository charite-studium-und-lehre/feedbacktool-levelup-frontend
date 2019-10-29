import React from 'react';
import { withTranslation } from 'react-i18next'
import { SlideDown } from 'react-slidedown'
import makeExtendable from '../Core/makeExtendable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume, faAt, faComments, faMapMarkedAlt, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
const Infos = props => (
    <div className="row p-0 mt-3">
        <div className="col-1 icon">
            <FontAwesomeIcon icon={props.icon} />
        </div>
        <div className="col-9">
            {props.children}
        </div>
    </div>
)
const ContactData = props => (
    <div>
        {props.emails && <Infos icon={faAt}>
            {(props.emails || []).map(d =>
                <div key={d}>{d}</div>)}
        </Infos>}
        < Infos icon={faPhoneVolume} >
            <span>{props.tel}</span>
        </Infos >
        {props.address && <Infos icon={faMapMarkedAlt}>
            <span>{props.address}</span>
        </Infos>}
        < Infos icon={faComments} >
            {props.talk.map(d => <div key={d}>{d}</div>)}
        </Infos >
        <a className="btn btn-primary consulting-butten mt-4 " href={props.href}>Mehr erfahren</a>
    </div>
)
const ConsultingCard = ({ t, ...props }) => (
    <div className="card col-12 mb-2">
        <div className="card-body px-2">
            <div className="mb-4">
                <h3 className="text-center ">{props.title}</h3>
                <p className="card-text pr-2 pr-sm-0">{props.paragraph}</p>
            </div>
            {props.infoDaten ? <div>
                <div className='font-weight-bold' style={{ color: ' rgb(34, 71, 104)' }} onClick={props.toggleExtended}>
                    <span className='mr-2'>Kontaktdaten</span>
                    <FontAwesomeIcon icon={props.extended ? faChevronDown : faChevronRight} />
                </div>
                {props.extended && <SlideDown className="animated fast">
                    <ContactData {...props} />
                </SlideDown>}
            </div>
                :
                <ContactData {...props} />}
        </div>
    </div>
)
export default makeExtendable(withTranslation()(ConsultingCard))





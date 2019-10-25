import React from 'react';
import { withTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume, faAt, faComments, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
const Infos = props => (
    <div className="row p-0 mt-3">
        <div className="col-1 icon">
            <FontAwesomeIcon icon={props.icon} />
        </div>
        <div className="col-11">
            {props.children}
        </div>
    </div>
)
const ConsultingCard = ({ t, ...props }) => (
    <div className="card col-12 with-shadow-2px" style={{minHeight:'32rem'}}>
        <div className="card-body px-2">
            <div className="mb-4">
                <h3 className="text-center ">{props.title}</h3>
                <p className="card-text">{props.paragraph}</p>
            </div>
            <Infos icon={faAt}>
                {(props.emails || []).map(d =>
                    <div key={d}>{d}</div>)}
            </Infos>
            <Infos icon={faPhoneVolume}>
                <span>{props.tel}</span>
            </Infos>
            {props.address && <Infos icon={faMapMarkedAlt}>
                <span>{props.address}</span>
            </Infos>}
            <Infos icon={faComments}>
                {props.talk.map(d => <div key={d}>{d}</div>)}
            </Infos>
            <a className="btn btn-primary consulting-butten mt-4 " href={props.href}>{t`Mehr erfahren`}</a>
        </div>
    </div>
)
export default withTranslation()(ConsultingCard)





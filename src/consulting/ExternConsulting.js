import React from 'react'
import { ConsultingTree } from './ConsultingTree'
import { withTranslation } from 'react-i18next'

const ExternConsulting = ({t}) => ( <div className="col-12text-center">
<div className="consulting-link ">
    <ul className="list-group list-group-flush ">
        <h4 className="text-center mb-4">{t(`Externe Angebote`)}</h4>
        {ConsultingTree(t).ExternConsulting.map((d, i) => <a className="extern-link text-center list-group-item py-3" key={i} href={d.href}>{d.title}</a>)}
    </ul>
</div>
</div>
)
export default withTranslation()(ExternConsulting)

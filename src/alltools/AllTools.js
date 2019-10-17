import React from 'react';
import {withTranslation} from 'react-i18next'

import {StudyToolsData} from './StudyToolsData'
import {OtherToolsData} from './OtherToolsData'

function AllTools({t}) {

    let makeLinkCards = dataArray => dataArray.map((data, i) =>
        <div className="card" style={{
            maxWidth: '50%',
            minWidth: '300px',
            marginBottom: '1em'
        }} key={i}>
            <div className="card-body">
                <h3 className="card-title">{data.title}</h3>
                <p className="card-text">{data.description}</p>
            </div>
            <div className="card-footer">
                <a href={data.href} className="btn-link">{data.href}</a>
            </div>
        </div>
    );

    const studyCards = makeLinkCards(StudyToolsData);
    const othersCards = makeLinkCards(OtherToolsData);

    return (
        <div className="container-fluid" style={{
            display: 'flex',
            alignContent: 'space-around',
            flexWrap: 'wrap'
        }}>
            <h1>{t('Lern-Tools')}</h1>

            <div className="card-deck">
                {studyCards}
            </div>

            <h1>{t('Weiteres')}</h1>

            <div className="card-deck">
                {othersCards}
            </div>
        </div>
    )
}

export default withTranslation()(AllTools)








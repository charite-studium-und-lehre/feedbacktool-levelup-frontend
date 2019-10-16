import React from 'react';
import {withTranslation} from 'react-i18next'
//import ConsultingCard from "./AllToolsCard"
import {AllToolsData} from './AllToolsData'

function AllTools({t}) {

    const toolsCards = AllToolsData.map(data =>
        <div class="card" style={{
            maxWidth: '50%',
            minWidth: '300px',
            marginBottom: '1em'
        }}>
            <img src={data.image} className="card-img-top" alt="Logo"/>
            <div class="card-body">
                <h3 class="card-title">{data.title}</h3>
                <p class="card-text">{data.description}</p>
            </div>
            <div class="card-footer">
                <a href={data.href} class="card-link">{data.href}</a>
            </div>
        </div>
    );

    return (
        <div class="container-fluid" style={{
            display: 'flex',
            alignContent: 'space-around',
            flexWrap: 'wrap'
        }}>
            <h1>{t('Alle Tools')}</h1>

            <div class="card-deck">
                {toolsCards}
            </div>

        </div>
    )
}

export default withTranslation()(AllTools)








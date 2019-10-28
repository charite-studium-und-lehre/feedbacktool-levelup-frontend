import React from 'react';
import {withTranslation} from 'react-i18next'

import {StudyToolsData} from './StudyToolsData'
import {OtherToolsData} from './OtherToolsData'

import stift from './stift.png'
import spritze from './spritze.png'

function AllTools({t}) {

    let makeStairsList = dataArray => dataArray.map((data, i, array) =>
        <div key={i} style={{marginBottom: "1em"}}>
            <div style={{marginLeft: (array.length-i)+"em"}} >
                <h4 style={{marginBottom: "0px"}}>{data.title}</h4>
                <a href={data.href} className="btn-link">{data.href}</a>
            </div>
        </div>
    );

    const studyCards = makeStairsList(StudyToolsData);
    const othersCards = OtherToolsData.map((data, i, array) =>
        <div className='py-3' key={i} style={{marginLeft: (array.length + i)+"em"}}>
                <h4 style={{marginBottom: "0px"}}>{data.title}</h4>
                <a href={data.href} className="btn-link">{data.hrefLabel || data.href}</a>
        </div>
    );

    return (
        <div className='row'>
            <div className='col-6' style={{position: "relative"}}>
            <h1>{t('Lern-Tools')}</h1>
                <img src={stift} alt='' style={{
                    position: "absolute",
                    minWidth: "10%",
                    maxWidth: "200px",
                    height: "80%",
                    transform: "rotate(17deg) translate(50px)",
                    zIndex: -100
                }}/>
                <div style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    zIndex: -100
                }}>
                    <img src={spritze} alt='' style={{
                        minWidth: "10%",
                        maxWidth: "200px",
                        height: "80%",
                        right: "1%",
                        bottom: 0,
                        position: "absolute"
                    }}/>
                </div>
                <div style={{margin: "auto", maxWidth: "80%", zIndex: 100}}>
                    {studyCards}
                </div>
            </div>

            <div className='col-6' style={{paddingLeft: "2em"}}>
            <h1>{t('Weiteres')}</h1>
                {othersCards}
            </div>
        </div>
    )
}

export default withTranslation()(AllTools)

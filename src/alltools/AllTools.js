import React from 'react';
import { Link } from 'react-router-dom'
import {withTranslation} from 'react-i18next'
import {StudyToolsData, OtherToolsData } from './AllToolsData'
// import stift from './stift.svg'
// import spritze from './spritze.svg'
console.log(window.innerWidth)
const  MakeStairsList = props => (
    <div className='col-12 col-md-6 mt-4 mt-md-2'>
        <h2 className='pl-3'>{props.heading}</h2>
                 <div className='mt-4' >
            {props.data.map((d, i) => <div className='mt-3 pl-3' style={{marginLeft: window.innerWidth > 1173 ?`${ 8 - i}rem`: '1rem'}} key={i}>
                <h5 className="font-weight-bold">{d.title}</h5>
                { i === 0 && props.link  ? <Link to='/consulting' className="text-primary" >{d.href}</Link>
                :<a className="text-primary "  href={d.href} target="blank">{d.href}</a>}
                </div>)}
            </div>
    </div>

)

const  AllTools = props => (
    <div className='row'>
         <MakeStairsList 
            heading="Lern-Tools"
            data={StudyToolsData}/>
         <MakeStairsList 
            heading="Weiteres"
            link={true}
            data={OtherToolsData}/>
    </div>
)

export default withTranslation()(AllTools)


//     let makeStairsList = dataArray => dataArray.map((data, i, array) =>
//         <div key={i} style={{marginBottom: "1em"}}>
//             <div style={{marginLeft: (array.length-i)+"em"}} >
//                 <h4 style={{marginBottom: "0px"}}>{data.title}</h4>
//                 <a href={data.href} className="color-navigation">{data.href}</a>
//             </div>
//         </div>
//     );

//     const studyCards = makeStairsList(StudyToolsData);
//     const othersCards = OtherToolsData.map((data, i) =>
//         <div key={i}>
//                 <h4 style={{marginBottom: "0px"}}>{data.title}</h4>
//                 {data.intern ? 
//                     <Link to={data.href} className="color-navigation">{data.hrefLabel || data.href}</Link> : 
//                     <a href={data.href} className="color-navigation">{data.hrefLabel || data.href}</a>
//                 }
//         </div>
//     );

//     return (
//         <div>
//             <h1>{t('Lern-Tools')}</h1>

//             <div style={{position: "relative"}}>
//                 <img src={stift} alt='' style={{
//                     position: "absolute",
//                     minWidth: "10%",
//                     maxWidth: "200px",
//                     height: "80%",
//                     transform: "rotate(17deg) translate(50px)",
//                     zIndex: -100
//                 }}/>
//                 <div style={{
//                     width: "100%",
//                     height: "100%",
//                     position: "absolute",
//                     zIndex: -100
//                 }}>
//                     <img src={spritze} alt='' style={{
//                         minWidth: "10%",
//                         maxWidth: "200px",
//                         height: "80%",
//                         right: "1%",
//                         bottom: 0,
//                         position: "absolute"
//                     }}/>
//                 </div>
//                 <div style={{margin: "auto", maxWidth: "80%", zIndex: 100}}>
//                     {studyCards}
//                 </div>
//             </div>

//             <h1>{t('Weiteres')}</h1>

//             <div style={{paddingLeft: "2em"}}>
//                 {othersCards}
//             </div>
//         </div>
//     )
// }

// export default withTranslation()(AllTools)

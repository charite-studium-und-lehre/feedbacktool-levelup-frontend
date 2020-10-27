import React from 'react'
import faqData from './FaqData'

const Link = props =>
    <a className="color-navigation font-weight-bold" target="blank" href={props.href}>
        {props.children}
    </a>

const AnswerWithLinks = props =>
    props.data.map((data, index) => {
        let anser = <span>{data}</span>
        if (data === 'Hier') {
            anser = <a
                className="color-navigation font-weight-bold"
                href={index === 0 ? props.tutorialLink : props.clickvideoLink}
                target="blank">
                {data}
            </a>
        }
        return anser
    })


const Faq = () => (
    <div className='row my-4'>
        <div className='col-xl-9 col-12' >
            <ul className="list-group">
                {faqData.map(data =>
                    <li className="list-group-item" key={data.question}>
                        <div className='font-weight-bold'><span >F : </span>{data.question}</div>
                        <div className='mt-1'>
                            <span className='font-weight-bold'>A : </span>
                            <span>{data.answer || <AnswerWithLinks data={data.AnswerWithLinks} tutorialLink={data.tutorialLink} clickvideoLink={data.clickvideoLink} />} </span>
                            <span><Link href={(data.email && `mailTo:${data.email}`)|| data.link}>{data.email || data.link}</Link></span>
                        </div>
                    </li>
                )
                }
            </ul>
        </div>
    </div>
)
export default Faq
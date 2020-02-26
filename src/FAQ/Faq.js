import React from 'react'
import faqData from './FaqData'
const Faq = () => (
    <div className='row mt-4'>
        <div className='col-xl-9 col-12' >
            <ul className="list-group">
                {faqData.map(e =>
                    <li className="list-group-item disabled" key={e.question}>
                        <div className='font-weight-bold'><span >F : </span>{e.question}</div>
                        <div className='mt-1'><span className='font-weight-bold'>A : </span>{e.answer}</div>
                           {e.link && <a href='https://levelup.charite.de/app-demo'>{e.link}</a>}
                    </li>
                )
                }
            </ul>
        </div>
    </div>
)
export default Faq
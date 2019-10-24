import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { withTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Legends from '../Core/LegendTexts'

const datenProtection =({t})=> (
    <div className='row px-3'>
        <div className='col-12  col-md-10 col-lg-8 col-xl-7 mx-auto mt-2 pb-3 with-shadow'>
         <h3 className=' my-4 text-center'>{t(`Datenschutzhinweise`)}</h3>
          <div className='my-5 '>{Legends.DatenProtection.text}</div>
          <Link to='/login'>
            <div className=' ml-4 text-primary'>
                <FontAwesomeIcon icon={faChevronLeft}/>
                <span className='font-weight-bold ml-2' style={{cursor:'pointer', fontSize:'15px'}}>{t(`Züruck`)}</span>
            </div>
          </Link>
        </div>
    </div>
)
export default withTranslation() (datenProtection)
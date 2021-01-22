import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Legends from '../Core/LegendTexts'

const datenProtection =()=> (
  <div className="container-fluid">
    <div className='row'>
      <div className='col-12 col-md-10 col-lg-8 col-xl-7 mx-auto'>
        <div className="card my-2">
          <div className="card-header">
            <h3 className='text-center'>Datenschutzhinweise</h3>
          </div>
          <div className="card-body">
            <div>{Legends.DatenProtection.text}</div>
            <Link to='/login'>
              <div className='color-navigation'>
                <FontAwesomeIcon icon={faChevronLeft}/>
                <span className='font-weight-bold ml-2' style={{cursor:'pointer', fontSize:'1rem'}}>Zurück</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default datenProtection
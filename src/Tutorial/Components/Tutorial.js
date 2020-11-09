import React, { useState } from 'react'
import Dashboard from './Dashboard'
import Epas from './Epas'
import Fortschritt from './Fortschritt'
import Ptms from './Ptm'
import Timeline from './Timeline'
import Starkefächer from './Starkefächer'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.css'

const Icon = props =>
  <div className='col-6' onClick={props.onClick}>
    <FontAwesomeIcon icon={props.icon} style={{ fontSize: '3rem', color: 'gray', cursor: 'pointer', ...props.style }} />
  </div>

const Tutorial = () => {
  const [slide, setSlide] = useState(0)
  const moveLeft = () => setSlide(slide => slide - 1)
  const moveRigth = () => setSlide(slide => slide + 1)
  const Slider = [<Dashboard onClick={(index)=> setSlide(index)} />, <Fortschritt />, <Epas />, <Starkefächer />, <Ptms />, <Timeline />]
  return (
    <div className='mb-5'>
      {Slider[slide]}
      <div className='row mt-4 mx-auto w-25'>
        <div className='col-6' onClick={moveLeft} >
          {slide > 0 && <Icon icon={faChevronLeft} />}
        </div>
        <div className='col-6' onClick={moveRigth}  >
        {slide < 5 && <Icon icon={faChevronRight} style={{ float: 'right' }} />}
        </div>
      </div>
    </div>
  )
}
export default Tutorial
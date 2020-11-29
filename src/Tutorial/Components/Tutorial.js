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

const Icon = props => <FontAwesomeIcon icon={props.icon} style={{ fontSize: '3rem', color: 'gray', cursor: 'pointer', ...props.style }} />
const Tutorial = () => {
  const [slide, setSlide] = useState(0)
  const moveLeft = () => setSlide(slide => slide - 1)
  const moveRigth = () => setSlide(slide => slide + 1)
  const Slider = [<Dashboard onClick={(index) => setSlide(index)} />, <Fortschritt />, <Epas />, <Starkefächer />, <Ptms />, <Timeline />]
  return (
    <div className='mb-5 position-relative'>
      { slide > 0 && <strong onClick={() => setSlide(0)} style={{ position: 'absolute', top: '1rem', left: '1rem', color: '#224768', fontSize: '1.4' }}>Zurück</strong>}
      {Slider[slide]}
      <div className='row mt-4 mx-auto '>
        <div className='col-6 offset-3'>
          <div onClick={moveLeft} >
            {slide > 0 && <Icon icon={faChevronLeft} style={{ float: 'left' }} />}
          </div>
          <div onClick={moveRigth}  >
            {slide < 5 && <Icon icon={faChevronRight} style={{ float: 'right' }} />}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Tutorial
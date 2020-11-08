import React, { useState } from 'react'
import img1 from "../slides/1-1.png"
import img2 from "../slides/1-2.png"
import img3 from "../slides/1-3.png"
import img4 from "../slides/1-4.png"
import img5 from "../slides/1-5.png"
import img6 from "../slides/1-6.png"

const Slide = props => {
  const [show, setShow] = useState(false)
  return (
    <div className='mt-4' onMouseEnter={() => setShow(!show)} onMouseLeave={() => setShow(!show)} onClick={props.onClick} style={{ position: 'relative' }}>
      <div style={{ width: '100%', opacity: show ? '0.07' : '1' }}>
        <img style={{ width: '100%' }} src={props.slide}></img>
      </div>
      {show && <div className='p-2' style={{ position: 'absolute', top: '0', fontSize: '1.3rem' }}>
        <p>{props.text}</p>
      </div>
      }
    </div>
  )
}
const Dashboard = () =>
  <div className="row mt-5">
    <div className='col-8 m-auto pad'>
      <div className="row h-100 flex-row-reverse">
        <div className="col-lg-4 mt-3">
          <Slide
            slide={img6}
            text='Das ist die Timeline! Hier siehst du alle deine vergangenen Prüfungen. Klick einfach eine an, um detaillierte Ergebnisse zu sehen!' />
        </div>
        <div className="col-lg-8 ">
          <div className="row h-100 d-md-flex">
            <div className="col-6 d-flex flex-column justify-content-around">
              <Slide
                slide={img1}
                text='Du willst wissen, welche Meilensteine du in deinem Studium schon erreicht hast und welche noch fehlen?' />
              <Slide
                slide={img2}
                text='Welche ärztlichen Tätigkeiten kannst du gut und wo musst du üben? Hier kannst du dich selbst bewerten / eine Bewertung holen!' />
            </div>
            <div className="col-6  d-flex flex-column justify-content-around">
              <div className='mt-lg-5'>
                <Slide
                  slide={img3}
                  text='Wir haben Deine MCs und PTMs nach deinen Stärken und Schwächen analysiert!' />
              </div>
              <div className='mb-lg-5'>
                <Slide slide={img4}
                  text='Schau dir an, wie du dich im PTM entwickelt hast!' />
              </div>
              <div className='mb-lg-5'>
                <Slide slide={img5}
                  text='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
export default Dashboard

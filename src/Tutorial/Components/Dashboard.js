import React, { useState } from 'react'
import img1 from "../slides/1-1.png"
import img2 from "../slides/1-2.png"
import img3 from "../slides/1-3.png"
import img4 from "../slides/1-4.png"
import img5 from "../slides/1-5.png"
import img6 from "../slides/1-6.png"

const Slide = props =>
    <div className='mt-4 pad' onClick={() => props.onClick(props.index)} style={{ position: 'relative' }}>
      <div>
        <img style={{ width: '100%' }} src={props.slide}></img>
      </div>
      <div className='px-2 pad mt-2' style={{fontSize: window.innerWidth < 1025 ?'0.7rem':'1.3rem' }}>
        <p>{props.text}</p>
      </div>
    </div>
    
const Dashboard = props =>
  <div className="row mt-5">
    <div className='col-10 m-auto pad px-2'>
      <div className="row h-100 flex-row-reverse">
        <div className="col-lg-4 mt-3">
          <Slide
            slide={img6}
            text='Das ist die Timeline! Hier siehst du alle deine vergangenen Prüfungen. Klick einfach eine an, um detaillierte Ergebnisse zu sehen!'
            index={5}
            {...props} />
        </div>
        <div className="col-lg-8 ">
          <div className="row h-100 d-md-flex">
            <div className="col-6 d-flex flex-column justify-content-around">
              <Slide
                slide={img1}
                text='Du willst wissen, welche Meilensteine du in deinem Studium schon erreicht hast und welche noch fehlen?'
                index={1}
                {...props} />
              <Slide
                slide={img2}
                text='Welche ärztlichen Tätigkeiten kannst du gut und wo musst du üben? Hier kannst du dich selbst bewerten / eine Bewertung holen!'
                index={2}
                {...props} />
            </div>
            <div className="col-6  d-flex flex-column justify-content-around">
              <div className='mt-lg-5'>
                <Slide
                  slide={img3}
                  text='Wir haben Deine MCs und PTMs nach deinen Stärken und Schwächen analysiert!'
                  index={3}
                  {...props} />
              </div>
              <div className='mb-lg-5'>
                <Slide slide={img4}
                  text='Schau dir an, wie du dich im PTM entwickelt hast!'
                  index={4}
                  {...props} />
              </div>
              <div className='mb-lg-5'>
                <Slide slide={img5}
                  text='Hier kannst du dein Feedback geben ' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
export default Dashboard

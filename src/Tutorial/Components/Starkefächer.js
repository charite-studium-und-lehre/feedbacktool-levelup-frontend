import React from 'react'
import Title from './Title'
import img1 from "../slides/6-1.png"
import img2 from "../slides/6-2.png"
import Slide from './Slide'

export default () => 
    <div>
      <Title text='Starken-Schwächen-Analyse - Wie kann ich meine Schwächen und Defizite in bestimmten Fächern erkennen?'/>
    <div className="w-75 mx-auto">
    <Slide
          img={img1}
          text='Hierfür haben wir die „Starke Fächer“-Seite entworfen.' 
          />
      <Slide
          img={img2}
          text='Du kannst hier genau sehen, wie gut du in den einzelnen Fächern in den MCs und PTMs abgeschnitten hast. Das kann sehr hilfreich sein, z.B. wenn du überlegst wo du deine nächste Famulatur machen möchtest.' 
          />
    </div>
  </div>


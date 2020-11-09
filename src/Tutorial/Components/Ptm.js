import React from 'react'
import Title from './Title'
import img1 from "../slides/ptm.png"
import Slide from './Slide'

export default () =>
  <div>
    <Title text='PTM - Progress Test Medicine' />
    <div className="w-75 mx-auto">
      <Slide
        img={img1}
        text='Hier siehst du die Ergebnisse deines PTMs. Du kannst rausfinden, wie viele Fragen du falsch oder richtig beantwortet hast und auch in welchen Fächern du am besten abgeschnitten hast!'
      />
    </div>
  </div>

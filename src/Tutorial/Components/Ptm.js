import React, { useState } from 'react'
import Dashboard from './Dashboard.js'
import img1 from "../slides/ptm.png"
import Slide from './Slide'

export default () => {
  const [dashboard, setDashboard] = useState(0);

  if (dashboard) return <Dashboard />
  return (
    <div>
      <div className="sticky">
        <p className="back-button" onClick={() => setDashboard(true)}>Zurück</p>
        <p className="vw66 title">
          <b>PTM - Progress Test Medicine</b>
        </p>
      </div>
      <div className="vw66">
        <Slide
          img={img1}
          text='Hier siehst du die Ergebnisse deines PTMs. Du kannst rausfinden, wie viele Fragen du falsch oder richtig beantwortet hast und auch in welchen Fächern du am besten abgeschnitten hast!'
        />
      </div>
    </div>
  )
}

import React, {useState} from 'react'
import Dashboard from './Dashboard.js'
import img1 from "../slides/6-1.png"
import img2 from "../slides/6-2.png"
import Slide from './Slide'

export default () => {
  const [dashboard, setDashboard] = useState(0);

  if (dashboard) return <Dashboard/>
  return (
    <div>
      <div className="sticky">
        <p className="back-button" onClick={() => setDashboard(true)}>Zurück</p>
      <p className="vw66 title">
        <b>Starken-Schwächen-Analyse - Wie kann ich meine Schwächen und Defizite in bestimmten Fächern erkennen?</b>
      </p>
    </div>

    <div className="vw66">
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
  )
}

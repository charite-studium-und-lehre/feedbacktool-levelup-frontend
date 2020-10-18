import React, {useState} from 'react'
import Dashboard from './dashboard.js'
import img1 from "../slides/6-1.png"
import img2 from "../slides/6-2.png"

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

      <div className="pad">
        <img src={img1} className="img"></img>
        <div className="txt">
          <p>Hierfür haben wir die „Starke Fächer“-Seite entworfen.</p>
        </div>
      </div>

      <div className="break"></div>

      <div className="pad">
        <img src={img2} className="img"></img>
        <div className="txt">
          <p>Du kannst hier genau sehen, wie gut du in den einzelnen Fächern in den MCs und PTMs abgeschnitten hast. Das kann sehr hilfreich sein, z.B. wenn du überlegst wo du deine nächste Famulatur machen möchtest.</p>
        </div>
      </div>
      <div className="break-small"></div>
      <div className="break"></div>
    </div>
  </div>
  )
}

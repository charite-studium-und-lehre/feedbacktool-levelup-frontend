import React, {useState} from 'react'
import Dashboard from './dashboard.js'
import img1 from "../slides/3-1.png"
import img2 from "../slides/3-2.png"

export default () => {

  const [dashboard, setDashboard] = useState(0);

  if (dashboard) return <Dashboard/>
  return (
    <div>
      <div className="sticky">
        <p className="back-button" onClick={() => setDashboard(true)}>Zurück</p>
        <p className="vw66 title" >
          <b>Studienfortschritt - Wie kann ich erkennen, welche Semester ich schon abgeschlossen und welche Meilensteine, Prüfungen absolviert habe?</b>
          </p>
      </div>

      <div className="vw66">
        <div className="pad">
          <img src={img1} className="img"></img>
          <div className="txt">
            <p>Klicke auf dem Dashboard auf die Studienfortschritts-Card!</p>
          </div>
        </div>

        <div className="break"></div>

        <div className="pad">
          <img src={img2} className="img"></img>
          <div className="txt">
                  <p>Hier kannst du jetzt sehen, welche Semester du schon abgeschlossen hast, welche Meilensteine du erreicht hast und für welche Semester du die Voraussetzungen noch nicht erfüllst. Beispielsweise siehst du hier, dass du alle Voraussetzungen für die Famulaturreife erfüllt hast.<br/><b>Tipp:</b> Um die Prüfungsdetails anzusehen, klicke die Prüfungen an!</p>
          </div>
        </div>
        <div className="break"></div>
      </div>
    </div>
  )
}

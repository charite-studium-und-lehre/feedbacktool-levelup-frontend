import React, {useState} from 'react'
import Dashboard from './Dashboard.js'
import img1 from "../slides/3-1.png"
import img2 from "../slides/3-2.png"
import Slide from './Slide'

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
      <Slide
          img={img1}
          text='Klicke auf dem Dashboard auf die Studienfortschritts-Card!' 
          />
        <Slide
          img={img2}
          text='Hier kannst du jetzt sehen, welche Semester du schon abgeschlossen hast, welche Meilensteine du erreicht hast und für welche Semester du die Voraussetzungen noch nicht erfüllst. Beispielsweise siehst du hier, dass du alle Voraussetzungen für die Famulaturreife erfüllt hast.' 
          tipp=' Um die Prüfungsdetails anzusehen, klicke die Prüfungen an'
          />
      </div>
    </div>
  )
}

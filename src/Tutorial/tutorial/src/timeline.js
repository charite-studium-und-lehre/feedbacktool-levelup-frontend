import React, {useState} from 'react'
import Dashboard from './dashboard.js'
import img1 from "../slides/1.png"
import img2 from "../slides/2-1.png"
import img3 from "../slides/2-2.png"
import img4 from "../slides/7.png"

export default () => {
  const [dashboard, setDashboard] = useState(0);

  if (dashboard) return <Dashboard/>
  return (
    <div>
      <div className="sticky">
        <p className="back-button" onClick={() => setDashboard(true)}>Zurück</p>
      <p className="vw66 title">
        <b>Prüfungen - Wie kann ich das Prüfungsergebnis der letzten Semester einsehen?</b>
      </p>
    </div>

    <div className="vw66">

      <div className="pad">
        <img src={img1} className="img"></img>
        <div className="txt">
          <p>Auf der rechten Seite des Dashboards siehst du die Timeline. Dort findest du alle deine Prüfungen in chronologischer Reihenfolge. Klicke auf eine Prüfung, um dir deine Ergebnisse genauer anzuschauen.</p>
        </div>
      </div>
      <div className="break"></div>

      <div className="pad">
        <img src={img2} className="img"></img>
        <div className="txt">
          <p>Auf der Navigations-Leiste oben auf der Seite kannst du auch jederzeit eine andere deiner bereits absolvierten Prüfungen auswählen.</p>
        </div>
      </div>

      <div className="break"></div>

      <div className="pad">
        <img src={img3} className="img"></img>
        <div className="txt">
          <p>Hier siehst du nun, welche Fragen du richtig oder falsch beantwortet hast, was die richtigen Lösungen sind und auch welchem Fach und Modul die Fragen zugeordnet sind.</p>
        </div>
      </div>

      <div className="break"></div>

      <div className="pad">
        <img src={img4} className="img"></img>
        <div className="txt">
          <p>Wenn du zur Prüfungsvorbereitung MC-Fragen kreuzen möchtest, empfehlen wir dir unsere Partner-Plattform TellMe. Dort kannst du dein Wissen mit echten Altfragen testen und mit den Kommentaren zur richtigen Lösung lernen!</p>
        </div>
      </div>
      <div className="break-small"></div>
      <div className="break"></div>
    </div>
  </div>
  )
}

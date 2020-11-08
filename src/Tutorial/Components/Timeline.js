import React, {useState} from 'react'
import Dashboard from './Dashboard.js'
import img1 from "../slides/1.png"
import img2 from "../slides/2-1.png"
import img3 from "../slides/2-2.png"
import img4 from "../slides/7.png"
import Slide from './Slide'

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
    <Slide
          img={img1}
          text='Auf der rechten Seite des Dashboards siehst du die Timeline. Dort findest du alle deine Prüfungen in chronologischer Reihenfolge. Klicke auf eine Prüfung, um dir deine Ergebnisse genauer anzuschauen.' 
          />
            <Slide
          img={img2}
          text='Auf der Navigations-Leiste oben auf der Seite kannst du auch jederzeit eine andere deiner bereits absolvierten Prüfungen auswählen.' 
          />
            <Slide
          img={img3}
          text='Hier siehst du nun, welche Fragen du richtig oder falsch beantwortet hast, was die richtigen Lösungen sind und auch welchem Fach und Modul die Fragen zugeordnet sind.' 
          />
            <Slide
          img={img4}
          text='Wenn du zur Prüfungsvorbereitung MC-Fragen kreuzen möchtest, empfehlen wir dir unsere Partner-Plattform TellMe. Dort kannst du dein Wissen mit echten Altfragen testen und mit den Kommentaren zur richtigen Lösung lernen!' 
          />
    </div>
  </div>
  )
}

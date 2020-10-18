import React, {useState} from 'react'
import Dashboard from './dashboard.js'
import img1 from "../slides/4-1.png"
import img2 from "../slides/4-2.png"
import img3 from "../slides/4-2.png"
import img4 from "../slides/4-2.png"

export default () => {

  const [dashboard, setDashboard] = useState(0);
  if (dashboard) return <Dashboard/>
  return (
    <div>
      <div className="sticky">
        <p className="back-button" onClick={() => setDashboard(true)}>Zurück</p>
        <p className="vw66 title">
          <b>Ärtzliche Tätigkeiten - Wie kann ich erkennen, welche Semester ich schon abgeschlossen und welche Meilensteine, Prüfungen absolviert habe?</b>
        </p>
    </div>

    <div className="vw66">
      <div className="pad">
        <img src={img1} className="img"></img>
        <div className="txt">
          <p>Wenn du dich in einer Famulatur oder im PJ von deinen Lehrenden einschätzen lassen willst, dann klicke im Dashboard auf „Ärztliche Tätigkeiten“!</p>
        </div>
      </div>

      <div className="break"></div>

      <div className="pad">
        <img src={img2} className="img"></img>
        <div className="txt">
          <p>Hier kannst du bereits erhaltene Fremdbewertungen auf den ärztlichen Tätigkeiten anschauen oder eine neue Fremdbewertung von deinen Lehrenden einfordern.</p>
        </div>
      </div>

      <div className="break"></div>

      <div className="pad">
        <img src={img3} className="img"></img>
        <div className="txt">
          <p>Fülle dazu einfach dieses Formular aus und klicke auf absenden.
          <br/>
          <b>Tipp:</b> Fülle möglichst alle Felder aus, damit die Lehrenden genau wissen, wen sie bewerten sollen.</p>
        </div>
      </div>

      <div className="break"></div>

      <div className="pad">
        <img src={img4} className="img"></img>
        <div className="txt">
          <p>Du kannst dich auch selber bewerten! Die EPAs dienen der Selbst- und Fremdeinschätzung bei ärztlichen Tätigkeiten, die Du am Ende des Studiums beherrschen solltest. Die Skala "traue ich mir zu" zeigt an, bei welchen ärztlichen Tätigkeiten Du Dir die Ausführung zutraust. Die Skala "habe ich gemacht" ist davon getrennt zu betrachten. Zum Beispiel kannst Du eine Tätigkeit bereits "gemacht" haben und sie Dir trotzdem nicht zutrauen (dann heißt es üben, üben, üben!) oder Du traust sie Dir zu, aber hast sie noch nicht gemacht (dann solltest Du dein theoretisches Wissen praktisch testen!).</p>
        </div>
      </div>
      <div className="break"></div>
    </div>
  </div>
  )
}

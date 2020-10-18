import React, {useState, useEffect, useRef} from 'react'
import dashboard from '../slides/dashboard.png'
import Studienfortschritt from './fortschritt.js'
import StaerkeSchwaeche from './staerke-schwaeche.js'
import Timeline from './timeline.js'
import TrainingMC from './training-mc.js'
import AertzlicheTaetigkeiten from './arzt-taet.js'
import resizeScript from './script.js'

export default () => {

  const [coordinates, setCoordinates] = useState(0);
  const [fortschritt, setFortschritt] = useState(0);
  const [staerkeSchwaeche, setStaerkeSchwaeche] = useState(0);
  const [timeline, setTimeline] = useState(0);
  const [trainingMC, setTrainingMC] = useState(0);
  const [aertzlicheTaetigkeiten, setAerztlicheTaetigkeiten] = useState(0);

  function resize() {
    setCoordinates(resizeScript());
  }

  useEffect(() => {
    resize();
    window.addEventListener('resize', resize);
  }, []);

  if (fortschritt) return <Studienfortschritt/>
  if (staerkeSchwaeche) return <StaerkeSchwaeche/>
  if (timeline) return <Timeline/>
  if (trainingMC) return <TrainingMC/>
  if (aertzlicheTaetigkeiten) return <AertzlicheTaetigkeiten/>

  return (
    <div>
      <div className="break-small"></div>
      <div className="vw66" id="66wrap">
        <div id="dashwrap" onLoad={resize} className="pad">
          <a className="area" onClick={() => setFortschritt(true)} style={{
            left: coordinates ? coordinates[0].left : 0,
            top: coordinates ? coordinates[0].top : 0,
            width: coordinates ? coordinates[0].width : 0,
            height: coordinates ? coordinates[0].height : 0
          }}>
            <p>Du willst wissen, welche Meilensteine du in deinem Studium schon erreicht hast und welche noch fehlen?</p>
          </a>
          <a className="area" onClick={() => setStaerkeSchwaeche(true)} style={{
            left: coordinates ? coordinates[1].left : 0,
            top: coordinates ? coordinates[1].top : 0,
            width: coordinates ? coordinates[1].width : 0,
            height: coordinates ? coordinates[1].height : 0
          }}>
            <p>Wir haben Deine MCs und PTMs nach deinen Stärken und Schwächen analysiert!</p>
          </a>
          <a className="area" onClick={() => setTimeline(true)} style={{
            left: coordinates ? coordinates[2].left : 0,
            top: coordinates ? coordinates[2].top : 0,
            width: coordinates ? coordinates[2].width : 0,
            height: coordinates ? coordinates[2].height : 0
          }}>
            <p>Das ist die Timeline! Hier siehst du alle deine vergangenen Prüfungen. Klick einfach eine an, um detaillierte Ergebnisse zu sehen!</p>
          </a>
          <a className="area" onClick={() => setTrainingMC(true)} style={{
            left: coordinates ? coordinates[3].left : 0,
            top: coordinates ? coordinates[3].top : 0,
            width: coordinates ? coordinates[3].width : 0,
            height: coordinates ? coordinates[3].height : 0
          }}>
            <p>Schau dir an, wie du dich im PTM entwickelt hast!</p>
          </a>
          <a className="area" onClick={() => setAerztlicheTaetigkeiten(true)} style={{
            left: coordinates ? coordinates[4].left : 0,
            top: coordinates ? coordinates[4].top : 0,
            width: coordinates ? coordinates[4].width : 0,
            height: coordinates ? coordinates[4].height : 0
          }}>
            <p>Welche ärztlichen Tätigkeiten kannst du gut und wo musst du üben? Hier kannst du dich selbst bewerten / eine Bewertung holen!</p>
          </a>
          <img src={dashboard} id="dashboard"></img>
          <br/><br/>
          <div className="txt">
            <p>Das ist das Dashboard. Von hier aus kannst du zu allen Bereichen der Seite navigieren. <br/>Klick auf das was dich interessiert!</p>
          </div>
        </div>
      </div>
      <br/>
    </div>
  )}

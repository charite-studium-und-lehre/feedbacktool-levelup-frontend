import React from 'react'
import Title from './Title'
import img1 from "../slides/3-1.png"
import img2 from "../slides/3-2.png"
import Slide from './Slide'

export default () => {
  return (
    <div>
      <Title text='Studienfortschritt - Wie kann ich erkennen, welche Semester ich schon abgeschlossen und welche Meilensteine, Prüfungen absolviert habe?' />
      <div className="w-75 mx-auto">
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

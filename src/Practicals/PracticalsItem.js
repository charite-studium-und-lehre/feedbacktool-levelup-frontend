import React, { Component } from 'react'
import { SlideDown } from 'react-slidedown'
import makeExtendable from '../Core/makeExtendable'

const praticalsTree ={
  entries: [
      {
          label: 'Betreuung von Patienten',
          entries: [
              {
                label: 'Anamnese erheben, körperliche Untersuchung durchführen und Ergebnisse strukturiert zusammenfassen',
                entries: [
                    {
                      label: 'Vollständige oder fokussierte Anamnese erheben und körperliche Untersuchung  durchführen (entsprechend Situationsanforderung)'
                    },
                    {
                      label: 'Zusammenstellen von Vorbefunden, Dokumenten, Medikation, ggf. Rücksprache mit behandelnden Ärzten oder Familienangehörigen'
                    },
                    {
                      label: 'Strukturierte Dokumentation in Patientenakte, einschließlich Synthese von Diagnosen/Arbeitsdiagnosen und  wesentlicher Differentialdiagnosen'
                    },

                ]
              },
              {
                label: 'Diagnostischen Arbeitsplan erstellen und Umsetzung einleiten',
                entries: [
                  {
                    label: 'Eintrag für die Basisdiagnostik in Patientenkurve vorschreiben (Gegenzeichnung Arzt)'
                  },
                  {
                    label: 'Plan für die patientenspezifische Diagnostik entwerfen (Abstimmung mit Arzt)'
                  },
                  {
                    label: 'Plan in Patientenkurve eintragen und diagnostische Anforderungsformulare ausfüllen (Gegenzeichnung Arzt)'
                  },
                ]
              },
              {
                label: 'Untersuchungsergebnisse interpretieren und weiterführende Schritte einleiten',
                entries: [
                  {
                    label: 'Ergebnisse der Basisdiagnostik und häufiger Untersuchungen sichten und interpretieren'
                  },
                  {
                    label: 'Änderungen in Diagnostik und Therapie vorschlagen (Abstimmung mit Arzt)'
                  },
                  {
                    label: 'Ergebnisse in Patientenkurve eintragen und ggf. Anforderungsformulare ausfüllen (Gegenzeichnung Arzt)'
                  },
                ]
              },          
              {
                label: 'Behandlungsplan erstellen und die Umsetzung einleite',
                entries: [
                  {
                    label: 'Eintrag für die allgemeine Therapie in Patientenkurve vorschreiben (Gegenzeichnung Arzt)'
                  },
                  {
                    label: 'Plan für die patientenspezifische Therapie entwerfen (Abstimmung mit Arzt)'
                  },
                  {
                    label: ' Plan in Patientenkurve eintragen und therapeutische Anforderungsformulare ausfüllen (Gegenzeichnung Arzt)'
                  },
                ]
              },

          ]
      },
      {
          label: 'Ärztliche Prozeduren',
      },
      {
          label: 'Kommunikation mit Patienten',
      },
      {
          label: 'Kommunikation und Zusammenarbeit mit Kollegen',
      },
      {
          label: 'Weitere ärztliche professionelle Tätigkeit',
      },
  ]
}

const PracticalsTreeItem = makeExtendable(props =>
    <div className="card p-2 m-2 align-self-start flex-grow-1">
      <span className="font-weight-bold" style={{fontSize: '.8rem'}} onClick={() => props.toggleExtended()}>{props.title}</span>
      <SlideDown className="animated fast" >
        {props.extended && 
        <div>
          <hr />
          {props.children}
        </div>
        }
      </SlideDown>
    </div>
)


class PracticalsItem extends Component {
  render() {
    return (
      <div className="PracticalsItem d-flex flex-wrap">
          {praticalsTree.entries.map(e => 
            <PracticalsTreeItem extended={false} title={e.label}>
              {e.entries && e.entries.map(f => <PracticalsTreeItem extended={false} title={f.label} /> )}
            </PracticalsTreeItem>
          )}
      </div>
    )
  }
}
export default PracticalsItem;



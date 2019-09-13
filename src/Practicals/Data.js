import _ from 'lodash/fp'
import seedrandom from 'seedrandom'
import { randomUniform } from 'd3-random'
import React from 'react'
import { Trans } from 'react-i18next'

const praticalsTree = {
  label: 'root',
  entries: [
      {
          label: <Trans>Betreuung von Patienten</Trans>,
			
id: _.uniqueId(),
          entries: [
              {
                label: <Trans>Anamnese erheben, körperliche Untersuchung durchführen und Ergebnisse strukturiert zusammenfassen</Trans>,
			
id: _.uniqueId(),
                entries: [
                    {
                      label: <Trans>Vollständige oder fokussierte Anamnese erheben und körperliche Untersuchung  durchführen (entsprechend Situationsanforderung)</Trans>,
			                done: 3,
                      confident: 3,
                      external: [{ id: 1, value: 4, datum : new Date() }, { id: 4, value: 2,  datum : new Date() }],
id: _.uniqueId(),
                    },
                    {
                      label: <Trans>Zusammenstellen von Vorbefunden, Dokumenten, Medikation, ggf. Rücksprache mit behandelnden Ärzten oder Familienangehörigen</Trans>,
			                done: 2,
                      confident: 3,
id: _.uniqueId(),
                    },
                    {
                      label: <Trans>Strukturierte Dokumentation in Patientenakte, einschließlich Synthese von Diagnosen/Arbeitsdiagnosen und  wesentlicher Differentialdiagnosen</Trans>,
			                done: 1,
                      confident: 2,
id: _.uniqueId(),
                    },

                ],
                hasGraph: true
              },
              {
                label: <Trans>Diagnostischen Arbeitsplan erstellen und Umsetzung einleiten</Trans>,
			
id: _.uniqueId(),
                entries: [
                  {
                    label: <Trans>Eintrag für die Basisdiagnostik in Patientenkurve vorschreiben (Gegenzeichnung Arzt)</Trans>,
			              done: 1,
                    confident: 1,
id: _.uniqueId(),
                  },
                  {
                    label: <Trans>Plan für die patientenspezifische Diagnostik entwerfen (Abstimmung mit Arzt)</Trans>,
		  	            done: 0,
                    confident: 0,
                    external: [{ id: 1, value: 2, datum : new Date() }, { id: 4, value: 2,  datum : new Date() }],
id: _.uniqueId(),
                  },
                  {
                    label: <Trans>Plan in Patientenkurve eintragen und diagnostische Anforderungsformulare ausfüllen (Gegenzeichnung Arzt)</Trans>,
			              done: 0,
                    confident: 0,
id: _.uniqueId(),
                  },
                ],
                hasGraph: true
              },
              {
                label: <Trans>Untersuchungsergebnisse interpretieren und weiterführende Schritte einleiten</Trans>,
			
id: _.uniqueId(),
                entries: [
                  {
                    label: <Trans>Ergebnisse der Basisdiagnostik und häufiger Untersuchungen sichten und interpretieren</Trans>,
			              done: 1,
                    confident: 2,
id: _.uniqueId(),
                  },
                  {
                    label: <Trans>Änderungen in Diagnostik und Therapie vorschlagen (Abstimmung mit Arzt)</Trans>,
			              done: 1,
                    confident: 2,
id: _.uniqueId(),
                  },
                  {
                    label: <Trans>Ergebnisse in Patientenkurve eintragen und ggf. Anforderungsformulare ausfüllen (Gegenzeichnung Arzt)</Trans>,
			              done: 0,
                    confident: 2,
id: _.uniqueId(),
                  },
                ],
                hasGraph: true
              },          
              {
                label: <Trans>Behandlungsplan erstellen und die Umsetzung einleite</Trans>,
			
id: _.uniqueId(),
                entries: [
                  {
                    label: <Trans>Eintrag für die allgemeine Therapie in Patientenkurve vorschreiben (Gegenzeichnung Arzt)</Trans>,
			              done: 0,
                    confident: 2,
                    external: [{id: 1, value: 2, datum : new Date()}, {id:5, value: 4, datum : new Date()}],
id: _.uniqueId(),
                  },
                  {
                    label: <Trans>Plan für die patientenspezifische Therapie entwerfen (Abstimmung mit Arzt)</Trans>,
			              done: 0,
                    confident: 2,
                    external: [{id: 2, value: 1, datum : new Date()}],
                    id: _.uniqueId(),
                  },
                  {
                    label: <Trans>Plan in Patientenkurve eintragen und therapeutische Anforderungsformulare ausfüllen (Gegenzeichnung Arzt)</Trans>,
			              done: 0,
                    confident: 2,
                    external: [{id: 3, value: 5, datum : new Date()}],
id: _.uniqueId(),
                  },
                ],
                hasGraph: true
              },

          ]
      },
      {
          label: <Trans>Ärztliche Prozeduren</Trans>,
          hasGraph: true,
id: _.uniqueId(),
          entries: [
            {
              label: <Trans>Venös Blut entnehmen</Trans>,
			        done: 4,
              confident: 4,
id: _.uniqueId(),
            },
            {
              label:<Trans>'Venenverweilkanüle legen </Trans>,
			        done:1,
              confident: 3,
id: _.uniqueId(),
            },
            {
              label: <Trans>Blutkultur entnehmen</Trans>,
			        done: 2,
              confident: 2,
              external: [{ id: 1, value: 3, datum : new Date() }, { id: 4, value: 2,  datum : new Date() }],
id: _.uniqueId(),
            },
            {
              label: <Trans>Abstriche (Mund, Nase, Wunde, anal oder urogenital) vornehmen</Trans>,
			        done: 0,
              confident: 1,
id: _.uniqueId(),
            },
            {
              label: <Trans>Infusion anlegen</Trans>,
			        done: 2,
              confident: 2,
id: _.uniqueId(),
            },
            {
              label: <Trans>12-Kanal EKG schreiben</Trans>,
			        done: 2,
              confident: 2,
id: _.uniqueId(),
            },
            {
              label: <Trans>Einfachen Verband anlegen oder wechseln </Trans>,
			        done: 3,
              confident: 3,
id: _.uniqueId(),
            },
            {
              label: <Trans>Rezept vorschreiben (Gegenzeichnung Arzt) </Trans>,
			        done: 0,
              confident: 1,
id: _.uniqueId(),
            },
          ]
      },
      {
          label: <Trans>Kommunikation mit Patienten</Trans>,
			
id: _.uniqueId(),
          entries: [
            {
              label: <Trans>Einverständnis für Untersuchungen und Prozeduren einholen (Patienten über Ablauf, Nutzen, Risiken, Alternativen informieren)</Trans>,
			
id: _.uniqueId(),
              entries: [
                {
                  label: <Trans>Nicht-unterschreibungspflichtige Untersuchungen/Prozeduren (z.B. Blutentnahmen, Blasenkatheter, Magensonde, Röntgen-Untersuchungen)</Trans>,
                  done: 1,
                  confident: 1,
                  external: [{id: 4, value: 1, datum : new Date()}],
id: _.uniqueId(),
                },
                {
                  label: <Trans>Unterschriftspflichtige Prozeduren mit Gegenzeichung des Arztes (Gabe von Erythrozyten, Thrombozyten oder Plasmapräparaten)</Trans>,
                  done: 1,
                  confident: 1,
                  external: [{id: 5, value: 3, datum : new Date()}],
id: _.uniqueId(),
                },
              ],
              hasGraph: true
            },
            {
              label: <Trans>Patienten informieren und beraten (häufige Beratungsanlässe und Krankheitsbilder)</Trans>,
			
id: _.uniqueId(),
              entries: [
                {
                  label: <Trans>Informieren des Patienten (allgemeine Information zu Art der Beschwerden, dem Krankheitsbild und der Diagnostik und Therapie</Trans>,
                  done: 1,
                  confident: 2,
                  external: [{id: 6, value: 4,datum : new Date()}],
id: _.uniqueId(),
                },
                {
                  label: <Trans>Informieren des Patienten (allgemeine Information zu Art der Beschwerden, dem Krankheitsbild und der Diagnostik und Therapie; spezifische Informationen zum Patienten hierzu wie mit dem Arzt abgestimmt)</Trans>,
                  done: 1,
                  confident: 2,
id: _.uniqueId(),
                },
              ],
              hasGraph: true
            },
          ]
      },
      {
          label: <Trans>Kommunikation und Zusammenarbeit mit Kollegen</Trans>,
			
id: _.uniqueId(),
          entries: [
            {
              label: <Trans>Krankengeschichte eines Patienten vorstellen (strukturiert, entsprechend Zielpersonen und Situationserfordernissen)</Trans>,
			
id: _.uniqueId(),
              entries: [
                {
                  label: <Trans>Krankengeschichte in Visite vorstellen  </Trans>,
                  done: 0,
                  confident: 1,
id: _.uniqueId(),
                },
                {
                  label: <Trans>Krankengeschichte in Besprechungen vorstellen (z.B. Röntgen-Demo, Pathokonferenz, Teambesprechungen)</Trans>,
                  done: 0,
                  confident: 1,
id: _.uniqueId(),
                },
              ],
              hasGraph: true
            },
            {
              label: <Trans>Patientenübergabe vornehmen oder entgegennehmen (strukturiert, entsprechend Zielpersonen und Situationserfordernissen)</Trans>,
			
id: _.uniqueId(),
              entries: [
                {
                  label: <Trans>Patientenübergabe an/von Ärzte(n) durchführen (z.B. Dienstübergaben)</Trans>,
                  done: 0,
                  confident: 0,
id: _.uniqueId(),
                },
                {
                  label: <Trans>Patientenübergabe an/von nicht-ärztliche(n) Mitarbeiter(n) durchführen</Trans>,
                  done: 0,
                  confident: 0,
id: _.uniqueId(),
                },
              ],
              hasGraph: true
            },
            {
              label: <Trans>Patientenbericht verfassen und übermitteln (strukturiert, entsprechend der Abstimmung mit dem supervidierenden Arzt zur medizinischen Versorgung des Patienten)</Trans>,
			
id: _.uniqueId(),
              entries: [
                {
                  label: <Trans>Vorläufigen Patientenbericht vorschreiben und fertigstellen (Abstimmung und Gegenzeichnung Arzt)</Trans>,
                  done: 0,
                  confident: 2,
id: _.uniqueId(),
                },
                {
                  label: <Trans>Abschließenden Patientenbericht vorschreiben und fertigstellen (Abstimmung und Gegenzeichnung  Arzt)</Trans>,
                  done: 0,
                  confident: 2,
id: _.uniqueId(),
                },
                {
                  label: <Trans>Übermittelung von Patientenbericht an Zielbereich bzw. dessen Veranlassung</Trans>,
                  done: 0,
                  confident: 2,
id: _.uniqueId(),
                },
              ],
              hasGraph: true
            },
          ]
      },
      {
          label: <Trans>Weitere ärztliche professionelle Tätigkeit</Trans>,
			
id: _.uniqueId(),
          entries: [
            {
              label: <Trans>Notfallsituationen erkennen und handeln (Ausmaß grob abschätzen, Soforthilfe leisten, Hilfe herbeirufen)</Trans>,
			
id: _.uniqueId(),
              entries: [
                {
                  label: <Trans>Basic-Life-Support mit und ohne technische Hilfsmittel bei Ausfall von Vitalfunktionen</Trans>,
                  done: 1,
                  confident: 2,
id: _.uniqueId(),
                },
                {
                  label: <Trans>Zustände mit drohender vitaler Gefährdung erkennen und ggf. überbrückend versorgen (Zeichen der Atemnot oder Hypoxie, Thoraxschmerz, zunehmender Bewusstseinseinschränkung, hohes Fieber, arterielle Hypo- und Hypertension, Tachy- und Bradykardie, Hypo- und Hyperglykämie, Anurie, innere und äußere Blutung, Trauma und Verletzungen)</Trans>,
                  done: 2,
                  confident: 2,
id: _.uniqueId(),
                },
              ],
              hasGraph: true
            },
            {
              label: <Trans>Fallvorstellung evidenz-basiert vornehmen und patientenbezogene Umsetzung einleiten (für PJ´ler bearbeitbare medizinische Problemstellungen)</Trans>,
			
id: _.uniqueId(),
              entries: [
                {
                  label: <Trans>Vorbereitung der Fallvorstellung (Suche nach bester verfügbarer Evidenz, Überprüfung der klinischen Relevanz und Anwendbarkeit für den einzelnen Patienten)</Trans>,
                  done: 0,
                  confident: 1,
id: _.uniqueId(),
                },
                {
                  label: <Trans>Durchführung der Fallvorstellung (Strukturierte Vorstellung (z. B. Abteilungsbesprechungen, interne Fortbildungen); Anordnung der Änderungen entsprechend 1.2 „Diagnostikplan“ und 1.4 „Behandlungsplan“</Trans>,
                  done: 0,
                  confident: 1,
id: _.uniqueId(),
                },
              ],
              hasGraph: true
            },
          ]
      },
  ]
}
export const ExternAssissing = [
  {
    id: 1,
    name :  'name 1',
    datum : new Date()
  },
  {
    id: 2,
    name :  'name 2',
    datum : new Date()
  },
  {
    id: 3,
    name :  'name 3',
    datum : new Date()
  },
  {
    id: 4,
    name :  'name 4',
    datum : new Date()
  },
  {
    id: 5,
    name :  'name 5',
    datum : new Date()
  },
  {
    id: 6,
    name :  'name 6',
    datum : new Date()
  },
]

const addHistoricalScore = item => {
  const random = (a,b) => () => _.round(randomUniform.source(seedrandom(Math.random()))(a,b)())
  return { ...item, historical: {
    done: _.range(1,8).map(() => random(0,item.done)()).sort().map((d, i) => ({semester: new Date(2012 + i, 6 + random(-1, 2)(), 15 + random(-10, 20)()), level: d})),
    confident: _.range(1,8).map(() => random(0,item.confident)()).sort().map((d, i) => ({semester: new Date(2012 + i, 6 + random(-1, 2)(), 15 + random(-10, 20)()), level: d})),
    external: _.range(1,8).map(() => random(0,item.external)()).sort().map((d, i) => ({semester: new Date(2012 + i, 6 + random(-1, 2)(), 15 + random(-10, 20)()), level: d})),
  }}
}

const normalize = e => [{...e, entries: (e.entries || []).map(e => e.id) }, _.flatMap(normalize, e.entries || [])]
export default  _.flow([_.flatMapDeep(normalize), _.map(e => ({ external: [], ...e })), _.map(addHistoricalScore), _.keyBy(e => e.id)])([praticalsTree])
import _ from 'lodash'

const praticalsTree = {
  label: 'root',
  entries: [
      {
          label: 'Betreuung von Patienten',
			
id: _.uniqueId(),
          entries: [
              {
                label: 'Anamnese erheben, körperliche Untersuchung durchführen und Ergebnisse strukturiert zusammenfassen',
			
id: _.uniqueId(),
                entries: [
                    {
                      label: 'Vollständige oder fokussierte Anamnese erheben und körperliche Untersuchung  durchführen (entsprechend Situationsanforderung)',
			
id: _.uniqueId(),
                    },
                    {
                      label: 'Zusammenstellen von Vorbefunden, Dokumenten, Medikation, ggf. Rücksprache mit behandelnden Ärzten oder Familienangehörigen',
			
id: _.uniqueId(),
                    },
                    {
                      label: 'Strukturierte Dokumentation in Patientenakte, einschließlich Synthese von Diagnosen/Arbeitsdiagnosen und  wesentlicher Differentialdiagnosen',
			
id: _.uniqueId(),
                    },

                ],
                hasGraph: true
              },
              {
                label: 'Diagnostischen Arbeitsplan erstellen und Umsetzung einleiten',
			
id: _.uniqueId(),
                entries: [
                  {
                    label: 'Eintrag für die Basisdiagnostik in Patientenkurve vorschreiben (Gegenzeichnung Arzt)',
			
id: _.uniqueId(),
                  },
                  {
                    label: 'Plan für die patientenspezifische Diagnostik entwerfen (Abstimmung mit Arzt)',
			
id: _.uniqueId(),
                  },
                  {
                    label: 'Plan in Patientenkurve eintragen und diagnostische Anforderungsformulare ausfüllen (Gegenzeichnung Arzt)',
			
id: _.uniqueId(),
                  },
                ]
              },
              {
                label: 'Untersuchungsergebnisse interpretieren und weiterführende Schritte einleiten',
			
id: _.uniqueId(),
                entries: [
                  {
                    label: 'Ergebnisse der Basisdiagnostik und häufiger Untersuchungen sichten und interpretieren',
			
id: _.uniqueId(),
                  },
                  {
                    label: 'Änderungen in Diagnostik und Therapie vorschlagen (Abstimmung mit Arzt)',
			
id: _.uniqueId(),
                  },
                  {
                    label: 'Ergebnisse in Patientenkurve eintragen und ggf. Anforderungsformulare ausfüllen (Gegenzeichnung Arzt)',
			
id: _.uniqueId(),
                  },
                ],
                hasGraph: true
              },          
              {
                label: 'Behandlungsplan erstellen und die Umsetzung einleite',
			
id: _.uniqueId(),
                entries: [
                  {
                    label: 'Eintrag für die allgemeine Therapie in Patientenkurve vorschreiben (Gegenzeichnung Arzt)',
			
id: _.uniqueId(),
                  },
                  {
                    label: 'Plan für die patientenspezifische Therapie entwerfen (Abstimmung mit Arzt)',
			
id: _.uniqueId(),
                  },
                  {
                    label: ' Plan in Patientenkurve eintragen und therapeutische Anforderungsformulare ausfüllen (Gegenzeichnung Arzt)',
			
id: _.uniqueId(),
                  },
                ],
                hasGraph: true
              },

          ]
      },
      {
          label: 'Ärztliche Prozeduren',
			
id: _.uniqueId(),
          entries: [
            {
              label: 'Venös Blut entnehmen',
			
id: _.uniqueId(),
            },
            {
              label: 'Venenverweilkanüle legen ',
			
id: _.uniqueId(),
            },
            {
              label: 'Blutkultur entnehmen',
			
id: _.uniqueId(),
            },
            {
              label: 'Abstriche (Mund, Nase, Wunde, anal oder urogenital) vornehmen',
			
id: _.uniqueId(),
            },
            {
              label: 'Infusion anlegen',
			
id: _.uniqueId(),
            },
            {
              label: '12-Kanal EKG schreiben',
			
id: _.uniqueId(),
            },
            {
              label: 'Einfachen Verband anlegen oder wechseln ',
			
id: _.uniqueId(),
            },
            {
              label: 'Rezept vorschreiben (Gegenzeichnung Arzt) ',
			
id: _.uniqueId(),
            },
          ]
      },
      {
          label: 'Kommunikation mit Patienten',
			
id: _.uniqueId(),
          entries: [
            {
              label: 'Einverständnis für Untersuchungen und Prozeduren einholen (Patienten über Ablauf, Nutzen, Risiken, Alternativen informieren)',
			
id: _.uniqueId(),
              entries: [
                {
                  label: 'Nicht-unterschreibungspflichtige Untersuchungen/Prozeduren (z.B. Blutentnahmen, Blasenkatheter, Magensonde, Röntgen-Untersuchungen)',
			
id: _.uniqueId(),
                },
                {
                  label: 'Unterschriftspflichtige Prozeduren mit Gegenzeichung des Arztes (Gabe von Erythrozyten, Thrombozyten oder Plasmapräparaten)',
			
id: _.uniqueId(),
                },
              ],
              hasGraph: true
            },
            {
              label: 'Patienten informieren und beraten (häufige Beratungsanlässe und Krankheitsbilder)',
			
id: _.uniqueId(),
              entries: [
                {
                  label: 'Informieren des Patienten (allgemeine Information zu Art der Beschwerden, dem Krankheitsbild und der Diagnostik und Therapie',
			
id: _.uniqueId(),
                },
                {
                  label: 'Informieren des Patienten (allgemeine Information zu Art der Beschwerden, dem Krankheitsbild und der Diagnostik und Therapie; spezifische Informationen zum Patienten hierzu wie mit dem Arzt abgestimmt)',
			
id: _.uniqueId(),
                },
              ],
              hasGraph: true
            },
          ]
      },
      {
          label: 'Kommunikation und Zusammenarbeit mit Kollegen',
			
id: _.uniqueId(),
          entries: [
            {
              label: 'Krankengeschichte eines Patienten vorstellen (strukturiert, entsprechend Zielpersonen und Situationserfordernissen)',
			
id: _.uniqueId(),
              entries: [
                {
                  label: 'Krankengeschichte in Visite vorstellen  ',
			
id: _.uniqueId(),
                },
                {
                  label: 'Krankengeschichte in Besprechungen vorstellen (z.B. Röntgen-Demo, Pathokonferenz, Teambesprechungen)',
			
id: _.uniqueId(),
                },
              ],
              hasGraph: true
            },
            {
              label: 'Patientenübergabe vornehmen oder entgegennehmen (strukturiert, entsprechend Zielpersonen und Situationserfordernissen)',
			
id: _.uniqueId(),
              entries: [
                {
                  label: 'Patientenübergabe an/von Ärzte(n) durchführen (z.B. Dienstübergaben)',
			
id: _.uniqueId(),
                },
                {
                  label: 'Patientenübergabe an/von nicht-ärztliche(n) Mitarbeiter(n) durchführen',
			
id: _.uniqueId(),
                },
              ],
              hasGraph: true
            },
            {
              label: 'Patientenbericht verfassen und übermitteln (strukturiert, entsprechend der Abstimmung mit dem supervidierenden Arzt zur medizinischen Versorgung des Patienten)',
			
id: _.uniqueId(),
              entries: [
                {
                  label: 'Vorläufigen Patientenbericht vorschreiben und fertigstellen (Abstimmung und Gegenzeichnung Arzt)',
			
id: _.uniqueId(),
                },
                {
                  label: 'Abschließenden Patientenbericht vorschreiben und fertigstellen (Abstimmung und Gegenzeichnung  Arzt)',
			
id: _.uniqueId(),
                },
                {
                  label: 'Übermittelung von Patientenbericht an Zielbereich bzw. dessen Veranlassung',
			
id: _.uniqueId(),
                },
              ],
              hasGraph: true
            },
          ]
      },
      {
          label: 'Weitere ärztliche professionelle Tätigkeit',
			
id: _.uniqueId(),
          entries: [
            {
              label: 'Notfallsituationen erkennen und handeln (Ausmaß grob abschätzen, Soforthilfe leisten, Hilfe herbeirufen)',
			
id: _.uniqueId(),
              entries: [
                {
                  label: 'Basic-Life-Support mit und ohne technische Hilfsmittel bei Ausfall von Vitalfunktionen',
			
id: _.uniqueId(),
                },
                {
                  label: 'Zustände mit drohender vitaler Gefährdung erkennen und ggf. überbrückend versorgen (Zeichen der Atemnot oder Hypoxie, Thoraxschmerz, zunehmender Bewusstseinseinschränkung, hohes Fieber, arterielle Hypo- und Hypertension, Tachy- und Bradykardie, Hypo- und Hyperglykämie, Anurie, innere und äußere Blutung, Trauma und Verletzungen)',
			
id: _.uniqueId(),
                },
              ],
              hasGraph: true
            },
            {
              label: 'Fallvorstellung evidenz-basiert vornehmen und patientenbezogene Umsetzung einleiten (für PJ´ler bearbeitbare medizinische Problemstellungen)',
			
id: _.uniqueId(),
              entries: [
                {
                  label: 'Vorbereitung der Fallvorstellung (Suche nach bester verfügbarer Evidenz, Überprüfung der klinischen Relevanz und Anwendbarkeit für den einzelnen Patienten)',
			
id: _.uniqueId(),
                },
                {
                  label: 'Durchführung der Fallvorstellung (Strukturierte Vorstellung (z. B. Abteilungsbesprechungen, interne Fortbildungen); Anordnung der Änderungen entsprechend 1.2 „Diagnostikplan“ und 1.4 „Behandlungsplan“',
			
id: _.uniqueId(),
                },
              ]
            },
          ]
      },
  ]
}

const normalize = e => [{...e, done: _.random(1,6), confident: _.random(1,6), entries: (e.entries || []).map(e => e.id) }, _.flatMap(e.entries || [], normalize)]
export default _.flatMapDeep([praticalsTree], normalize)
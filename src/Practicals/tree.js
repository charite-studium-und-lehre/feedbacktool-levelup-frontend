import _ from 'lodash'

const praticalsTree = {
  entries: [
      {
          label: 'Betreuung von Patienten',
			done: _.random(1,5),
confident: _.random(1,5),
          entries: [
              {
                label: 'Anamnese erheben, körperliche Untersuchung durchführen und Ergebnisse strukturiert zusammenfassen',
			done: _.random(1,5),
confident: _.random(1,5),
                entries: [
                    {
                      label: 'Vollständige oder fokussierte Anamnese erheben und körperliche Untersuchung  durchführen (entsprechend Situationsanforderung)',
			done: _.random(1,5),
confident: _.random(1,5),
                    },
                    {
                      label: 'Zusammenstellen von Vorbefunden, Dokumenten, Medikation, ggf. Rücksprache mit behandelnden Ärzten oder Familienangehörigen',
			done: _.random(1,5),
confident: _.random(1,5),
                    },
                    {
                      label: 'Strukturierte Dokumentation in Patientenakte, einschließlich Synthese von Diagnosen/Arbeitsdiagnosen und  wesentlicher Differentialdiagnosen',
			done: _.random(1,5),
confident: _.random(1,5),
                    },

                ],
                hasGraph: true
              },
              {
                label: 'Diagnostischen Arbeitsplan erstellen und Umsetzung einleiten',
			done: _.random(1,5),
confident: _.random(1,5),
                entries: [
                  {
                    label: 'Eintrag für die Basisdiagnostik in Patientenkurve vorschreiben (Gegenzeichnung Arzt)',
			done: _.random(1,5),
confident: _.random(1,5),
                  },
                  {
                    label: 'Plan für die patientenspezifische Diagnostik entwerfen (Abstimmung mit Arzt)',
			done: _.random(1,5),
confident: _.random(1,5),
                  },
                  {
                    label: 'Plan in Patientenkurve eintragen und diagnostische Anforderungsformulare ausfüllen (Gegenzeichnung Arzt)',
			done: _.random(1,5),
confident: _.random(1,5),
                  },
                ]
              },
              {
                label: 'Untersuchungsergebnisse interpretieren und weiterführende Schritte einleiten',
			done: _.random(1,5),
confident: _.random(1,5),
                entries: [
                  {
                    label: 'Ergebnisse der Basisdiagnostik und häufiger Untersuchungen sichten und interpretieren',
			done: _.random(1,5),
confident: _.random(1,5),
                  },
                  {
                    label: 'Änderungen in Diagnostik und Therapie vorschlagen (Abstimmung mit Arzt)',
			done: _.random(1,5),
confident: _.random(1,5),
                  },
                  {
                    label: 'Ergebnisse in Patientenkurve eintragen und ggf. Anforderungsformulare ausfüllen (Gegenzeichnung Arzt)',
			done: _.random(1,5),
confident: _.random(1,5),
                  },
                ],
                hasGraph: true
              },          
              {
                label: 'Behandlungsplan erstellen und die Umsetzung einleite',
			done: _.random(1,5),
confident: _.random(1,5),
                entries: [
                  {
                    label: 'Eintrag für die allgemeine Therapie in Patientenkurve vorschreiben (Gegenzeichnung Arzt)',
			done: _.random(1,5),
confident: _.random(1,5),
                  },
                  {
                    label: 'Plan für die patientenspezifische Therapie entwerfen (Abstimmung mit Arzt)',
			done: _.random(1,5),
confident: _.random(1,5),
                  },
                  {
                    label: ' Plan in Patientenkurve eintragen und therapeutische Anforderungsformulare ausfüllen (Gegenzeichnung Arzt)',
			done: _.random(1,5),
confident: _.random(1,5),
                  },
                ],
                hasGraph: true
              },

          ]
      },
      {
          label: 'Ärztliche Prozeduren',
			done: _.random(1,5),
confident: _.random(1,5),
          entries: [
            {
              label: 'Venös Blut entnehmen',
			done: _.random(1,5),
confident: _.random(1,5),
            },
            {
              label: 'Venenverweilkanüle legen ',
			done: _.random(1,5),
confident: _.random(1,5),
            },
            {
              label: 'Blutkultur entnehmen',
			done: _.random(1,5),
confident: _.random(1,5),
            },
            {
              label: 'Abstriche (Mund, Nase, Wunde, anal oder urogenital) vornehmen',
			done: _.random(1,5),
confident: _.random(1,5),
            },
            {
              label: 'Infusion anlegen',
			done: _.random(1,5),
confident: _.random(1,5),
            },
            {
              label: '12-Kanal EKG schreiben',
			done: _.random(1,5),
confident: _.random(1,5),
            },
            {
              label: 'Einfachen Verband anlegen oder wechseln ',
			done: _.random(1,5),
confident: _.random(1,5),
            },
            {
              label: 'Rezept vorschreiben (Gegenzeichnung Arzt) ',
			done: _.random(1,5),
confident: _.random(1,5),
            },
          ]
      },
      {
          label: 'Kommunikation mit Patienten',
			done: _.random(1,5),
confident: _.random(1,5),
          entries: [
            {
              label: 'Einverständnis für Untersuchungen und Prozeduren einholen (Patienten über Ablauf, Nutzen, Risiken, Alternativen informieren)',
			done: _.random(1,5),
confident: _.random(1,5),
              entries: [
                {
                  label: 'Nicht-unterschreibungspflichtige Untersuchungen/Prozeduren (z.B. Blutentnahmen, Blasenkatheter, Magensonde, Röntgen-Untersuchungen)',
			done: _.random(1,5),
confident: _.random(1,5),
                },
                {
                  label: 'Unterschriftspflichtige Prozeduren mit Gegenzeichung des Arztes (Gabe von Erythrozyten, Thrombozyten oder Plasmapräparaten)',
			done: _.random(1,5),
confident: _.random(1,5),
                },
              ],
              hasGraph: true
            },
            {
              label: 'Patienten informieren und beraten (häufige Beratungsanlässe und Krankheitsbilder)',
			done: _.random(1,5),
confident: _.random(1,5),
              entries: [
                {
                  label: 'Informieren des Patienten (allgemeine Information zu Art der Beschwerden, dem Krankheitsbild und der Diagnostik und Therapie',
			done: _.random(1,5),
confident: _.random(1,5),
                },
                {
                  label: 'Informieren des Patienten (allgemeine Information zu Art der Beschwerden, dem Krankheitsbild und der Diagnostik und Therapie; spezifische Informationen zum Patienten hierzu wie mit dem Arzt abgestimmt)',
			done: _.random(1,5),
confident: _.random(1,5),
                },
              ],
              hasGraph: true
            },
          ]
      },
      {
          label: 'Kommunikation und Zusammenarbeit mit Kollegen',
			done: _.random(1,5),
confident: _.random(1,5),
          entries: [
            {
              label: 'Krankengeschichte eines Patienten vorstellen (strukturiert, entsprechend Zielpersonen und Situationserfordernissen)',
			done: _.random(1,5),
confident: _.random(1,5),
              entries: [
                {
                  label: 'Krankengeschichte in Visite vorstellen  ',
			done: _.random(1,5),
confident: _.random(1,5),
                },
                {
                  label: 'Krankengeschichte in Besprechungen vorstellen (z.B. Röntgen-Demo, Pathokonferenz, Teambesprechungen)',
			done: _.random(1,5),
confident: _.random(1,5),
                },
              ],
              hasGraph: true
            },
            {
              label: 'Patientenübergabe vornehmen oder entgegennehmen (strukturiert, entsprechend Zielpersonen und Situationserfordernissen)',
			done: _.random(1,5),
confident: _.random(1,5),
              entries: [
                {
                  label: 'Patientenübergabe an/von Ärzte(n) durchführen (z.B. Dienstübergaben)',
			done: _.random(1,5),
confident: _.random(1,5),
                },
                {
                  label: 'Patientenübergabe an/von nicht-ärztliche(n) Mitarbeiter(n) durchführen',
			done: _.random(1,5),
confident: _.random(1,5),
                },
              ],
              hasGraph: true
            },
            {
              label: 'Patientenbericht verfassen und übermitteln (strukturiert, entsprechend der Abstimmung mit dem supervidierenden Arzt zur medizinischen Versorgung des Patienten)',
			done: _.random(1,5),
confident: _.random(1,5),
              entries: [
                {
                  label: 'Vorläufigen Patientenbericht vorschreiben und fertigstellen (Abstimmung und Gegenzeichnung Arzt)',
			done: _.random(1,5),
confident: _.random(1,5),
                },
                {
                  label: 'Abschließenden Patientenbericht vorschreiben und fertigstellen (Abstimmung und Gegenzeichnung  Arzt)',
			done: _.random(1,5),
confident: _.random(1,5),
                },
                {
                  label: 'Übermittelung von Patientenbericht an Zielbereich bzw. dessen Veranlassung',
			done: _.random(1,5),
confident: _.random(1,5),
                },
              ],
              hasGraph: true
            },
          ]
      },
      {
          label: 'Weitere ärztliche professionelle Tätigkeit',
			done: _.random(1,5),
confident: _.random(1,5),
          entries: [
            {
              label: 'Notfallsituationen erkennen und handeln (Ausmaß grob abschätzen, Soforthilfe leisten, Hilfe herbeirufen)',
			done: _.random(1,5),
confident: _.random(1,5),
              entries: [
                {
                  label: 'Basic-Life-Support mit und ohne technische Hilfsmittel bei Ausfall von Vitalfunktionen',
			done: _.random(1,5),
confident: _.random(1,5),
                },
                {
                  label: 'Zustände mit drohender vitaler Gefährdung erkennen und ggf. überbrückend versorgen (Zeichen der Atemnot oder Hypoxie, Thoraxschmerz, zunehmender Bewusstseinseinschränkung, hohes Fieber, arterielle Hypo- und Hypertension, Tachy- und Bradykardie, Hypo- und Hyperglykämie, Anurie, innere und äußere Blutung, Trauma und Verletzungen)',
			done: _.random(1,5),
confident: _.random(1,5),
                },
              ],
              hasGraph: true
            },
            {
              label: 'Fallvorstellung evidenz-basiert vornehmen und patientenbezogene Umsetzung einleiten (für PJ´ler bearbeitbare medizinische Problemstellungen)',
			done: _.random(1,5),
confident: _.random(1,5),
              entries: [
                {
                  label: 'Vorbereitung der Fallvorstellung (Suche nach bester verfügbarer Evidenz, Überprüfung der klinischen Relevanz und Anwendbarkeit für den einzelnen Patienten)',
			done: _.random(1,5),
confident: _.random(1,5),
                },
                {
                  label: 'Durchführung der Fallvorstellung (Strukturierte Vorstellung (z. B. Abteilungsbesprechungen, interne Fortbildungen); Anordnung der Änderungen entsprechend 1.2 „Diagnostikplan“ und 1.4 „Behandlungsplan“',
			done: _.random(1,5),
confident: _.random(1,5),
                },
              ]
            },
          ]
      },
  ]
}

export default praticalsTree
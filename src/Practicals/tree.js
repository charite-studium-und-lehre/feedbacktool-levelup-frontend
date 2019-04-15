const praticalsTree = {
  entries: [
      {
          label: 'Betreuung von Patienten',
          entries: [
              {
                label: 'Anamnese erheben, körperliche Untersuchung durchführen und Ergebnisse strukturiert zusammenfassen',
                entries: [
                    {
                      label: 'Vollständige oder fokussierte Anamnese erheben und körperliche Untersuchung  durchführen (entsprechend Situationsanforderung)',
			                done: 3,
                      confident: 3,
                    },
                    {
                      label: 'Zusammenstellen von Vorbefunden, Dokumenten, Medikation, ggf. Rücksprache mit behandelnden Ärzten oder Familienangehörigen',
			                done: 2,
                      confident: 3,
                    },
                    {
                      label: 'Strukturierte Dokumentation in Patientenakte, einschließlich Synthese von Diagnosen/Arbeitsdiagnosen und  wesentlicher Differentialdiagnosen',
			                done: 1,
                      confident: 2,
                    },

                ],
                hasGraph: true
              },
              {
                label: 'Diagnostischen Arbeitsplan erstellen und Umsetzung einleiten',
                entries: [
                  {
                    label: 'Eintrag für die Basisdiagnostik in Patientenkurve vorschreiben (Gegenzeichnung Arzt)',
			              done: 1,
                    confident: 1,
                  },
                  {
                    label: 'Plan für die patientenspezifische Diagnostik entwerfen (Abstimmung mit Arzt)',
		  	            done: 0,
                    confident: 0,
                  },
                  {
                    label: 'Plan in Patientenkurve eintragen und diagnostische Anforderungsformulare ausfüllen (Gegenzeichnung Arzt)',
			              done: 0,
                    confident: 0,
                  },
                ],
                hasGraph: true
              },
              {
                label: 'Untersuchungsergebnisse interpretieren und weiterführende Schritte einleiten',
                entries: [
                  {
                    label: 'Ergebnisse der Basisdiagnostik und häufiger Untersuchungen sichten und interpretieren',
			              done: 1,
                    confident: 2,
                  },
                  {
                    label: 'Änderungen in Diagnostik und Therapie vorschlagen (Abstimmung mit Arzt)',
			              done: 1,
                    confident: 2,
                  },
                  {
                    label: 'Ergebnisse in Patientenkurve eintragen und ggf. Anforderungsformulare ausfüllen (Gegenzeichnung Arzt)',
			              done: 0,
                    confident: 2,
                  },
                ],
                hasGraph: true
              },          
              {
                label: 'Behandlungsplan erstellen und die Umsetzung einleite',
                entries: [
                  {
                    label: 'Eintrag für die allgemeine Therapie in Patientenkurve vorschreiben (Gegenzeichnung Arzt)',
			              done: 0,
                    confident: 2,
                  },
                  {
                    label: 'Plan für die patientenspezifische Therapie entwerfen (Abstimmung mit Arzt)',
			              done: 0,
                    confident: 2,
                  },
                  {
                    label: ' Plan in Patientenkurve eintragen und therapeutische Anforderungsformulare ausfüllen (Gegenzeichnung Arzt)',
			              done: 0,
                    confident: 2,
                  },
                ],
                hasGraph: true
              },

          ]
      },
      {
          label: 'Ärztliche Prozeduren',
          entries: [
            {
              label: 'Venös Blut entnehmen',
			        done: 4,
              confident: 4,
            },
            {
              label: 'Venenverweilkanüle legen ',
			        done:1,
              confident: 3,
            },
            {
              label: 'Blutkultur entnehmen',
			        done: 2,
              confident: 2,
            },
            {
              label: 'Abstriche (Mund, Nase, Wunde, anal oder urogenital) vornehmen',
			        done: 0,
              confident: 1,
            },
            {
              label: 'Infusion anlegen',
			        done: 2,
              confident: 2,
            },
            {
              label: '12-Kanal EKG schreiben',
			        done: 2,
              confident: 2,
            },
            {
              label: 'Einfachen Verband anlegen oder wechseln ',
			        done: 3,
              confident: 3,
            },
            {
              label: 'Rezept vorschreiben (Gegenzeichnung Arzt) ',
			        done: 0,
              confident: 1,
            },
          ]
      },
      {
          label: 'Kommunikation mit Patienten',
          entries: [
            {
              label: 'Einverständnis für Untersuchungen und Prozeduren einholen (Patienten über Ablauf, Nutzen, Risiken, Alternativen informieren)',
              entries: [
                {
                  label: 'Nicht-unterschreibungspflichtige Untersuchungen/Prozeduren (z.B. Blutentnahmen, Blasenkatheter, Magensonde, Röntgen-Untersuchungen)',
                  done: 1,
                  confident: 1,
                },
                {
                  label: 'Unterschriftspflichtige Prozeduren mit Gegenzeichung des Arztes (Gabe von Erythrozyten, Thrombozyten oder Plasmapräparaten)',
                  done: 1,
                  confident: 1,
                },
              ],
              hasGraph: true
            },
            {
              label: 'Patienten informieren und beraten (häufige Beratungsanlässe und Krankheitsbilder)',
              entries: [
                {
                  label: 'Informieren des Patienten (allgemeine Information zu Art der Beschwerden, dem Krankheitsbild und der Diagnostik und Therapie',
                  done: 1,
                  confident: 2,
                },
                {
                  label: 'Informieren des Patienten (allgemeine Information zu Art der Beschwerden, dem Krankheitsbild und der Diagnostik und Therapie; spezifische Informationen zum Patienten hierzu wie mit dem Arzt abgestimmt)',
                  done: 1,
                  confident: 2,
                },
              ],
              hasGraph: true
            },
          ]
      },
      {
          label: 'Kommunikation und Zusammenarbeit mit Kollegen',
          entries: [
            {
              label: 'Krankengeschichte eines Patienten vorstellen (strukturiert, entsprechend Zielpersonen und Situationserfordernissen)',
              entries: [
                {
                  label: 'Krankengeschichte in Visite vorstellen  ',
                  done: 0,
                  confident: 1,
                },
                {
                  label: 'Krankengeschichte in Besprechungen vorstellen (z.B. Röntgen-Demo, Pathokonferenz, Teambesprechungen)',
                  done: 0,
                  confident: 1,
                },
              ],
              hasGraph: true
            },
            {
              label: 'Patientenübergabe vornehmen oder entgegennehmen (strukturiert, entsprechend Zielpersonen und Situationserfordernissen)',
              entries: [
                {
                  label: 'Patientenübergabe an/von Ärzte(n) durchführen (z.B. Dienstübergaben)',
                  done: 0,
                  confident: 0,
                },
                {
                  label: 'Patientenübergabe an/von nicht-ärztliche(n) Mitarbeiter(n) durchführen',
                  done: 0,
                  confident: 0,
                },
              ],
              hasGraph: true
            },
            {
              label: 'Patientenbericht verfassen und übermitteln (strukturiert, entsprechend der Abstimmung mit dem supervidierenden Arzt zur medizinischen Versorgung des Patienten)',
              entries: [
                {
                  label: 'Vorläufigen Patientenbericht vorschreiben und fertigstellen (Abstimmung und Gegenzeichnung Arzt)',
                  done: 0,
                  confident: 2,
                },
                {
                  label: 'Abschließenden Patientenbericht vorschreiben und fertigstellen (Abstimmung und Gegenzeichnung  Arzt)',
                  done: 0,
                  confident: 2,
                },
                {
                  label: 'Übermittelung von Patientenbericht an Zielbereich bzw. dessen Veranlassung',
                  done: 0,
                  confident: 2,
                },
              ],
              hasGraph: true
            },
          ]
      },
      {
          label: 'Weitere ärztliche professionelle Tätigkeit',
          entries: [
            {
              label: 'Notfallsituationen erkennen und handeln (Ausmaß grob abschätzen, Soforthilfe leisten, Hilfe herbeirufen)',
              entries: [
                {
                  label: 'Basic-Life-Support mit und ohne technische Hilfsmittel bei Ausfall von Vitalfunktionen',
                  done: 1,
                  confident: 2,
                },
                {
                  label: 'Zustände mit drohender vitaler Gefährdung erkennen und ggf. überbrückend versorgen (Zeichen der Atemnot oder Hypoxie, Thoraxschmerz, zunehmender Bewusstseinseinschränkung, hohes Fieber, arterielle Hypo- und Hypertension, Tachy- und Bradykardie, Hypo- und Hyperglykämie, Anurie, innere und äußere Blutung, Trauma und Verletzungen)',
                  done: 2,
                  confident: 2,
                },
              ],
              hasGraph: true
            },
            {
              label: 'Fallvorstellung evidenz-basiert vornehmen und patientenbezogene Umsetzung einleiten (für PJ´ler bearbeitbare medizinische Problemstellungen)',
              entries: [
                {
                  label: 'Vorbereitung der Fallvorstellung (Suche nach bester verfügbarer Evidenz, Überprüfung der klinischen Relevanz und Anwendbarkeit für den einzelnen Patienten)',
                  done: 0,
                  confident: 1,
                },
                {
                  label: 'Durchführung der Fallvorstellung (Strukturierte Vorstellung (z. B. Abteilungsbesprechungen, interne Fortbildungen); Anordnung der Änderungen entsprechend 1.2 „Diagnostikplan“ und 1.4 „Behandlungsplan“',
                  done: 0,
                  confident: 1,
                },
              ]
            },
          ]
      },
  ]
}

export default praticalsTree
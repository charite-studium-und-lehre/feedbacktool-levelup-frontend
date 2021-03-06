export default {   
    "id": 1,
    "token": "123",
    "email": "email@charite.de",
    "name": "Frau Musterfrau",
    "datum": "2019-11-05T10:00:00Z",
    "studiName": "Max Mustermann",
    "studiEmail": "mustermann@charite.de",
    "kommentar": "Test Kommentar",
    "angefragteTaetigkeiten": "KIT M37",
    "epas": [ 
       { 
          "id":100,
          "beschreibung":"Betreuung von Patienten",
          "parentId":null,
          "istBlatt":false
       },
       { 
          "id":200,
          "beschreibung":"\u00c4rztliche Prozeduren",
          "parentId":null,
          "istBlatt":false
       },
       { 
          "id":300,
          "beschreibung":"Kommunikation mit Patienten",
          "parentId":null,
          "istBlatt":false
       },
       { 
          "id":400,
          "beschreibung":"Kommunikation und Zusammenarbeit mit Kollegen",
          "parentId":null,
          "istBlatt":false
       },
       { 
          "id":500,
          "beschreibung":"Weitere \u00e4rztliche professionelle T\u00e4tigkeit",
          "parentId":null,
          "istBlatt":false
       },
       { 
          "id":110,
          "beschreibung":"Anamnese erheben, k\u00f6rperliche Untersuchung durchf\u00fchren und Ergebnisse strukturiert zusammenfassen",
          "parentId":100,
          "istBlatt":false
       },
       { 
          "id":120,
          "beschreibung":"Diagnostischen Arbeitsplan erstellen und Umsetzung einleiten",
          "parentId":100,
          "istBlatt":false
       },
       { 
          "id":130,
          "beschreibung":"Untersuchungsergebnisse interpretieren und weiterf\u00fchrende Schritte einleiten",
          "parentId":100,
          "istBlatt":false
       },
       { 
          "id":140,
          "beschreibung":"Behandlungsplan erstellen und die Umsetzung einleiten",
          "parentId":100,
          "istBlatt":false
       },
       { 
          "id":310,
          "beschreibung":"Einverst\u00e4ndnis f\u00fcr Untersuchungen und Prozeduren einholen (Patienten \u00fcber Ablauf, Nutzen, Risiken, Alternativen informieren)",
          "parentId":300,
          "istBlatt":false
       },
       { 
          "id":320,
          "beschreibung":"Patienten informieren und beraten (h\u00e4ufige Beratungsanl\u00e4sse und Krankheitsbilder)",
          "parentId":300,
          "istBlatt":false
       },
       { 
          "id":410,
          "beschreibung":"Krankengeschichte eines Patienten vorstellen (strukturiert, entsprechend Zielpersonen und Situationserfordernissen)",
          "parentId":400,
          "istBlatt":false
       },
       { 
          "id":420,
          "beschreibung":"Patienten\u00fcbergabe vornehmen oder entgegennehmen (strukturiert, entsprechend Zielpersonen und Situationserfordernissen)",
          "parentId":400,
          "istBlatt":false
       },
       { 
          "id":430,
          "beschreibung":"Patientenbericht verfassen und \u00fcbermitteln (strukturiert, entsprechend der Abstimmung mit dem supervidierenden Arzt zur medizinischen Versorgung des Patienten)",
          "parentId":400,
          "istBlatt":false
       },
       { 
          "id":510,
          "beschreibung":"Notfallsituationen erkennen und handeln (Ausma\u00df grob absch\u00e4tzen, Soforthilfe leisten, Hilfe herbeirufen)",
          "parentId":500,
          "istBlatt":false
       },
       { 
          "id":520,
          "beschreibung":"Fallvorstellung evidenz-basiert vornehmen und patientenbezogene Umsetzung einleiten (f\u00fcr PJ\u00b4ler bearbeitbare medizinische Problemstellungen)",
          "parentId":500,
          "istBlatt":false
       },
       { 
          "id":111,
          "beschreibung":"Vollst\u00e4ndige oder fokussierte Anamnese erheben und k\u00f6rperliche Untersuchung durchf\u00fchren (entsprechend Situationsanforderung)",
          "parentId":110,
          "istBlatt":true
       },
       { 
          "id":112,
          "beschreibung":"Zusammenstellen von Vorbefunden, Dokumenten, Medikation, ggf. R\u00fccksprache mit behandelnden \u00c4rzten oder Familienangeh\u00f6rigen",
          "parentId":110,
          "istBlatt":true
       },
       { 
          "id":113,
          "beschreibung":"Strukturierte Dokumentation in Patientenakte, einschlie\u00dflich Synthese von Diagnosen/Arbeitsdiagnosen und wesentlicher Differentialdiagnosen",
          "parentId":110,
          "istBlatt":true
       },
       { 
          "id":121,
          "beschreibung":"Eintrag f\u00fcr die Basisdiagnostik in Patientenkurve vorschreiben (Gegenzeichnung Arzt)",
          "parentId":120,
          "istBlatt":true
       },
       { 
          "id":122,
          "beschreibung":"Plan f\u00fcr die patientenspezifische Diagnostik entwerfen (Abstimmung mit Arzt)",
          "parentId":120,
          "istBlatt":true
       },
       { 
          "id":123,
          "beschreibung":"Plan in Patientenkurve eintragen und diagnostische Anforderungsformulare ausf\u00fcllen (Gegenzeichnung Arzt)",
          "parentId":120,
          "istBlatt":true
       },
       { 
          "id":131,
          "beschreibung":"Ergebnisse der Basisdiagnostik und h\u00e4ufiger Untersuchungen sichten und interpretieren",
          "parentId":130,
          "istBlatt":true
       },
       { 
          "id":132,
          "beschreibung":"\u00c4nderungen in Diagnostik und Therapie vorschlagen (Abstimmung mit Arzt)",
          "parentId":130,
          "istBlatt":true
       },
       { 
          "id":133,
          "beschreibung":"Ergebnisse in Patientenkurve eintragen und ggf. Anforderungsformulare ausf\u00fcllen (Gegenzeichnung Arzt)",
          "parentId":130,
          "istBlatt":true
       },
       { 
          "id":141,
          "beschreibung":"Eintrag f\u00fcr die allgemeine Therapie in Patientenkurve vorschreiben (Gegenzeichnung Arzt)",
          "parentId":140,
          "istBlatt":true
       },
       { 
          "id":142,
          "beschreibung":"Plan f\u00fcr die patientenspezifische Therapie entwerfen (Abstimmung mit Arzt)",
          "parentId":140,
          "istBlatt":true
       },
       { 
          "id":143,
          "beschreibung":"Plan in Patientenkurve eintragen und therapeutische Anforderungsformulare ausf\u00fcllen (Gegenzeichnung Arzt)",
          "parentId":140,
          "istBlatt":true
       },
       { 
          "id":201,
          "beschreibung":"Ven\u00f6s Blut entnehmen",
          "parentId":200,
          "istBlatt":true
       },
       { 
          "id":202,
          "beschreibung":"Venenverweilkan\u00fcle legen",
          "parentId":200,
          "istBlatt":true
       },
       { 
          "id":203,
          "beschreibung":"Blutkultur entnehmen",
          "parentId":200,
          "istBlatt":true
       },
       { 
          "id":204,
          "beschreibung":"Abstriche (Mund, Nase, Wunde, anal oder urogenital) vornehmen",
          "parentId":200,
          "istBlatt":true
       },
       { 
          "id":205,
          "beschreibung":"Infusion anlegen",
          "parentId":200,
          "istBlatt":true
       },
       { 
          "id":206,
          "beschreibung":"12-Kanal EKG schreiben",
          "parentId":200,
          "istBlatt":true
       },
       { 
          "id":207,
          "beschreibung":"Einfachen Verband anlegen oder wechseln ",
          "parentId":200,
          "istBlatt":true
       },
       { 
          "id":208,
          "beschreibung":"Rezept vorschreiben (Gegenzeichnung Arzt)",
          "parentId":200,
          "istBlatt":true
       },
       { 
          "id":311,
          "beschreibung":"Nicht-unterschreibungspflichtige Untersuchungen/Prozeduren (z.B. Blutentnahmen, Blasenkatheter, Magensonde, R\u00f6ntgen-Untersuchungen)",
          "parentId":310,
          "istBlatt":true
       },
       { 
          "id":312,
          "beschreibung":"Unterschriftspflichtige Prozeduren mit Gegenzeichung des Arztes (Gabe von Erythrozyten, Thrombozyten oder Plasmapr\u00e4paraten)",
          "parentId":310,
          "istBlatt":true
       },
       { 
          "id":321,
          "beschreibung":"Informieren des Patienten (allgemeine Information zu Art der Beschwerden, dem Krankheitsbild und der Diagnostik und Therapie",
          "parentId":320,
          "istBlatt":true
       },
       { 
          "id":322,
          "beschreibung":"Informieren des Patienten (allgemeine Information zu Art der Beschwerden, dem Krankheitsbild und der Diagnostik und Therapie; spezifische Informationen zum Patienten hierzu wie mit dem Arzt abgestimmt)",
          "parentId":320,
          "istBlatt":true
       },
       { 
          "id":411,
          "beschreibung":"Krankengeschichte in Visite vorstellen ",
          "parentId":410,
          "istBlatt":true
       },
       { 
          "id":412,
          "beschreibung":"Krankengeschichte in Besprechungen vorstellen (z.B. R\u00f6ntgen-Demo, Pathokonferenz, Teambesprechungen)",
          "parentId":410,
          "istBlatt":true
       },
       { 
          "id":421,
          "beschreibung":"Patienten\u00fcbergabe an/von \u00c4rzte(n) durchf\u00fchren (z.B. Dienst\u00fcbergaben)",
          "parentId":420,
          "istBlatt":true
       },
       { 
          "id":422,
          "beschreibung":"Patienten\u00fcbergabe an/von nicht-\u00e4rztliche(n) Mitarbeiter(n) durchf\u00fchren",
          "parentId":420,
          "istBlatt":true
       },
       { 
          "id":431,
          "beschreibung":"Vorl\u00e4ufigen Patientenbericht vorschreiben und fertigstellen (Abstimmung und Gegenzeichnung Arzt)",
          "parentId":430,
          "istBlatt":true
       },
       { 
          "id":432,
          "beschreibung":"Abschlie\u00dfenden Patientenbericht vorschreiben und fertigstellen (Abstimmung und Gegenzeichnung Arzt)",
          "parentId":430,
          "istBlatt":true
       },
       { 
          "id":433,
          "beschreibung":"\u00dcbermittelung von Patientenbericht an Zielbereich bzw. dessen Veranlassung",
          "parentId":430,
          "istBlatt":true
       },
       { 
          "id":511,
          "beschreibung":"Basic-Life-Support mit und ohne technische Hilfsmittel bei Ausfall von Vitalfunktionen",
          "parentId":510,
          "istBlatt":true
       },
       { 
          "id":512,
          "beschreibung":"Zust\u00e4nde mit drohender vitaler Gef\u00e4hrdung erkennen und ggf. \u00fcberbr\u00fcckend versorgen (Zeichen der Atemnot oder Hypoxie, Thoraxschmerz, zunehmender Bewusstseinseinschr\u00e4nkung, hohes Fieber, arterielle Hypo- und Hypertension, Tachy- und Bradykardie, Hypo- und Hyperglyk\u00e4mie, Anurie, innere und \u00e4u\u00dfere Blutung, Trauma und Verletzungen)",
          "parentId":510,
          "istBlatt":true
       },
       { 
          "id":521,
          "beschreibung":"Vorbereitung der Fallvorstellung (Suche nach bester verf\u00fcgbarer Evidenz, \u00dcberpr\u00fcfung der klinischen Relevanz und Anwendbarkeit f\u00fcr den einzelnen Patienten)",
          "parentId":520,
          "istBlatt":true
       },
       { 
          "id":522,
          "beschreibung":"Durchf\u00fchrung der Fallvorstellung (Strukturierte Vorstellung (z. B. Abteilungsbesprechungen, interne Fortbildungen); Anordnung der \u00c4nderungen entsprechend 1.2 \u201eDiagnostikplan\u201c und 1.4 \u201eBehandlungsplan\u201c",
          "parentId":520,
          "istBlatt":true
       }
   ]
}
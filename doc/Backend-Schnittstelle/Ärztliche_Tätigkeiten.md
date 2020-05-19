## Ärztliche Tätigkeiten 

### Hole verfügbare ärztliche Tätigkeiten: 
`/api/epa/meine`

Erzeugt ein Array aus EPA-Kategorien, EPAs und Fremdeinschätzungen
	
```yaml
meineEPAs: Array

	id: <id>,
	beschreibung: <beschreibung>
	parentId: <parentID oder NULL>
	istBlatt: TRUE für EPAs, FALSE für Kategorien
	
	# nur für EPAs (Blätter):
	gemacht: <level= 0-5>
	zutrauen: <level= 0-5>
	fremdeinschaetzungen: array:
		fremdId: <id der Fremdeinschätzung>
		wert: <level= 0-5>
	
fremdbewertungen: Array
	id: <ID der Fremdeinschätzung| null, wenn Status=offen>	
	name: <Name des Bewerters>
	email: <Email des Prüfers>`
	anfrageTaetigkeiten: <Text der angefragen Tätigkeiten>`
	anfrageKommentar: <Kommentar der Anfrage>`
	datum: <ISO-Datum , z.B: "2018-10-31">
	status: <beantwortet|offen>
```

### Selbstbewertung an Server senden: 
[[/backend]][[/api/epas/<ID]]>

POST-Parameter

    {
    epaId: <Wert>,
    zutrauen: <Wert>,
    gemacht: <Wert>,
    }

**Success:** 

	//200 OK// 

**Error:** 

	//404 "NOT FOUND": //bei ungültiger ID.
	
	//400 "BAD REQUEST":// bei ungültigem Wert.


#### Beispiel 
https://levelup.charite.de/backend/api/epas/111
    {
	zutrauen: 2,
	gemacht: 1
	}

## Fremdbewertung 

### Anfrage zur Fremdbewertung an Server senden: 
`/api/epas/fremdbewertung/anfordern`

POST-Parameter
```
{
	fremdBewerterName: <String>,
	fremdBewerterEmail: <String>,
	angefragteTaetigkeiten: <String oder null>,
	kommentar:  <String oder null>,	
}
```

**Success:** 

	//201 CREATED//

**Error:** 

	//400 "BAD REQUEST":// bei ungültigem Wert.

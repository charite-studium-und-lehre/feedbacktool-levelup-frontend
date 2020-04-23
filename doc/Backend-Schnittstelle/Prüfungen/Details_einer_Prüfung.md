## Details einer Prüfung 

### GET-Aufruf: 
[[/backend/api/pruefungen/<studiPruefungsId]]>

success: HTTP-Code 200

fail: HTTP-Code 404 not found

#### Rückgabe: 
```

{
"typ": "<ptm|mc|station>",
"studiPruefungsId": "<ID">,
"name": "<Bezeichnung>",
"periodeCode": <siehe periodeCode>,
"periodeText": <z.B. 'WiSe2018 Haupttermin'>,
"zeitsemester" <z.B. 'WiSe 2018'>
"gesamtErgebnis": <Gesamtergebnis, exakt wie in -> "alle">
"ergebnisse": <PTM-Ergebnisse|MC-Ergebnisse|Stations-Ergebnisse>,
},
```

#### MC-Ergebnisse: 
```
{
   "ergebnisPunktzahl": <0..80>,
	"durchschnittsPunktzahl": <0..80>
	"maximalPunktzahl": <0..80>,
	"bestehensgrenzePunktzahl": <0..80>,
	"kohortenPunktzahlen": [ <0..80>, <0..80>, ... ],
	"module": [
		{
			"code": "<Nummer, z.B. 'M10'>",
			"titel": "<Name>",
			"ergebnisPunktzahl": <Punkte>,
			"durchschnittsPunktzahl": <Kohortendurchschnitt>,
			"maximalPunktzahl": <Anzahl Fragen>,
		},
	],
	"faecher": [
		{
			"code": "<z.B. 'ana' für Anatomie>",
			"titel": "<Name>",
			"ergebnisPunktzahl": <Punkte>,
			"gruppe": "<z.B. 'Vorklinische Fächer'>",
			"durchschnittsPunktzahl": <Kohortendurchschnitt>,
			"maximalPunktzahl": <Anzahl Fragen>,
		},
		],
	}
```

### PTM-Ergebnisse: 
```
	{
	"ergebnisRichtigPunktzahl": <Punktzahl 0..200>,
	"ergebnisFalschPunktzahl": <Punktzahl 0..200>,
	"ergebnisWeissnichtPunktzahl": <Punktzahl 0..200>,
	"maximalPunktzahl": <Punktzahl 0..200>,
	
	"durchschnittRichtigPunktzahl": <Punktzahl 0..200>,
	"durchschnittFalschPunktzahl": <Punktzahl 0..200>,
	"durchschnittWeissnichtPunktzahl": <Punktzahl 0..200>,


	
	"<faecher>": Array aus {
			
			"code": "<z.B. 'ana' für Anatomie>",
			

			
			"titel": "<Name>",
			"gruppe": "<z.B. 'Vorklinische Fächer'>",
			
			"ergebnisRichtigPunktzahl": <Punkte>,
			"ergebnisFalschPunktzahl": <Punkte>,
			"ergebnisWeissnichtPunktzahl": <Punkte>,
			
			"durchschnittRichtigPunktzahl": <Kohortendurchschnitt>,
			"durchschnittFalschPunktzahl": <Kohortendurchschnitt>,
			"durchschnittWeissnichtPunktzahl": <Kohortendurchschnitt>,
			
			"maximalPunktzahl": <Anzahl Fragen>,
			
	
		},
	
	
	}
```

### Stations-Ergebnisse: 
Bei vorklinischen Stationsprüfungen gibt es TYPISCHERWEISE 2 Ergebnisse pro Fach: 

//1 = Faktenwissen, 2= Zusammenhangswissen//

Manchmal gibt es aber auch nur 1 Ergebnis (dann gibt es ein Ergebnis ohne die Zahlen 1/2, z.B. im SoSe2016 Teil1 Klinik) 

Klinische Stationen sind dagegen Modulen zugeordnet. Hier gibt es immer nur 1 Ergebnis pro Modul

Es gibt nur eins der beiden Array "faecher" oder "stationsM`odule"`

```
{
"ergebnisProzentzahl": <Mein Gesamtergebnis 0.00 - 1.00>,
"durchschnittProzentzahl": <Kohorte Gesamtergebnis 0.00 - 1.00>

    
"faecher": [  #(nur wenn klinisch)
	{
	"code": "<z.B. 'ana' für Anatomie>",	
	"titel": "<Name>",
	"ergebnisProzentzahl": <Mein Ergebnis 0.00 - 1.00>,
	"durchschnittProzentzahl": <Kohortendurchschnitt 0.00 - 1.00>,
	"details" : Array, optional, nicht immer gegeben: {
		"code": "<z.B. 'fakten'>",	
		"titel": "<z.B. Faktenwissen>",
		"ergebnisProzentzahl": <Mein Ergebnis 0.00 - 1.00>,
		"durchschnittProzentzahl": <Kohortendurchschnitt 0.00 - 1.00>,
	},
	
	
	"stationsModule": [  #(nur wenn vorklinisch)
	# exakt wie bei Fächer. Hier gibt es aber immer nur 1 Ergebnis (keine Unterergebnisse)
```

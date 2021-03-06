## alle 

#### GET-Aufruf: 
`/backend/api/pruefungen`

success: HTTP-Code 200

GET-Aufruf ohne Parameter:

#### Rückgabe: 
```js
{
	"pruefungen": [
		{
            "name": "<Bezeichnung>",
            "typ": "<typ>",
            "format": "<mc|station|ptm>",
            "studiPruefungsId": "<ID">,
            "periodeCode": <siehe periodeCode>,
            "periodeText": <z.B. 'WiSe2018 Haupttermin'>,
            "gesamtErgebnis": <siehe PTM-Ergebnis|MC-Ergebnis|Stations-Ergebnis>
            "ergebnisse": <einzelergebnisse, siehe "Details einer Prüfung" >,
        },
    ]
}
```

#### periodeCode: 
 z.B. 201822 für WiSe2018, 2. Periode (= Wiederholungstermin)

PTM hat keine extra Perioden, also nur z.B. 20181


#### Typen: 
```
 "MC-Sem1",
 "MC-Sem2",
 "MC-Sem3",
 "MC-Sem4",
 "MC-Sem5",
 "MC-Sem6",
 "MC-Sem7",
 "MC-Sem8",
 "MC-Sem9",
 "MC-Sem10",
 "PTM",
 "Stat-1VK",
 "Stat-1K",
 "Stat-2",
 "Stat-3",
```

#### MC-Ergebnis: 
```js
{
	
	"ergebnisPunktzahl": <0..80>,
	"durchschnittsPunktzahl": <0..80>
	"maximalPunktzahl": <0..80>,
	"bestehensgrenzePunktzahl": <0..80>,
}

```
#### PTM-Ergebnis: 
```js
{
	
	"ergebnisRichtigPunktzahl": <Punktzahl 0..200>,
	"ergebnisFalschPunktzahl": <Punktzahl 0..200>,
	"ergebnisWeissnichtPunktzahl": <Punktzahl 0..200>,
	"maximalPunktzahl": <Punktzahl 0..200>,
	
	"durchschnittRichtigPunktzahl": <Punktzahl 0..200>,
	"durchschnittFalschPunktzahl": <Punktzahl 0..200>,
	"durchschnittWeissnichtPunktzahl": <Punktzahl 0..200>,
}

```

#### Stations-Ergebnis 
```js
{
	"ergebnisProzentzahl": <0.00 - 1.00>,
	"durchschnittProzentzahl": [0.00 - 1.00],
}

```
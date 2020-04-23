## Details- MC-Fragen und Antworten 

### GET-Aufruf: 
[[file:///C:/backend/api/pruefungen/%3CstudiPruefungsId%3E/fragen|/backend/api/pruefungen/<studiPruefungsId>/fragen]]

success: HTTP-Code 200

fail: HTTP-Code 404 (keine Fragen vorhanden)



#### Rückgabe: 
Achtung! Es kann passieren, dass nicht bekannt ist, was ein Studi ausgewählt hat. Dann ist "ausgewaehlt" für alle Fragen "false"

```
{
	studiPruefungsId: <Studi-Prüfungs ID>,

		"fragen": [
		{
			"id": <Wenn es sowas gibt?>,
			"durchschnittRichtig": <0.0 - 1.0>
			"text": "<Fragentext als Reintext>",
			"fach": {
				"code": "<wie in 'MC-Prüfungsdetails'>",
				"titel": "<wie in 'MC-Prüfungsdetails'>"
			},
			modul: "<Modulname als Text>",
			"antworten": [
				{
					"text": <Antwort-Text mit Buchstaben "a)">,
					"richtig": <true|false>,
					"ausgewaehlt": <true|false>,
				},
			]
		},
	],
```
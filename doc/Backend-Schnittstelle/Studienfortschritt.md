## Studienfortschritt 

#### GET-Aufruf: 
`/backend/api/studienfortschritt`

success: HTTP-Code 200

GET-Aufruf ohne Parameter.

Rückgabe:


```js
{"meilensteine": [
	{
		"code": "<int>",
		"kuerzel": "<kurzer String>">,
		"titel": "<langer string>",
		"fachsemester": <int 1-10>,
		"erfuellt": <bool>,
		"studiPruefungsId": <ID zur StudiPruefung oder leer>,
		"format": <mc|station|ptm> oder leer
	},
]}
```








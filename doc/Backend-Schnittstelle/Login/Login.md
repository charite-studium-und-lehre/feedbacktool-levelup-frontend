## Login 

Login über SSO.

## 1. Test vom Frontend, ob User eingeloggt ist 
#### Schnittstelle: 
GET-Aufruf an Server:
`/backend/api/stammdaten`

#### Rückgabe, wenn schon eingeloggt: 
HTTP-Code 200
```js
{
	"vorname": <vorname>,
	"nachname": <nachname>,
	"email": <email>,
	"stammdatenVorhanden": <true|false>,
	"istAdmin": <true|false>
}
```


#### Wenn "stammdatenVorhanden" true ist 
Das Frontend kann den Benutzer als vollständig eingeloggt betrachten und auf das Dashboard weiterleiten

#### Wenn "stammdatenVorhanden" false ist 
Das Frontend muss den User auf die Seite [[+Erster Login]] weiterleiten.


#### Wenn noch nicht eingeloggt: 
HTTP-Code 401 "Unauthorized" 

#### Backend zum Login auffordern 
Der Nutzer muss im Frontend an folgende URL weitergeleitet werden (kein API/Ajax-Aufruf!)
https://levelup.charite.de/login

#### Erfolg: 
Cookie wird serverseitig vom Backend gesetzt (als "angemeldet").
Es erfolgt eine Weiterleitung vom Backend auf https://levelup.charite.de/app/loggedIn

Von dort aus muss die App eine erneute Abfrage auf 1. starten 
`/backend/api/isLoggedIn`

Nun sollte das Ergebnis 200 sein.


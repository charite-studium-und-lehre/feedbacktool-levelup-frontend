## Erster Login 

Voraussetzung: User muss über SSO eingeloggt sein. Siehe [[Login]]

Formular:
* Matrikelnummer
* Vorname (wird nur dargestellt aus Login-Daten vom Server). Siehe [[Login]]
* Nachname (wird nur dargestellt aus Login-Daten vom Server)

Schnittstelle:
`/backend/api/stammdaten`

#### POST-Aufruf: 
{
	"matrikelnummer" : <matrikelnummer>,
}

#### Erfolg: 
HTTP-Code 200

-> Backend: dem Benutzer wird ein Login-hash hinzugefügt, damit der Benutzer diese Seite nur einmal ausfüllen muss.

Der Nutzer kann nun als vollständig eingeloggt betrachtet und auf das Dashboard weitergeleitet werden.

#### Fail: 
HTTP-Code: 400 (Falsche Parameter, z.B. matrikelnummer vergessen)

HTTP-Code: 404: Parameter sind richtig, aber es wurde kein Studi gefunden, auf den Name/Matrikel-Hash passt.


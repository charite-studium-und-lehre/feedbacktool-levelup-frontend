## Logout 

### 1. Logout aus LevelUp UND Charité-SSO 

Nutzer wird im Frontend weitergeleitet auf

`/backend/logout`

(Kein Api-Aufruf)

#### Ergebnis: 
Der Nutzer sieht die Charité-Seite zur Bestätigung des Logouts.


#### 2. Logout nur aus LevelUp 
Nur zu Testzwecken?

API-Call nach 
`/backend/api/levelupLogout`

Ergebnis: User ist aus Levelp ausgeloggt, wäre nach klick auf Login sofort wieder eingeloggt.

HTTP-Code 200

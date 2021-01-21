### Refactoring - Grober Ablaufplan

##### Wie dieser Ablaufplan gedacht ist

Die folgenden Schritte sind als eine Leitlinie zu verstehen. Sie sind dazu entworfen, 
die Lesbarkeit des Codes zu verbessern. In welchen Verzeichnissen doer Dateien welche 
Schritte angewendet werden sollen, muss für jeden Code-Teil einzeln geprüft werden, 
manche Schritte sind vielleicht schon als umgesetzt zu betrachten. 

Es macht Sinn, die Schritte in der beschriebenen Reihenfolge zu machen, weil vor allem 
die letzten Schritte schon ein tiefes Verständnis der Architektur und inhaltlicher 
Funktionalität voraussetzen. 

Generell: Nie zu viel auf einmal Refactoren! Max. 10 Dateien auf einmal ist sinnvoll. 
Ticket im Ticketsystem anlegen, und darin die Pfade der Dateien, die refactored werden 
sollen, festschreiben. Außerdem sollten in dem Ticket die Schritte festgeschrieben sein,
welche gemacht werden.  

### 1. Schritt: Whitespace im Code hinzufügen

Dazu für eine Datei erst einmal autoformat mit dem LLP-style (siehe Doku) ausführen
Dann falls nötig noch manuell Zeilenumbrüche machen, z.B. für diese Dinge, die meistens nicht in einer Zeile stehen sollten: 
- mehr als einfache 3 array items 
  ```
  [1, 2, 3, 4]
  ``` 
  sollte ungefähr so aussehen:
  ```
  [ 1, 
    2, 
    3,
    4 ]
  ``` 

- mehr als 1 object property
  ```
  {a: A, b: B} 
  ```
  sollte ungefähr so aussehen:
  ```
  {
    a: A,
    b: B
  }
  ```
- mehr als 2 Methoden-Namen (z.B. als parameter für _.flow und _compose)
  ```
    subject => _.flow([ getSubjects, findSubject(subject) ]) 
  ```
    sollte ungefähr so aussehen:
  ```
  subject => _.flow([
                getSubjects, 
                findSubject(subject) ]) 
  ```

### 2. Schritt: Trennung von exports und Hilfs-Code bei zu langer Datei (ungefähr ab 50 Zeilen)

Angenommen, eine Datei namens `VeryCleverFile.js` hat diese Deklarationen in dieser Reihenfolge auf oberster Ebene:
```
let varA
const varB
export const varC
const funcD // Hilfs-Konstante für funcE
let funcE
export funcF
export const varG
function h
  ```
Und außerdem beinhaltet VeryCleverFile.js noch 30 weitere Deklarationen, jeweils inner halb der Variablen (z.B. als 
object properties) und Methoden (z.B. als lokale Variablen). 

Dann sollte `VeryCleverFile.js` verkürzt werden, und die nicht exportierten Variablen sollten in eine neue Datei 
`VeryCleverFileUtils.js` verschoben werden. Das sieht dann ungefähr so aus: 

`VeryCleverFile.js`
  ```
import {varA, varB, funcE, h} from './VeryCleverFileUtils'
export const varC
export funcF
export const varG
  ```
`VeryCleverFileUtils.js`
  ```
export let varA
export const varB
const funcD
export let funcE
export function h
  ```
Was bringt das? Wir können besser sehen, wofür `VeryCleverFile.js` zuständig ist, und können besser unterscheiden, was 
Implementierungsdetails sind, denn die sind jetzt in der Utils-Datei, und wir wissen durch den selben präfix, dass 
`VeryCleverFile.js` und `VeryCleverFileUtils.js` zusammen gehören. 


### 3. Schritt: Umbenennen von unverständlichen Namen

Namen mit weniger als 4 Buchstaben sind nie verständlich.

Jeder Name steht in einem Kontext. Z.B. ist eine Variable Teil einer Datei, die wiederum in einem Verzeichnis liegt. 
Der Name der Variable soll verständlich sein, wenn man die Namen der Datei und des Verzeichnisses gelesen hat. Außerdem 
haben wir noch das Glossar in der Doku, das gehört auch zum Kontext jedes Namens im Code. 

Wenns hilft, dürfen Namen gerne bis zu einer halben Code-Zeile lang sein, vor allem Zwischenergebnisse bei der 
Umwandlung von einer Datenstruktur in eine andere.


### 4. Schritt: Types-Definition

Um diesen Schritt zu verstehen, muss man erst einmal prinzipiell verstanden haben, wie Redux-Stores funktionieren, 
d.h. was die Begriffe store, reducer, action, type, action creator bedeuten, und wie sie miteinander zusammen hängen. 
Gute Quelle dazu: 

https://medium.com/javascript-in-plain-english/the-only-introduction-to-redux-and-react-redux-youll-ever-need-8ce5da9e53c6 

(falls der Link nicht geht, ist der Artikel in PDF gedruckt hier: [Redux-Explanation.pdf](./Redux-Explanation.pdf) )

Bei uns im LevelUp Frontend ist im aktuellen Stand (23.9.2020) eine etwas andere Architektur genutzt, als in dem 
Artikel beschrieben. Die Trennung zwischen action, action creator und reducer scheint nicht klar umgesetzt zu sein. 
Types werden größtenteils (d.h. im noch nicht refactorten code) nicht deklariert und nicht exportiert. Stattdessen 
werden "BaseStore"s zum erstellen von neuen Store-Teilen genutzt. Bis sich mal jemand die Zeit nimmt, diese 
LevelUp-spezifischen Verknüpfungen von action, reducer, BesaStore´s usw. wirklich in die Tiefe zu verstehen, wird die 
Stores-Architektur so bleiben wie sie ist. 

Wenn sich dann jemand mal die Zeit nimmt, sollte die Architektur nicht direkt 
geändert werden, sondern zuerst dokumentiert und dann Änderungsvorschläge mit allen Team-Mitgliedern besprochen werden. 

Eine Kleinigkeit ist aber sofort machbar, verändert den Code in Richtung der Redux-Architektur und erhört die Lesbarkeit 
des Codes ein wenig: 

Die Labels in der case-Anweisung eines Reducers sollen als Konstanten extrahiert und exportiert werden. 
Sie sind die types. Der Name des types sollte die Form haben TYPE_ identifier in Großbuchstaben + Endung. Beispiel:

  ```
export const reducer = (state = {}, action) => {
    switch(action.type) {
        case `${identifier.toUpperCase()}_DATA_FETCHED`:
  ```
sollte ungefähr so aussehen:
  ```
export const TYPE_QUESTIONS_DATA_FETCHED = identifier.toUpperCase() + '_DATA_FETCHED'

export const reducer = (state = {}, action) => {
    switch (action.type) {
        case TYPE_QUESTIONS_DATA_FETCHED:
  ```

### 5. Schritt: Lodash-basierten Code umschreiben in ES6 

Der aktuelle Stil des Codes hat die Eigenschaft, Daten schrittweise zu verarbeiten (meistens in andere Datenstrukturen 
umzuwandeln bzw. statistische Eigenschaften der Daten in einer neuen Struktur zwischenzuspreichern) ohne die 
Zwischenergebnisse zu benennen. Lodash-Funktionalität wird dazu genutzt, mehrere Schritte in nur einer Zeile zusammen zu
 fassen. Die Lodash-Nomenklatur und das -Syntaxkonzept unterscheiden sich von ES6. Dadurch ist der Code zwar kurz, aber 
 nicht mehr nachvollziehbar. 

Der Code sollte keine Lodash-Abhängigkeiten haben. Zwischenergebnisse sollen in Variablen mit verständlichen Namen 
abgebildet sein. 

Ausnahme: die Verwendung der Math und Number Bibliotheken von Lodash muss nicht refactored werden.

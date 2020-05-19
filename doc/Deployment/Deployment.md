## Deployment 

ToDo: Deployment mit Docker

### 1. Durch push auf GitHub

Es findet an der Charité ein Deployment statt auf:

`/var/www/levelup/<branch>`

### 2. Manuell

Deplayment auf Server.

Linux/Max: SSH-Konfiguration empfohlen

#### A. Verbinden zum Server: 
`ssh s-mfal-feed-ext`

#### B1. Deployment Produktiv 

```shell script
cd /var/www/levelup/master/
./build.sh
```

-> erreichbar unter 
http://s-mfal-feed-ext.charite.de


#### B2. Deployment Test 

```shell script
cd /var/www/levelup/<develop|test1|test2|test3>
```

eventuell Branch wecheln mit "git checkout <branch>

```shell script
./build.sh
```



#### 3. Nach Deployment 
Browser muss Seite neu laden, z.B. über Strg-Shift-R

->erreichbar unter 
- http://levelup.charite.de/app
- http://levelup.charite.de/app-develop
- http://levelup.charite.de/app-test1
- http://levelup.charite.de/app-test2
- http://levelup.charite.de/app-test3
- https://levelup.charite.de/backend/api/meilensteine
- https://levelup.charite.de/backend/sso
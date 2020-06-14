## Feedback-Bot 

## Git-Repository: 
ssh://levelup/var/git/feedbackbot.git

TODO: Umziehen auf GitHub

## Installation der Abhängigkeiten 
Man brauch pm2 als Prozessmanager für Node.

`yarn global add pm2`

`sudo pm2 startup systemd` (Für Systeme mit systemd (Linux))

## Installation 
Checkout auf dem Server auf `/var/www/feedbackbot`

#### Skript zu pm2 hinzufügen: 

pm2 ist der Hintergrund-Prozess-Manager von node.

`pm2 start index.js`

#### Als Dev (Datei wirdbeobachtet): 
`pm2 start index.js --watch`



## Feedback-Bot 

## Git-Repository: 
ssh://levelup/var/git/feedbackbot.git

## Installation der Abhängigkeiten 
Man brauch pm2 als Prozessmanager für Node.

`yarn global add pm2`

`sudo pm2 startup systemd`

## Installation 
Checkout auf dem Server auf [[/var/www/feedbackbot]]

ALT Checkout auf dem Server auf [[/var/www/levelup/]][[/var/www/feedbackbot|feedbackbot]]

#### Skript zu pm2 hinzufügen: 
`pm2 start index.js`

#### Als Dev (Datei wir beobachtet): 
`pm2 start index.js --watch`



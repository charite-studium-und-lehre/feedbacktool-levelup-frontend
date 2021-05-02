## Feedback-Bot 

Feedback-Bot sendet die von Nutzern übergebenen Nachrichten in den Teams Chat "Feedbackbot"

## Installation 

Checkout auf dem Server auf `/var/www/levelup/feedbackbot`
Run `npm i`

## Anlegen Crontab

`sudo crontab -e`

### Rebuild täglich 
00 00 * * * cd /var/www/levelup/feedbackbot/; sudo pm2 delete index.js; sudo pm2 start index.js;

### Rebuild bei dem reboot
@reboot cd /var/www/levelup/feedbackbot/; sudo pm2 delete index.js; sudo pm2 start index.js;





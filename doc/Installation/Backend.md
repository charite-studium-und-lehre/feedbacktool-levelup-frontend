## Backend 

#### Pakete mit APT installieren 
`add-apt-repository ppa:ondrej/php`

`apt update`

`apt install apache2 mysql-server mysql-client vim unzip`

`apt install php7.4-fpm php7.4-cli php-apcu php-apcu-bc php7.4-mysql php7.4-ldap php7.4-mbstring php7.4-zip php7.4-intl php7.4-curl php7.4-xml `

#### Nach PHP-Upgrade alte Pakete deinstallieren: 
`apt remove --purge php7.3-fpm php7.3-cli php7.3-mysql php7.3-ldap php7.3-mbstring php7.3-zip php7.3-intl php7.3-curl php7.3-xml`

`apt autoremove --purge`


## MySQL-Backup und Transfer 

Nur für root lesbares Verzeichnis 
`/etc/mysql/pw-cron`

Dort gibt es eine Datei wie z.B. `dataexport.cnf`

[client]

user=levelupDataExport

password='<PW>'




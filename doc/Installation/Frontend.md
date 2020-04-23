## Ubuntu 
`sudo apt install apache2`

#### Yarn Javascript Packaging Tool : 

    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
    sudo echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
    sudo apt update
    sudo apt install yarn



#### Proxy für Yarn festlegen: 
    
    yarn config set https-proxy http://proxy.charite.de:8080
    yarn config set http-proxy http://proxy.charite.de:8080
    yarn config set proxy http://proxy.charite.de:8080
    


Dateien wirklich bauen:

	`yarn build`


## TODO: Andere Betriebssysteme
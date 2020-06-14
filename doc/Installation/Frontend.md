## Ubuntu 
`sudo apt install apache2`

Node 12 verwenden (statt wie in Ubuntu 18.04 Node 8)

Siehe https://tecadmin.net/install-latest-nodejs-npm-on-ubuntu/

```shell script
sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
```

#### Yarn Javascript Packaging Tool : 

```shell script
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
sudo echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
sudo apt update
sudo apt install yarn
```



#### Proxy für Yarn festlegen: 

```shell script
yarn config set https-proxy http://proxy.charite.de:8080
yarn config set http-proxy http://proxy.charite.de:8080
yarn config set proxy http://proxy.charite.de:8080
```



Dateien wirklich bauen:

```shell script
yarn build
```


## TODO: Andere Betriebssysteme
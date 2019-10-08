#!/bin/bash

cd `dirname $0`
git pull --rebase

DIR=app-`basename $(pwd)`
if [ $DIR = "app-master" -o $DIR = "app-levelup" ]; then
	DIR="app"
fi

GIT_BRANCH=`git rev-parse --abbrev-ref HEAD`
echo -e "  ---  Build für Verzeichnis \e[44m\e[97m $DIR \e[0m - Git-Branch \e[44m\e[97m $GIT_BRANCH \e[0m ---   "

DATUM=`date '+%d.%m.%Y %H:%M'`
yarn install

echo Ausführen von:    PUBLIC_URL="/$DIR" REACT_APP_SITE_TITLE="Branch $GIT_BRANCH, Deployment am $DATUM" yarn build
PUBLIC_URL="/$DIR" REACT_APP_SITE_TITLE="Branch $GIT_BRANCH, Deployment am $DATUM" yarn build
rm -rf buildFinished
mv build buildFinished

cat htaccess-dist | sed s/RewriteBase/RewriteBase\ \\\/$DIR/g > buildFinished/.htaccess
curl -X POST --data-urlencode "payload={\"text\": \"New deplpoyment for $GIT_BRANCH.\nGo to https://levelup.charite.de/$DIR to access it.\"}" $SLACK_URL
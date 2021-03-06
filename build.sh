#!/bin/bash

cd `dirname $0`
git pull

DIR=app-`basename $(pwd)`
if [ $DIR = "app-master" -o $DIR = "app-levelup" ]; then
	DIR="app"
fi

GIT_BRANCH=`git rev-parse --abbrev-ref HEAD`
echo -e "  ---  Build für Verzeichnis \e[44m\e[97m $DIR \e[0m - Git-Branch \e[44m\e[97m $GIT_BRANCH \e[0m ---   "

DATUM=`date '+%d.%m.%Y %H:%M'`
yarn install
yarn upgrade

echo Ausführen von:    PUBLIC_URL="/$DIR" REACT_APP_SITE_TITLE="Branch $GIT_BRANCH, Deployment am $DATUM" yarn build
PUBLIC_URL="/$DIR" REACT_APP_SITE_TITLE="Branch $GIT_BRANCH, Deployment am $DATUM" yarn build
rm -rf buildFinished
mv build buildFinished

cat htaccess-dist | sed s/RewriteBase/RewriteBase\ \\\/$DIR/g > buildFinished/.htaccess

if [[ -z $DEPLOY_MESSAGE ]]; then
  DEPLOY_MESSAGE="New deployment for $GIT_BRANCH by `whoami`.\nÄnderung: `git log -1 --pretty=%B`\nGo to https://levelup.charite.de/$DIR to access it."
fi
DEPLOY_MESSAGE="$DEPLOY_MESSAGE Aufruf unter https://levelup.charite.de/$DIR"

curl -X POST --data-urlencode "payload={\"text\": \"$DEPLOY_MESSAGE\"}" $SLACK_URL
curl -H "Content-Type: application/json" -d "{\"text\": \"$DEPLOY_MESSAGE\"}" $TEAMS_URL

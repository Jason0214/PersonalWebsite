#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'Auto deploy'

git push -f git@github.com:Jason0214/Jason0214.github.io.git master

cd -

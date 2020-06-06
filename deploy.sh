#!/usr/bin/env sh

# abort on errors
set -e

# navigate into the build output directory
cd docs/.vuepress/dist

rm -r *
git clone -b master git@github.com:Jason0214/Jason0214.github.io.git .

# build
npm run docs:build

git add -A
git commit -m 'Auto deploy.'

git push git@github.com:Jason0214/Jason0214.github.io.git master

cd -

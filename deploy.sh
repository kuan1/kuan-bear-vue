#!/usr/bin/env sh
# abort on errors
set -e
username=kuan1
repo=kuan-bear-vue
dist=docs/.vuepress/dist

# build
npm run build:gh
# navigate into the build output directory
cd $dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/kuan1/kuan-bear-vue.git master:gh-pages

cd -

echo "deploy success !!"

#!/bin/sh

if [ "$#" -ne 1 ]; then
    echo "Error: Wrong arguments number, require only the filename of the blog need to be posted."
fi

case "$OSTYPE" in
  solaris*) platform="SOLARIS" ;;
  darwin*)  platform="OSX" ;;
  linux*)   platform="LINUX" ;;
  bsd*)     platform="BSD" ;;
  msys*)    platform="WINDOWS" ;;
  *)        platform="unknown: $OSTYPE" ;;
esac

if [ ${platform} = "WINDOWS" ]; then
    sep="\\"
else
    sep="/"
fi

workingDir=$(pwd)
blogFileName="$1"
blogPath=${workingDir}${sep}${blogFileName}

binDir=$(dirname "$0")
postJsPath=${binDir}${sep}"post.js"
nodePath=${binDir}${sep}".."

NODE_PATH=${nodePath} npx babel-node ${postJsPath} ${blogPath}

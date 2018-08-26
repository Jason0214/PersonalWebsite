#!/bin/sh

if [ "$#" -ne 2 ]; then
    echo "Error: Wrong arguments number, requires two."
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

binDir=$(dirname "$0")
nodePath=${binDir}${sep}".."

commandName="$1"
commandScript=${binDir}${sep}${commandName}".js"

workingDir=$(pwd)
fileRelPath="$2"
fileAbsPath=${workingDir}${sep}${fileRelPath}

NODE_PATH=${nodePath} npx babel-node ${commandScript} ${fileAbsPath}

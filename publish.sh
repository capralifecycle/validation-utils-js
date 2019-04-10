#!/usr/bin/env bash

VERSION=$1

shopt -s extglob
if [[ $VERSION == @(major|minor|patch) ]]; then
    echo "Pushing tags and publishing package"
    npm run build && \
        npm version $VERSION && \
        git push && \
        git push --tags && \
        npm publish --access public
else
    echo "Missing version statement. Select one of <patch | minor | major>"
    exit 1
fi


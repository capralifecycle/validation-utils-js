#!/usr/bin/env bash

VERSION=$1

if [[ $VERSION != "major" ] && [ $VERSION != "minor"] && [ $VERSION != "patch"]]; then
    echo "Missing version statement. Select one of <patch | minor | major>"
    exit 1
fi

echo "Pushing tags and publishing package"
npm version $VERSION && \
    git push && \
    git push --tags && \
    npm publish --access public
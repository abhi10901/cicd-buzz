#!/bin/sh
docker login -e $DOCKER_EMAIL -u $DOCKER_USER -p $DOCKER_PASS
if [ "$TRAVIS_BRANCH" = "master" ]; then
    TAG="latest"
else
    TAG="$TRAVIS_BRANCH"
fi

IFS='/' read -r -a TRAVIS_REPO <<< "$TRAVIS_REPO_SLUG"

echo "${TRAVIS_REPO[0]}"
echo "${TRAVIS_REPO[0]}"

echo $TRAVIS_REPO_SLUG
echo $TAG
docker build -f Dockerfile -t $TRAVIS_REPO_SLUG:$TAG .
docker push $TRAVIS_REPO_SLUG
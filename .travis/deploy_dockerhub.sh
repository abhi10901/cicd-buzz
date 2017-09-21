#!/bin/sh
docker login -e $DOCKER_EMAIL -u $DOCKER_USER -p $DOCKER_PASS
if [ "$TRAVIS_BRANCH" = "master" ]; then
    TAG="latest"
else
    TAG="$TRAVIS_BRANCH"
fi

echo $TRAVIS_REPO_SLUG
echo $TAG
docker build -f Dockerfile -t $TRAVIS_REPO_SLUG:$TAG .
docker push $DOCKER_USER/$TRAVIS_REPO_SLUG
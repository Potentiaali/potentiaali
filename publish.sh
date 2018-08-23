#!/usr/bin/env bash
yarn install
rm -rf build
yarn build
cd build
aws s3 sync . s3://$BUCKET/ --region eu-west-1 --acl public-read

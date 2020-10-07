#!/usr/bin/env bash
npm install
rm -rf build
npm run build
cd build
aws s3 sync . s3://$BUCKET/ --region eu-west-1 --acl public-read

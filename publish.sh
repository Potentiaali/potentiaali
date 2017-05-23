#!/usr/bin/env bash
aws s3 sync . s3://$BUCKET/ --region eu-west-1 --acl public-read

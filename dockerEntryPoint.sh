#!/bin/bash
set -xe
: "${GOOGLE_OAUTH_CLIENT_ID?GOOGLE_OAUTH_CLIENT_ID argument was not provided}"
: "${API_SERVER_BASE_URL?API_SERVER_BASE_URL argument was not provided}"

sed -i "s|GOOGLE_OAUTH_CLIENT_ID|$GOOGLE_OAUTH_CLIENT_ID|g" /usr/share/nginx/html/main-*.js
sed -i "s|API_SERVER_BASE_URL|$API_SERVER_BASE_URL|g" /usr/share/nginx/html/main-*.js

exec "$@"
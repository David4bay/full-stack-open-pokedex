#!/bin/bash

echo "Build script"
npm install --legacy-peer-deps
npm run Build
node app.js
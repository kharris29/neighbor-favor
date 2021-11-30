#!/bin/bash

# Handle dependencies
cd frontend
npm install next
cd ..
cd server/node_modules/.bin
rm nodemon
cd .. # current dir is node_modules
cd .. # current dir is server
npm install nodemon --save-dev
cd .. # current dur is neighbor-favor, now run run-site.sh
# /bin/bash

# -e: Exit on error, -v: print script lines before executing them
set -ev

# Enter server-side code folder
cd server

# Install dependencies
npm install

# Return to root folder
cd ..
# /bin/bash

# -e: Exit on error, -v: print script lines before execute them
set -ev

# Enter server-side code folder
cd server

# Check code standards
npm run lint

# Run unit tests
npm ./test/unit

# Return to root folder
cd ..
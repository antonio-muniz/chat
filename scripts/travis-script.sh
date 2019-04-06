# /bin/bash

# -e: Exit on error, -v: print script lines before execute them
set -ev

# Check code standards
npm run lint

# Run tests
npm test

# /bin/bash

# -e: Exit on error, -v: print script lines before execute them
set -ev

# Check code standards
npm run lint

# Start PostgreSQL container
#docker run -d \
#  --name postgres \
#  -p 5433:5432 \
#  -e POSTGRES_USER=chat \
#  -e POSTGRES_DB=chat \
#  -e POSTGRES_PASSWORD=123456 \
#  postgres:9.6.2  

#DATABASE_URL=postgres://chat:123456@127.0.0.1:5433/chat

# Run unit tests
npm test

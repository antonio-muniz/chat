# /bin/bash

# -e: Exit on error, -v: print script lines before execute them
set -ev

# Check code standards
npm run lint

# Start PostgreSQL container
docker run -d \
  --name postgres \
  -e POSTGRES_USER=chat \
  -e POSTGRES_DB=chat \
  -e POSTGRES_PASSWORD=123456 \
  postgres:9.6.2  

POSTGRES_CONTAINER_IP=`docker inspect --format='{{ .NetworkSettings.IPAddress }}' postgres`
DATABASE_URL=postgres://chat:123456@${POSTGRES_CONTAINER_IP}:5432/chat

# Run unit tests
npm test

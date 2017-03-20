# /bin/bash

# -e: Exit on error, -v: print script lines before execute them
set -ev

# Check code standards
npm run lint

set POSTGRES_HOST=0.0.0.0
set POSTGRES_PORT=5433
set POSTGRES_DATABASE=chat
set POSTGRES_USER=chat
set POSTGRES_PASSWORD=123456

# Start PostgreSQL container
docker run -d \
  --name postgres \
  -p $POSTGRES_PORT:5432 \
  -e POSTGRES_USER=$POSTGRES_USER \
  -e POSTGRES_DB=$POSTGRES_DATABASE \
  -e POSTGRES_PASSWORD=$POSTGRES_PASSWORD \
  postgres:9.6.2  

export DATABASE_URL=postgres://$POSTGRES_USER:$POSTGRES_PASSWORD@$POSTGRES_HOST:$POSTGRES_PORT/$POSTGRES_DATABASE

# Wait until PostgreSQL is available
export PGPASSWORD=$POSTGRES_PASSWORD
until psql \
  -h $POSTGRES_HOST \
  -p $POSTGRES_PORT \
  -U $POSTGRES_USER \
  -c '\l' \
  $POSTGRES_DATABASE;
do
  echo "PostgreSQL is down... Waiting..."
  sleep 1
done
echo "PostgreSQL is up!"

# Run tests
npm test

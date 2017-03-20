# /bin/bash

# -e: Exit on error, -v: print script lines before execute them
set -ev

# Check code standards
npm run lint

export CHAT_POSTGRES_HOST=0.0.0.0
export CHAT_POSTGRES_PORT=5433
export CHAT_POSTGRES_DATABASE=chat
export CHAT_POSTGRES_USER=chat
export CHAT_POSTGRES_PASSWORD=123456

# Start PostgreSQL container
docker run -d \
  --name postgres \
  -p $CHAT_POSTGRES_PORT:5432 \
  -e POSTGRES_USER=$CHAT_POSTGRES_USER \
  -e POSTGRES_DB=$CHAT_POSTGRES_DATABASE \
  -e POSTGRES_PASSWORD=$CHAT_POSTGRES_PASSWORD \
  postgres:9.6.2  

export DATABASE_URL=postgres://$CHAT_POSTGRES_USER:$CHAT_POSTGRES_PASSWORD@$CHAT_POSTGRES_HOST:$CHAT_POSTGRES_PORT/$CHAT_POSTGRES_DATABASE

# Wait until PostgreSQL is available
export PGPASSWORD=$CHAT_POSTGRES_PASSWORD
until psql &>/dev/null \
  --host=$CHAT_POSTGRES_HOST \
  --port=$CHAT_POSTGRES_PORT \
  --username=$CHAT_POSTGRES_USER \
  --command='\l' \
  $CHAT_POSTGRES_DATABASE;
do
  echo "PostgreSQL is down... Waiting..."
  sleep 1
done
echo "PostgreSQL is up!"

# Run tests
npm test

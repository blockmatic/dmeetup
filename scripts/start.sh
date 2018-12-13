#!/bin/bash
echo "Starting docker containers"
docker-compose up -d

# wait 10s for the docker services to start
sleep 10s
cd services/frontend
yarn install
yarn start

cd ../..

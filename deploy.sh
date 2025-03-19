#!/bin/bash

# Start deploy process.
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin 
docker-compose build -f docker-compose.yml
docker-compose push -f docker-compose.yml

# Deploying in stage.
echo "" >> "$HOME/.ssh/known_hosts"
ssh -o StrictHostKeyChecking=no -p "$DEPLOY_PORT" "$DEPLOY_USERNAME"@"$DEPLOY_STAGE_HOST" "$DEPLOY_STAGE_CMD"

# Deploy process finished.
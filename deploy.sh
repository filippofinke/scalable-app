#!/bin/bash
# @author Filippo Finke

echo "# Deploying the app stack"
docker stack deploy --compose-file=docker-compose.yml app
echo "# Finished deploying the app stack"

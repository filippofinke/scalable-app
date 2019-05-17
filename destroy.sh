#!/bin/bash
# @author Filippo Finke

echo "# Deleting the app stack"
docker stack rm app
echo "# Finished deleting the app stack"

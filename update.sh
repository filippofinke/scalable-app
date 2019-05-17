#!/bin/bash
# @author Filippo Finke

services=(app_backend app_frontend)

sh build.sh

echo "# Stared to update ..."

for service in ${services[*]}
do
	echo "# Updating ${service} ..."
	docker service update --force $service &
done
wait
echo "# Finished updating..."

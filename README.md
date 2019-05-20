# scalable app

This repository contains a website divided into microservices.

## how to start

To start this project:

1. Install docker ([https://docs.docker.com/install/](https://docs.docker.com/install/))
2. clone this repository `git clone https://github.com/filippofinke/scalable-app.git`.
3. build docker app: `sh build.sh`
4. initialize docker: `docker swarm init`
5. deploy docker app: `sh deploy.sh`
6. use porttainer.io:
   - open with a browser: `localhost:9000`
   - create new admin user
   - select local docker
7. enjoy

# @author Filippo Finke

FROM node
RUN npm i nodemon -g
WORKDIR /usr/src/app
COPY ./src/ ./
RUN npm install
EXPOSE 8080
CMD [ "nodemon","." ]

# @author Filippo Finke

FROM node
WORKDIR /usr/src/app
COPY ./src/ ./
RUN npm install
EXPOSE 8080
CMD [ "npm","start" ]

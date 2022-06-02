# syntax=docker/dockerfile:1

FROM node:16.9.0

ENV NODE_ENV=production

WORKDIR /KAFKA-API

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install 

COPY . .

CMD [ "node", "index.js" ]
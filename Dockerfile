FROM node:alpine as build-deps
WORKDIR /opt/app
COPY package.json ./
RUN yarn install
COPY ./ ./
RUN node index.js

EXPOSE 8080
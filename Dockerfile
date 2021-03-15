FROM node:alpine as build-deps
WORKDIR /opt/app
COPY package.json yarn.lock ./
RUN yarn install
COPY ./ ./
RUN node index.js

EXPOSE 8080
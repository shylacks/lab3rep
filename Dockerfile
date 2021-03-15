FROM node:alpine as build-deps
WORKDIR /opt/app
COPY package.json ./
RUN yarn install
COPY ./ ./

CMD ["npm", "start"]
EXPOSE 8080
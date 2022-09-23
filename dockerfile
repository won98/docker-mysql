FROM node:14-slim

RUN mkdir /app

WORKDIR /app

ADD ./ /app

RUN npm install

CMD npm start


FROM node:14

RUN mkdir /app

WORKDIR /app

ADD ./ /app

RUN npm install

CMD npm start
FROM node:6

RUN mkdir /usr/app
COPY . /usr/app
WORKDIR /usr/app

RUN npm install

CMD ["npm", "start"]
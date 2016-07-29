FROM node:6

MKDIR /usr/app
COPY * /usr/app/
WORKDIR /usr/app

RUN npm install

CMD ["npm", "start"]
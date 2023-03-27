FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm i -g @nestjs/cli
RUN npm i

CMD [ "npm", "run", "start:dev" ]
FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
COPY tsconfig*.json ./

ENV NODE_ENV=development

RUN npm install
RUN npm i -g @nestjs/cli
RUN npm install tsc -g
RUN npm install --save-dev typescript

CMD [ "sh", "-c", "npm install && npm run start" ]
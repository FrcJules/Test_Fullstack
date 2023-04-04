FROM node:19-alpine
WORKDIR /usr/src/app
COPY package*.json ./
COPY tsconfig*.json ./

ENV NODE_ENV=development

RUN npm i -g react-scripts
RUN npm install -g typescript ts-node
RUN npm install --save-dev typescript

CMD [ "sh", "-c", "npm install && npm run start" ]
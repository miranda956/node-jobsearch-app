FROM node:12

WORKDIR /usr/projects/backend/node-job/node-jobsearch-app


COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "node", "server.js" ]
FROM node:latest

WORKDIR /usr/src/app/front

COPY package*.json ./

RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install

CMD ["ng", "serve"]

FROM node:alpine

ENV APP_PATH /app

WORKDIR $APP_PATH

COPY . .

RUN npm install -g @angular/cli \
  && npm install

ENTRYPOINT ["ng", "serve", "--prod", "--env=ci"]
FROM node:14.16-alpine as worker

RUN apk update && apk add python2 make g++

WORKDIR /app
COPY ./ /app/

# Instala y construye el Angular App
RUN npm ci
RUN npm run build:prod

FROM nginx:1.19-alpine

COPY ./ngnix.conf /etc/nginx/conf.d/default.conf
COPY --from=worker /app/dist/ /usr/share/nginx/html

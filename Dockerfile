FROM node:12.22.1-alpine as worker

RUN apk update
RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    bash

WORKDIR /app
COPY ./ /app/

# Instala y construye el Angular App
RUN npm ci
RUN npm run build:prod

FROM nginx:1.19-alpine

COPY ./ngnix.conf /etc/nginx/conf.d/default.conf
COPY --from=worker /app/dist/ /usr/share/nginx/html
EXPOSE 8080 80

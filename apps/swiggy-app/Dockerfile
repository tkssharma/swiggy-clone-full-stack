FROM node:12-buster-slim

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install && \
    rm -rf /tmp/* /var/tmp/*

COPY . /app

RUN npm run build
RUN npm run start
EXPOSE 3000
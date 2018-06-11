FROM nginx:1.10-alpine

RUN apk update && apk add nodejs python make g++ bash libpng-dev autoconf automake libtool nasm
# Puppeteer
RUN apt-get update && apt-get install -yq libgconf-2-4

WORKDIR /src
COPY package.json package.json
RUN npm install

COPY nginx /etc/nginx
COPY . /src

ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV}
RUN npm run build

RUN rm -Rf node_modules
RUN find . ! -path '*dist*' ! -path '.' -exec rm -Rf {} +

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
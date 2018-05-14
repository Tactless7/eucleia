FROM nginx:1.10-alpine

RUN apk update && apk add nodejs python make g++ bash libpng-dev autoconf automake libtool nasm

WORKDIR /src
COPY package.json package.json
RUN npm install

COPY nginx /etc/nginx
COPY . /src

RUN npm run build

RUN rm -Rf node_modules
RUN find . ! -path '*dist*' ! -path '.' -exec rm -Rf {} +

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
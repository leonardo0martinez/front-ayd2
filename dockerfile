FROM node:17-alpine AS node
WORKDIR /api-front
COPY . .
RUN npm install

ENV REACT_APP_HOST=localhost
ENV REACT_APP_PORT=5000

EXPOSE 3000

RUN npm run build
FROM nginx:1.21.6-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=node /api-front/build/ /usr/share/nginx/html
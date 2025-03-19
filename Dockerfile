FROM node:23.10.0-alpine3.21 as build
WORKDIR /Portfolio
COPY ./package.json /Portfolio
COPY ./package-lock.json /Portfolio
RUN npm ci
COPY . /Portfolio
RUN npm run build

FROM nginx:alpine3.21-perl
COPY --from=build /Portfolio/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 4000
CMD ["nginx", "-g", "daemon off;"]
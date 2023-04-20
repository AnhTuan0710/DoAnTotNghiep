# => Build container
# FROM node:14 as builder
# WORKDIR /app
# COPY . .
# COPY package.json .
# RUN yarn install

# RUN yarn build:image
# => Run container

FROM nginx:alpine
# Nginx config
RUN rm -rf /etc/nginx/conf.d
RUN rm -rf /usr/share/nginx/html/

COPY conf /etc/nginx

# Static build
COPY /build /usr/share/nginx/html/
# Default port exposure
EXPOSE 80

# Copy .env file and shell script to container
WORKDIR /usr/share/nginx/html
COPY ./env.sh .
COPY .env .

# Add bash
RUN apk add --no-cache bash

# Make our shell script executable
RUN chmod +x env.sh

# Start Nginx server
CMD ["/bin/bash", "-c", "/usr/share/nginx/html/env.sh && nginx -g \"daemon off;\""]
###########################
# Stage 1 : Build project #
###########################
FROM node as build
WORKDIR usr/src/app
COPY . .
RUN npm install && npm run build

############################
# Stage 2 : Deploy project #
############################
FROM nginx
LABEL version="1.0"

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR usr/share/nginx/html
COPY --from=build /usr/src/app/dist/skill-up-front/ .
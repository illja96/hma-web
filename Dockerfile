FROM node:latest AS build
WORKDIR /app
COPY . ./
RUN npm install
RUN npm run build

FROM emeraldsquad/sonar-scanner:latest
WORKDIR /usr/src
COPY . ./
RUN sonar-scanner -D 'sonar.projectKey=%env.sonar.projectKey%' -D 'sonar.projectVersion=%build.number%' -D 'sonar.sources=.' -D 'sonar.host.url=%env.sonar.host.url%' -D 'sonar.login=%env.sonar.login%'

FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist/house-money-accountant-web ./
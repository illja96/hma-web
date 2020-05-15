FROM node:latest AS build
WORKDIR /app
COPY . ./
RUN npm install
RUN npm run build -- -c=production

FROM emeraldsquad/sonar-scanner:latest
WORKDIR /usr/src
COPY . ./
RUN sonar-scanner -D 'sonar.projectKey=%sonar.projectKey%' -D 'sonar.projectVersion=%build.number%' -D 'sonar.sources=.' -D 'sonar.host.url=%sonar.host.url%' -D 'sonar.login=%sonar.login%'

FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist/house-money-accountant-web ./
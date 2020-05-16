FROM node:latest AS build

ARG BUILD_NUMBER
RUN test -n "${BUILD_NUMBER}" || (echo "BUILD_NUMBER argument not provided" && false)

ARG SONAR_HOST_URL
RUN test -n "${SONAR_HOST_URL}" || (echo "SONAR_HOST_URL argument not provided" && false)

ARG SONAR_PROJECTKEY
RUN test -n "${SONAR_PROJECTKEY}" || (echo "SONAR_PROJECTKEY argument not provided" && false)

ARG SONAR_LOGIN
RUN test -n "${SONAR_LOGIN}" || (echo "SONAR_LOGIN argument not provided" && false)

WORKDIR /app
COPY . ./
RUN npm install
RUN npm run ng build -- -c=production

FROM emeraldsquad/sonar-scanner:latest
WORKDIR /usr/src
COPY . ./
RUN sonar-scanner -D 'sonar.projectKey=${SONAR_PROJECTKEY}' -D 'sonar.projectVersion=${BUILD_NUMBER}' -D 'sonar.sources=.' -D 'sonar.host.url=${SONAR_HOST_URL}' -D 'sonar.login=${SONAR_LOGIN}'

FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist/house-money-accountant-web ./
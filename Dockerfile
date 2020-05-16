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
RUN npm version "1.0.${BUILD_NUMBER}" --no-git-tag-version
RUN npm install
RUN npm run ng build -- -c=production

FROM emeraldsquad/sonar-scanner:latest
WORKDIR /usr/src
COPY . ./
RUN sonar-scanner -Dsonar.projectKey="${SONAR_PROJECTKEY}" -Dsonar.projectVersion="${BUILD_NUMBER}" -Dsonar.sources="". -Dsonar.host.url="${SONAR_HOST_URL}" -Dsonar.login="${SONAR_LOGIN}"

FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist/house-money-accountant-web ./
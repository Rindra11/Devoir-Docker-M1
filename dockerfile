# Étape 1 : Build de l'application
FROM node:18 AS build-stage
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape 2 : Serveur Nginx pour servir l'application
FROM nginx:alpine
COPY --from=build-stage /app/dist /usr/share/nginx/html

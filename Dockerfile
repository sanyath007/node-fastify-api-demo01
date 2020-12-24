FROM node:10-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
ENV APP_SETTINGS_FILE_PATH '/path_to_app/src/app/config/appSettings.json'
EXPOSE 9000
CMD ["node", "app.js"]
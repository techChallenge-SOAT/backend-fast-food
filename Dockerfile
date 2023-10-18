FROM node:v20.8.1-slim

WORKDIR /app
COPY package*.json tsconfig.json /app/
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

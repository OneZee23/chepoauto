FROM node:18-alpine

WORKDIR /app

COPY .env ./

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

CMD ["sh", "-c", "source .env && node dist/main"]

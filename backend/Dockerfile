# ============================================
# DOCKERFILE DO BACKEND
# ============================================
# Define como criar o container do servidor Node.js

FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]


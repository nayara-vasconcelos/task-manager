FROM node:16.15.1 AS node_backend
WORKDIR /app/backend
COPY package.json /app/backend
RUN npm install
COPY . /app/backend
EXPOSE 3001
CMD ["npm", "run", "dev"]
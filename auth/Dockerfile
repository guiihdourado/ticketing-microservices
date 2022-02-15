FROM node:16.5.0-alpine

WORKDIR /app
COPY package.json ./
RUN yarn
COPY ./ ./

CMD ["yarn", "dev"]
FROM node:20-alpine AS base
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY .. .

ENV PORT=3000
EXPOSE 3000

CMD ["yarn", "dev"]

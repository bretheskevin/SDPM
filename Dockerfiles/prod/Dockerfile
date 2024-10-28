FROM node:20-alpine AS base
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production
COPY .. .
RUN yarn build

FROM node:20-alpine AS production
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000
WORKDIR /app
COPY --from=base /app /app
CMD ["yarn", "start"]

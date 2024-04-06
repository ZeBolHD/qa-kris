FROM node:18-alpine
# Installing libvips-dev for sharp Compatibility
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev libc6-compat
RUN apk update
# Set working directory
WORKDIR /app
ARG NODE_ENV production
ENV NODE_ENV=${NODE_ENV}

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN npm install -g pnpm --force
RUN pnpm install -g turbo
RUN corepack enable
COPY . .
RUN pnpm turbo prune --scope=backend --docker

RUN pnpm install

RUN pnpm run build --filter=backend

EXPOSE 1337

CMD cd apps/backend && pnpm run start
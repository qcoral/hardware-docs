# syntax=docker/dockerfile:1

# ---- Build stage ----
FROM node:22-alpine AS build
WORKDIR /app

# Install pnpm (lockfile is v9 -> pnpm 9)
RUN npm install -g pnpm@9

# Install dependencies first (better layer caching)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Build the static site into /app/dist
COPY . .
RUN pnpm build

# ---- Serve stage ----
FROM nginx:alpine AS serve

# Custom nginx config: directory-style clean URLs + custom 404
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

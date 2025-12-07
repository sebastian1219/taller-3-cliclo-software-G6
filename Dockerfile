# Etapa de build
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci --legacy-peer-deps

COPY . .
RUN npm run build

# Etapa de runtime
FROM node:20-alpine
ENV NODE_ENV=production
WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Desactivamos husky y instalamos solo producción
ENV HUSKY=0
RUN npm ci --omit=dev --legacy-peer-deps

EXPOSE 3000
CMD ["node", "dist/index.js"]



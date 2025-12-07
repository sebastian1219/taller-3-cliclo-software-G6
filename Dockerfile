# Etapa de build
FROM node:20-alpine AS builder
WORKDIR /app

# Copiamos los manifests primero para aprovechar la cache
COPY package*.json ./

# Instalamos TODAS las dependencias (incluyendo dev) para poder compilar
RUN npm ci --legacy-peer-deps

# Copiamos el resto del código
COPY . .

# Ejecutamos el build (ej: compilar TS a JS)
RUN npm run build

# Etapa de runtime
FROM node:20-alpine
ENV NODE_ENV=production
WORKDIR /app

# Copiamos solo lo necesario desde la etapa de build
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Instalamos solo dependencias de producción
RUN npm ci --omit=dev --legacy-peer-deps --ignore-scripts

EXPOSE 3000
CMD ["node", "dist/index.js"]


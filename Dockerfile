# Etapa de build
FROM node:20-alpine AS builder
WORKDIR /app

# Copiamos solo los archivos de dependencias
COPY package*.json ./

# Instalamos TODAS las dependencias (incluyendo dev) para poder compilar
RUN npm ci --legacy-peer-deps

# Copiamos el resto del código
COPY . .

# Generamos el build
RUN npm run build

# Etapa de runtime
FROM node:20-alpine
ENV NODE_ENV=production
WORKDIR /app

# Copiamos solo lo necesario para correr
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Desactivamos husky para evitar errores en contenedor
RUN npm set-script prepare "" \
    && npm ci --omit=dev --legacy-peer-deps

EXPOSE 3000
CMD ["node", "dist/index.js"]


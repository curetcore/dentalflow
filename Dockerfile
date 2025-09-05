# Dockerfile wrapper para EasyPanel
FROM node:20-alpine AS builder

WORKDIR /app

# Copy landing page files
COPY 01-Desarrollo/landing-page/package*.json ./
RUN npm install --frozen-lockfile --production=false

COPY 01-Desarrollo/landing-page/ ./
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]
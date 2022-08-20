FROM usamazansari/itinerary-assistant-builder:nx-base-1.0.0 as builder
WORKDIR /app/itinerary-assistant
COPY . .
RUN npm run build:api

FROM usamazansari/itinerary-assistant-builder:nx-base-1.0.0
WORKDIR /app
COPY --from=builder /app/itinerary-assistant/ ./

ENV NODE_ENV=production
EXPOSE 3333
CMD ["node", "./dist/apps/api/main.js"]

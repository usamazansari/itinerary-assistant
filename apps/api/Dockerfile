FROM usamazansari/itinerary-assistant-builder as builder
WORKDIR /app/itinerary-assistant
RUN npm run build:api
RUN npm cache clean --force

FROM node:16.17.0-alpine
WORKDIR /app
COPY --from=builder /app/itinerary-assistant/dist/apps .
ENV NODE_ENV=production
EXPOSE 3333
CMD ["node", "api/index.js"]

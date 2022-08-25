FROM usamazansari/itinerary-assistant-builder as builder
WORKDIR /app/itinerary-assistant
RUN npm run build:ui
RUN npm cache clean --force

FROM nginx:latest
COPY --from=builder /app/itinerary-assistant/dist/apps/ui /usr/share/nginx/html
EXPOSE 80

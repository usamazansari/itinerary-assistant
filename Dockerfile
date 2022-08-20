FROM node:16.6.0-alpine

WORKDIR /app/itinerary-assistant
COPY . .
RUN npm i

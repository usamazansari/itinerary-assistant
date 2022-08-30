FROM node:16.17.0-alpine

WORKDIR /app/itinerary-assistant
COPY . .
RUN npm install

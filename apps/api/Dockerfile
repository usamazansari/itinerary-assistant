FROM usamazansari/itinerary-assistant-builder
WORKDIR /app/itinerary-assistant
RUN npm run build:api
RUN npm cache clean --force
ENV NODE_ENV=production
EXPOSE 3333
CMD ["node", "./dist/apps/api/main.js"]

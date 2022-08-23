FROM usamazansari/itinerary-assistant-builder as builder
WORKDIR /app/itinerary-assistant
RUN npm install --global @vercel/ncc
RUN npm run build:api
RUN npm cache clean --force
RUN ncc build ./dist/apps/api/main.js --out ./output/api --minify

FROM node:16.17.0-alpine
WORKDIR /app
COPY --from=builder /app/itinerary-assistant/output .
ENV NODE_ENV=production
EXPOSE 3333
CMD ["node", "api/index.js"]

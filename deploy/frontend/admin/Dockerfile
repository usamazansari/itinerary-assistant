# Run with this command in the root folder to make the COPY ../../.. . work
# docker build -t <tag name> -f .\deploy\frontend\admin\Dockerfile.admin .
FROM node:18.12.1-alpine as builder

WORKDIR /app/itinerary-assistant
COPY ../../.. .

RUN corepack enable
RUN corepack prepare yarn@stable --activate
RUN yarn
RUN yarn run build:admin

FROM nginx:latest
COPY --from=builder /app/itinerary-assistant/dist/apps/frontend/admin /usr/share/nginx/html
EXPOSE 80

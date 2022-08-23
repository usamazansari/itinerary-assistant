# ItineraryAssistant

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/getting-started/intro)

[Interactive Tutorial](https://nx.dev/angular-tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@itinerary-assistant/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.

## Docker

### Builder Image

- When dependencies in `package.json` change, the `Dockerfile` in the root must be run. This creates a builder image for `apps` to build
- Tag the built image appropriately as `itinerary-assistant-builder:{{ semver }}`
- Push the image to DockerHub

```bash
/~$ docker build -t itinerary-assistant-builder:{{ version }} .
/~$ docker tag itinerary-assistant-builder:{{ version }} usamazansari/itinerary-assistant-builder:{{ version }}
/~$ docker push usamazansari/itinerary-assistant-builder:{{ version }} # this updates the image in repository with a new tag (:{{ version }})
/~$ docker push usamazansari/itinerary-assistant-builder # This updates the image in repository with `latest` tag
```

### Application Image

- Run the dockerfile of `api` as well as `ui` to create artifacts for each app
- Tag the `apps` as `itinerary-assistant-api:{{ version }}` and `itinerary-assistant-ui:{{ version }}` respectively
- Push the images to DockerHub

```bash
/apps/{api|ui}/~$ docker build -t itinerary-assistant-{api|ui}:{{ version }} .
/apps/{api|ui}/~$ docker tag itinerary-assistant-{api|ui}:{{ version }} usamazansari/itinerary-assistant-{api|ui}:{{ version }}
/apps/{api|ui}/~$ docker push usamazansari/itinerary-assistant-{api|ui}:{{ version }}
```

## Heroku Deployment

- Ensure the `Procfile` resides in the `apps/api` directory
- Ensure the `Procfile` contains information to start up the server

```Procfile
web: node api/index.js
```

- Install Heroku globally

```bash
/~$ npm install --global heroku
```

- Login to Heroku and Heroku Container Registry

```bash
/~$ heroku login
/~$ heroku container:login
```

- Build and push the `api` image to the Heroku Container Registry

```bash
/~$ cd apps/api
/apps/api/~$ heroku container:push web
```

- Check if the image has been pushed

```bash
/apps/api/~$ heroku ps
```

- Release and Scale the container

```bash
/apps/api/~$ heroku container:release web
/apps/api/~$ heroku ps:scale web=1
/apps/api/~$ heroku ps
# Should show that the container is running
```

- Turn off the container when not in use

```bash
/apps/api/~$ heroku ps:scale web=0
/apps/api/~$ heroku ps
# Should show that the container is stopped
```

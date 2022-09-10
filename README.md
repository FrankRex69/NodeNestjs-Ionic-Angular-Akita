<p align="center">
  Basci project with: 
  - Backend with Nodejs and Nestjs framework;
  - Frontend with Angular and Akita framework.
</p>

## Description

[Basic project "Nodejs/Nestjs-Ionic/Angular/Akita" ](https://github.com/FrankRex69/NodeNestjs-AngularAkita) framework TypeScript starter repository.

## Installation backend/frontend

```bash
$ npm install
```

## Running the app
```bash
# Docker (in root)
$ docker network create proxy
$ docker-compose up postgres_base

# WATCH MODE (in specific directory)
# in "backend" directory
$ npm run start:dev
# in "frontend" directory
$ ionic serve

# development-backend
$ npm run start

# production mode-backend
$ npm run start:prod


# WATCH MODE (in root directory)
# developer - backend
$ npm run dev:back

# developer - frontend
$ npm run dev:front


# SWAGGER
http://localhost:7000/api/swagger/
```


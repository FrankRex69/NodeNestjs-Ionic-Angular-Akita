<p align="center">
  Basic project with: 
  - Backend with Nodejs and Nestjs framework;
  - Frontend with Angular and Akita framework.
</p>

## Description

[Basic project "Nodejs/Nestjs-Ionic/Angular/Akita" ](https://github.com/FrankRex69/NodeNestjs-AngularAkita) framework TypeScript starter repository.

## Installation backend/frontend

```bash
# Install package's backend and frontend (in root directory)
$ npm run setup
```

## Running the app
```bash
# Docker stop e remove (in root)
$ docker stop $(docker ps -a -q)
$ docker rm $(docker ps -a -q)

# Docker (in root)
$ docker network create proxy
$ docker-compose --env-file ./backend/.env up

# WATCH MODE (in root directory)
# developer - backend
$ npm run dev:back

# developer - frontend
$ npm run dev:front

# SWAGGER
http://localhost:7000/api/swagger/

# PGADMIN
http://localhost:5050/
user: admin@admin.com
pass: root
```


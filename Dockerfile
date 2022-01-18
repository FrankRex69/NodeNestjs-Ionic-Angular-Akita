FROM node:14.18.1-alpine as base
RUN npm i -g typescript pm2
WORKDIR /app
# END BASE

FROM base as backend
COPY ./backend/package*.json ./backend/
COPY ./backend/tsconfig*.json ./backend/
RUN cd /app/backend && npm ci
COPY ./backend/src ./backend/src
RUN cd /app/backend && npx nest build
# END BACKEND

CMD ["pm2-runtime", "/app/backend/dist/main.js"]

# # Indichiamo a Docker di utilizzare un'immagine Node.js ufficiale
# # Specifichiamo il nome dell'immagine (con As development)
# FROM node:12.13-alpine As development

# # specifichiamo il context, quindi qualsiasi comando Docker verrà eseguito in questo context.
# WORKDIR /src/app

# # Inizialmente copiamo solo package.json e package-lock.json (se esiste). 
# COPY package*.json ./
# # Quindi eseguiamo, nel context, il comando seguente. (in questo caso npm i),
# RUN npm install --only=development

# # Terminata l'operazione precedente, copiamo nel context il resto dell'applicazione nel contenitore Docker.
# COPY . .

# # Buildiamo l'applicazione 
# # (da notare che eseguiamo un primo RUN per npm i ed un secondo per il build, .. 
# # .. altrimenti se ci fosse un unico RUN ad ogni modifica Docker eseguirebbe sempre npm i e npm build )
# RUN npm run build

# FROM node:12.13-alpine as production

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

# WORKDIR /src/app

# COPY package*.json ./

# RUN npm install --only=production

# COPY . .

# COPY --from=development /src/app/dist ./dist

# CMD ["node", "dist/main"]
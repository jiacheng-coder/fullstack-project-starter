FROM node:21

WORKDIR /user/src/app

COPY . .

RUN npm config set registry http://registry.npmmirror.com

RUN npm install -g pnpm

RUN pnpm install

EXPOSE 8080

# CMD [ "npm","run","start:dev" ]
CMD [ "pnpm","start:dev" ]

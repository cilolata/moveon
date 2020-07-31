<h1 align=center > Moveon </h1>
<h2 align=center > 🚀Backend aplicação moveon 🚀</h2>

## Importe api isomnia
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=moveon-api&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fcilolata%2Fmoveon%2Fmaster%2Fbackend%2Fexport.json)

## Base de dados postgres
Necessário ter docker intalado, depois execute o comando abaixo:
```sh
 docker run --name moveon -e POSTGRES_PASSWORD=mypassword -p 5432:5432 -d postgres
```
## Configure o .env
```sh
APP_URL=
NODE_ENV=
SERVER_PORT=

# Auth

APP_SECRET=

# Database

DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=

```

## Utilize o yarn ou npm para instalar as dependências
```sh
npm install
```

```sh
yarn install
```

## Para executar o projeto
```sh
yarn dev
```

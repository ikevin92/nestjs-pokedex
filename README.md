<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejectutar en desarrollo

1. Clonar repositorio

2. Ejecutar

```
yarn install
```

3. Tener nest cli instalado

```
npm i -g nestjs/cli
```

4. Levantar la base de datos

```
docker-compose up -d 
```

5. Clonar el archivo ```.env.template``` y renombrarlo a ```.env```

6. Llenar las variables de entorno definidas en ```.env```

7. Ejecutar la aplicacion en dev:

```
yarn start:dev
```

8. Reconstruir base de datos con la semilla

```
http://localhost:3000/api/v2/seed
```

## Stack Usado

* MongoDB
* Nestjs

# Production Build

1. Crear el archivo ```.env.prod```
2. Llenar las variables de entorno definidas en ```.env.prod```
3. Crear la nueva imagen con el comando:

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build

```

# Notas

Heroku redeploy sin cambios:

```
git commmit --allow-empty -m "Deploy"
git push heroku <master|main>
```

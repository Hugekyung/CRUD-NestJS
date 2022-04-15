# Practice NestJS by creating RESTful CRUD API

<br/>

`### docker-compose 파일로 postgresql 환경 세팅`

```
version: '3.8'
services:
  dev-db:
    image: postgres:13
    ports:
      - 5432:5432
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
      POSTGRES_DB: nest
    networks:
      - projectdb
networks:
  projectdb:
```

<br/>

`### Prisma 초기 세팅 & 사용법`

```
# prisma 설치
$ yarn add -D prisma

# prisma로 만든 모델에 코드로 직접 접근 및 관리하기 위한 라이브러리
$ yarn add @prisma/client

Setup a new Prisma project
$ npx prisma init

# Generate artifacts (e.g. Prisma Client), 코드로 모델 접근
$ npx prisma generate

  Browse your data
$ npx prisma studio

Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)
$ npx prisma migrate dev

Pull the schema from an existing database, updating the Prisma schema
$ npx prisma db pull

Push the Prisma schema state to the database
$ npx prisma db push
```

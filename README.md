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

## `### Prisma 초기 세팅 & 사용법`

Prisma를 쓰면 기존에 TypeORM을 사용하기 위해 모델별 Entity 파일을 생성하고 관리했던 방식을 피할 수 있다.
schema.prisma 파일 내부에 db 연결, model(table) 스키마 작성을 graphQL 방식으로 한번에 작성할 수 있다.

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

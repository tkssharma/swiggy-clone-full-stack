# nodejs-nestjs-template

Use this template for any new custom code service that utilises nodejs.
The custom code service will accept work from the external task listener and report progress and results back to it.

For API specs visit http://\<endpoint>/api

Health check available at http://\<endpoint>/health

##### How to run:

Copy files

```
cp env.example .env
```

Running in docker

```
docker-compose build
docker-compose up

# Running tests
docker-compose exec node npm run test

# Running tests (only unit or e2e)
docker-compose exec node npm run test:unit
docker-compose exec node npm run test:e2e
```

Please ensure to set the right environment variables in the .env file.

##### Debugging:

For debugging support, copy the provided docker compose override

```
cp docker-compose.override.debug.yml docker-compose.override.yml
```

Then configure your inspector to attach to port 5858

##### Next steps:

###### Add tasks

- Create tasks in `src/app/domain/`, use `adder.task.ts` as an example
- Create task specs for testing, use `adder.task.spec.ts` as an example
- Create end-2-end tests in `test/`, use `task.e2e-spec.ts` as an example

###### Add data entities

- Create entity definitions in `src/app/domain/entities/`, use `example.ts` as an example
- Create entity services in `src/app/domain/services/`, use `example.service.ts` as an example
- Create entity service specs for testing, use `example.service.spec.ts` as an example

###### Add config settings

- Add config setting to `.env`, also don't forget `env.example` and `env.test`
- Add new properties to `src/config/config.interface.ts` and defaults for the properties to `src/config/config.default.ts`
- Add parsing for new config settings to `src/config/config.service.ts`
- Extend `config.service.spec.ts` to include new tests as needed

#### License

Apache 2.0

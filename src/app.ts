const Koa = require('koa');
const app = new Koa();
const db = require("../data/db.js"); // importing the db config

import { RepositoryService } from "./db/services/repository_service";
import container from "./infrastructure/installer";
import SERVICE_IDENTIFIER from "./infrastructure/identifiers";

// logger

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(async ctx => {
  const repositories = await db("repositories"); // making a query to get all repos
  console.log(repositories);

  let repoService = container.get<RepositoryService>(SERVICE_IDENTIFIER.RepositoryService);
  console.log(repoService.getRepositories());

  ctx.body = 'Hello World';
});

app.listen(3000);
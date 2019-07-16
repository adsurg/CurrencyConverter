import Koa from 'koa';
import Router from 'koa-router';
import exchangeRate from './exchange-rate'

const router = new Router();
const app = new Koa();
const PORT = process.env.PORT || 8081;

router.get('/exchange-rate/:source/to/:destination', ctx => {
  ctx.body = {
    rate: exchangeRate(ctx.params.source, ctx.params.destination)
  };
});

app.use(router.routes());

const server = app.listen(PORT).on('error', err => {
  console.error(err);
});

export default server;
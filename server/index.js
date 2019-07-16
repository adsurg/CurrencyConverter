import Koa from 'koa';
import Router from 'koa-router';
import exchangeRate from './exchange-rate'

const router = new Router();
const app = new Koa();
const PORT = process.env.PORT || 8081;

const round = value => Math.round(value * 100) / 100; 

router.get('/exchange-rate/:source/to/:destination', ctx => {
  ctx.body = {
    rate: exchangeRate(ctx.params.source, ctx.params.destination)
  };
});

router.get('/convert/:value/:source/to/:destination', ctx => {
  const rate = exchangeRate(ctx.params.source, ctx.params.destination);
  ctx.body = {
    value: round(Number(ctx.params.value) * rate),
    rate,
    currency: ctx.params.destination
  };
});

app.use(router.routes());

const server = app.listen(PORT).on('error', err => {
  console.error(err);
});

export default server;
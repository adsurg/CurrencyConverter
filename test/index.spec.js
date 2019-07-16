import server from '../server/index';
import request from 'supertest';
import 'babel-polyfill';

afterEach(() => 
  server.close());

describe('get exchange rate', () => {
  test('correct exchange rate for USD to EUR', async () => {
    const response = await request(server).get('/exchange-rate/USD/to/EUR');
      expect(response.status).toEqual(200);
      expect(response.type).toEqual('application/json');
      expect(response.body.rate).toEqual(0.87815);
  });
});
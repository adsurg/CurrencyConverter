import server from '../server/index';
import request from 'supertest';

afterEach(() => 
  server.close());

describe('get exchange rate', () => {
  test('correct exchange rate for USD to EUR', () => {
    return request(server).get('/exchange-rate/USD/to/EUR')
    .then(response => {
        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.rate).toEqual(0.87815);
            })
  });
});
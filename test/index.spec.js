import server from '../server/index';
import request from 'supertest';

afterEach(() => 
  server.close());

describe('routes: index', () => {
  test('should respond as expected', () => {
    return request(server).get('/exchange-rate/GBP/to/USD')
    .then(response => {
        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.rate).toEqual('GBP to USD');
            })
    //expect(response.body.data).toEqual('Sending some JSON');
  });
});
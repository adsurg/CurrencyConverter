import server from '../server/index';
import request from 'supertest';
import 'babel-polyfill';

afterEach(() => 
  server.close());

describe('get exchange rate', () => {
    it('returns the correct USD to EUR exchange rate', async () => {
        const response = await request(server).get('/exchange-rate/USD/to/EUR');

        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.rate).toBeCloseTo(0.87815, 5);
    });

    it('returns the correct GBP to USD exchange rate', async () => {
        const response = await request(server).get('/exchange-rate/GBP/to/USD');

        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.rate).toBeCloseTo(1.27277, 5);
    });
});

describe('convert currency', () => {
    it('returns the correct number of Euros from US Dollars', async () => {
        const response = await request(server).get('/convert/12.34/USD/to/EUR');

        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.value).toBeCloseTo(10.84, 2);
        expect(response.body.currency).toBe('EUR');
        expect(response.body.rate).toBeCloseTo(0.87815, 5);
        10.84
    });

    it('returns the correct number of US Dollars from Pounds', async () => {
        const response = await request(server).get('/convert/45.67/GBP/to/USD');

        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.value).toBeCloseTo(58.13, 2);
        expect(response.body.currency).toBe('USD');
        expect(response.body.rate).toBeCloseTo(1.27277, 5);
    });
});

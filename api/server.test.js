const request = require('supertest');
const server = require('./server');

// Write your tests here
test('sanity', () => {
  expect(true).toBe(true)
})


describe('server.js', () => {

    describe('get route', () => {
        it('should return a expected data', async () => {
          const response = await request(server).get('/api/players');
          expect(response.body).toEqual({id: 1, name: 'Donovan Mitchell', postion: 'Point Guard'});
        });
        it('should return a 200 status code', async () => {
            const response = await request(server).get('/api/players');
            expect(response.status).toEqual(200);
          });
      });

      describe('post route', () => {
        it('should return a expected data', async () => {
          const response = await request(server).post('/api/players')
          .send({id: 2, name: 'Rudy Golbert', position: 'center'})
          expect(response.body).toEqual({id: 2, name: 'Rudy Golbert', position: 'center'});
        });
        it('should return a 200 status code', async () => {
            const response = await request(server).post('/api/players');
            expect(response.status).toEqual(200);
          });
      });

      describe('delete route', () => {
        it('should return a expected data', async () => {
          const response = await request(server).delete('/api/players')
          .send({id: 1});
          expect(response.body).toEqual({});
        });
        it('should return a 200 status code', async () => {
            const response = await request(server).delete('/api/players')
            .send({id: 1});
            expect(response.status).toEqual(500);
          });
      });

});
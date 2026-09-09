const request = require('supertest');
const app = require('../server'); 
const mongoose = require('mongoose');

describe('Authentication API', () => {
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should prevent registration without an email', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        name: 'Test User',
        password: 'password123'
      });

    expect(res.statusCode).not.toBe(201); 
  });
});
const request = require('supertest');
const app = require('../server'); 
const mongoose = require('mongoose');

describe('Board API', () => {
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should return 400 if creating a board without a name', async () => {
    const res = await request(app)
      .post('/api/boards')
      .send({}); // Sending empty body
    
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe('Board name is required');
  });

  it('should reject unauthenticated requests to get boards', async () => {
    const res = await request(app).get('/api/boards');
    // Should fail with 401 Unauthorized because we didn't send a token
    expect(res.statusCode).toBe(401); 
  });
});
const request = require('supertest');
const app = require('../server'); 
const mongoose = require('mongoose');

describe('Task API', () => {
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should reject unauthorized users from deleting a task', async () => {

    const fakeId = new mongoose.Types.ObjectId();
    const res = await request(app).delete(`/api/tasks/${fakeId}`);
    
    expect(res.statusCode).toBe(401); 
  });
});
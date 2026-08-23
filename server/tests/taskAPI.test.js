const request = require('supertest');
const express = require('express');
const taskRoutes = require('../routes/taskRoutes');


const app = express();
app.use(express.json());
app.use('/api/tasks', taskRoutes);

describe('Task API Endpoints', () => {

  it('should fetch all tasks and return a 200 status', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  
  it('should reject task creation without a title', async () => {
    const res = await request(app).post('/api/tasks').send({ description: 'No title' });
    expect(res.statusCode).toEqual(400);
  });

  
  it('should return 404 for an invalid task ID on update', async () => {
    const res = await request(app).put('/api/tasks/invalidID').send({ status: 'Done' });
    expect(res.statusCode).toEqual(404);
  });
});
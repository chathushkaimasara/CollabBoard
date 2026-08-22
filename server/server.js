const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'CollabBoard API is running!' });
});
app.use('/api/tasks', require('./routes/taskRoutes'));


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

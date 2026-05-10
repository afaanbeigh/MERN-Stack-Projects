const express = require('express');
const app = express();
const cors = require('cors');

const dbConnector = require('./db');
const productRoutes = require('./routes');

app.use(cors());
app.use(express.json());

dbConnector();

app.use('/api', productRoutes);

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
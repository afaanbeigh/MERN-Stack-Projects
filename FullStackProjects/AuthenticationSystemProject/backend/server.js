const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

const dbConnector = require('./db');
const authRoutes = require('./authRoutes');

app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(cookieParser());

dbConnector();

app.use('/auth', authRoutes);

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
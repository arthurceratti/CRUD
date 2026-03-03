// backend/app.js
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/users');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/users', routes);

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
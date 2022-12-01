const express = require('express');
const faker = require('faker');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server con express');
});

routerApi(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
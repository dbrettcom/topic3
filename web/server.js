const express = require('express');
const app = express();

const port = 3000;
const base = `${__dirname}/public`;

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(`${base}/index.html`);
});

app.get('/user/daniel', (req, res) => {
  res.sendFile(`${base}/daniel.html`);
});

app.get('/user/tim', (req, res) => {
  res.sendFile(`${base}/tim.html`);
});

app.get('/user/sarah', (req, res) => {
  res.sendFile(`${base}/sarah.html`);
});

app.get('*', (req, res) => {
  res.sendFile(`${base}/404.html`);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
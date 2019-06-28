const express = require('express');
const bodyParser = require('body-parser');
// const db = require('./db');

let currency = require('./currency.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send('Hello Express app');
});

app.get('/v1/coins', (req, res) => {
  res.send(currency.getCoins(req.query.amount));
});

app.listen(3000, () => console.log('server started'));

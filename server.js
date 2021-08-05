const express = require('express');
const app = express();
const port = 3000;
const controller = require('./db/controller');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(express.static('test'));

app.post('/winner', (req, res) => {
	controller.winner.post(req.body, res);
});

app.get('/winner', (req, res) => {
	controller.winner.get(res);
});

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});

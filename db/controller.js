const model = require('./model');

const controller = {
	winner: {
		post: function (data, res) {
			model.winner.post(data.player, (err, data) => {
				if (err) {
					res.sendStatus(404);
				} else {
					res.status(200).json(data);
				}
			});
		},
		get: function (res) {
			model.winner.get((err, data) => {
				if (err) {
					res.status(404).send(err);
				} else {
					res.status(200).json(data);
				}
			});
		},
	},
};

module.exports = controller;

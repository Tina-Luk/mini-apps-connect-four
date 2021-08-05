var mysql = require('mysql');
var db = mysql.createConnection({
	user: 'root',
	password: 'password',
	database: 'Connect4',
});

db.connect(console.log('Connected to db'));

const models = {
	winner: {
		post: function (data, callback) {
			db.query(`UPDATE Winner set wins = wins + 1 where Winner.Player='${data}';`, function (err, result) {
				if (err) {
					callback(err);
				} else {
					callback(null, result);
				}
			});
		},
		get: function (callback) {
			db.query(`SELECT * FROM Winner`, function (err, result) {
				if (err) {
					callback(err);
				} else {
					// console.log(result);
					callback(null, result);
				}
			});
		},
	},
};

module.exports = models;

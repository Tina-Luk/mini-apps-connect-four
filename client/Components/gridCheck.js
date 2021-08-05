let gridCheck = {
	rowsAndCols: function (grid) {
		let winner = null;
		for (let i = grid.length - 1; i >= 0; i--) {
			let [rowSum, colSum] = [0, 0];
			for (let j = grid.length - 1; j >= 0; j--) {
				rowSum += grid[j][i];
				colSum += grid[i][j];
				if (j > 0 && grid[i][j] !== grid[i][j - 1]) {
					colSum = 0;
				}
				if (i > 0 && grid[i][j] !== grid[i - 1][j]) {
					rowSum = 0;
				}
			}
			winner = rowSum === 4 || colSum === 4 ? 'Red' : rowSum === -4 || colSum === -4 ? 'Black' : null;
			if (winner !== null) {
				return winner;
			}
		}
		return winner;
	},

	minorDiagonal: function (grid) {
		let winner = null;
		let temp;
		for (let i = 0; i <= 2 * (grid.length - 1); i++) {
			temp = [];
			for (let j = grid[0].length - 1; j >= 0; j--) {
				let x = i - j;
				if (x >= 0 && x < grid.length) {
					temp.push(grid[j][x]);
				}
			}
			let sum = 0;
			for (let k = temp.length - 1; k >= 0; k--) {
				sum += temp[k];
				if (sum === 4) {
					winner = 'Red';
				} else if (sum === -4) {
					winner = 'Black';
				}
				if (k > 0 && temp[k] !== temp[k - 1]) {
					sum = 0;
				}
			}
		}
		return winner;
	},

	majorDiagonal: function (grid) {
		let winner = null;
		let temp;
		for (let i = 0; i <= 2 * (grid.length - 1); i++) {
			temp = [];
			for (let j = grid[0].length - 1; j >= 0; j--) {
				let x = i - (grid.length - j);
				if (x >= 0 && x < grid[0].length) {
					temp.push(grid[j][x]);
				}
			}
			let sum = 0;
			for (let k = temp.length - 1; k >= 0; k--) {
				sum += temp[k];
				if (sum === 4) {
					winner = 'Red';
				} else if (sum === -4) {
					winner = 'Black';
				}
				if (k > 0 && temp[k] !== temp[k - 1]) {
					sum = 0;
				}
			}
		}
		return winner;
	},

	allFilled: function (grid) {
		let allFilled = false;
		for (let i = grid.length - 1; i >= 0; i--) {
			if (grid[i]) {
				allFilled = grid[i].every((square) => square !== 0);
			}
		}
		return allFilled;
	},
};

export default gridCheck;

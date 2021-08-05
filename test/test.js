// import gridCheck from '../client/Components/gridCheck.js';

const gridCheck = require('../client/Components/gridCheck');

var assert = chai.assert,
	expect = chai.expect,
	should = chai.should(); // Note that should has to be executed

var foobar = {
	sayHello: function () {
		return 'Hello World!';
	},
};

describe('Foobar', function () {
	describe('#sayHello()', function () {
		it('should work with assert', function () {
			assert.equal(foobar.sayHello(), 'Hello World!');
		});

		it('should work with expect', function () {
			expect(foobar.sayHello()).to.equal('Hello World!');
		});

		it('should work with should', function () {
			foobar.sayHello().should.equal('Hello World!');
		});
	});
});

describe('Connect4', function () {
	describe('Row Wins', function () {
		let gridRow = [
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[-1, 1, 1, 1, 1, 0, 0],
			[0, 0, 0, 0, -1, 0, 0],
			[0, 0, 0, 0, -1, 1, 0],
			[0, 0, 0, -1, 1, 1, 0],
		];
		it('should show winner at Row', function () {
			expect(gridCheck.rowsAndCols(gridRow)).to.equal('Red');
		});
	});
	describe('Column Wins', function () {
		let gridCol = [
			[0, 1, 0, 0],
			[1, 1, 0, 0],
			[0, 1, -1, -1],
			[0, 1, -1, -1],
		];
		it('should show winner at Column', function () {
			expect(checkWinner(gridCol)).to.equal('Red');
		});
	});
	describe('Diagonal Wins', function () {
		let gridDiagonal = [
			[0, 1, 0, 1],
			[1, 1, 1, 0],
			[-1, 1, -1, -1],
			[1, -1, -1, -1],
		];
		it('should show winner at Diagonal', function () {
			expect(checkWinner(gridDiagonal)).to.equal('Red');
		});
	});
	describe('Tie', function () {
		let gridTie = [
			[-1, 1, 1, 1],
			[1, 1, -1, -1],
			[-1, 1, 1, -1],
			[1, -1, -1, -1],
		];
		it('should show tie', function () {
			expect(checkWinner(gridTie)).to.equal('Tie');
		});
	});
});

import React from 'react';
import Square from './square.jsx';
import Circle from './circle.jsx';
import Player from './player.jsx';
import Reset from './reset.jsx';
import gridCheck from './gridCheck.js';

class GridLayout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			grid: [
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
			],
			redTurn: true,
			winner: null,
		};
		this.onClickChangePlayer = this.onClickChangePlayer.bind(this);
		this.updateGrid = this.updateGrid.bind(this);
		this.checkWinner = this.checkWinner.bind(this);
		this.reset = this.reset.bind(this);
	}

	onClickChangePlayer(col) {
		if (!this.state.winner) {
			if (this.state.grid[0][col] !== 0) return;
			let gridUpdate = this.state.redTurn ? this.updateGrid('red', this.state.grid, col) : this.updateGrid('black', this.state.grid, col);
			let whoIsWinner = this.checkWinner(gridUpdate);
			this.setState({
				redTurn: !this.state.redTurn,
				grid: gridUpdate,
			});
			if (whoIsWinner) {
				this.setState({
					winner: whoIsWinner,
				});
			}
		}
	}

	updateGrid(color, grid, y) {
		let val = color === 'red' ? 1 : -1;
		for (let x = 6; x >= 0; x--) {
			if (grid[x][y] === 0) {
				grid[x][y] = val;
				break;
			}
		}
		return grid;
	}

	checkWinner(grid) {
		let winner = gridCheck.rowsAndCols(grid);
		let allFilled = gridCheck.allFilled(grid);
		if (winner === null) {
			winner = gridCheck.minorDiagonal(grid) || gridCheck.majorDiagonal(grid);
		}
		if (allFilled === true && winner === null) {
			winner = 'Tie';
		}
		return winner;
	}

	reset() {
		let redPlaysAgain = this.state.winner === 'Red' ? false : this.state.winner === 'Black' ? true : false;
		this.setState({
			grid: [
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
			],
			redTurn: redPlaysAgain,
			winner: null,
		});
	}

	render() {
		let [combos, circle] = [[], []];
		for (let i = 0; i < 7; i++) {
			for (let j = 0; j < 7; j++) {
				combos.push([i, j]);
			}
			circle.push(i);
		}
		return (
			<div className="game">
				<Player winner={this.state.winner} />
				<div className="container">
					{circle.map((y) => (
						<Circle y={y} color={this.state.redTurn ? '#ff6347' : '	black'} onClick={this.onClickChangePlayer} />
					))}
				</div>
				<div className="container grid">
					{combos.map((coordinate) => (
						<Square x={coordinate[0]} y={coordinate[1]} grid={this.state.grid} />
					))}
				</div>
				<Reset onClick={this.reset} />
			</div>
		);
	}
}

export default GridLayout;

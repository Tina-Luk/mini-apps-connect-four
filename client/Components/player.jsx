import React from 'react';

class Player extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			redWins: 0,
			blackWins: 0,
			winnerExists: false,
		};
		this.postWinnerData = this.postWinnerData.bind(this);
		this.getWinnerData = this.getWinnerData.bind(this);
		this.updateStats = this.updateStats.bind(this);
	}

	componentDidMount() {
		this.getWinnerData();
	}

	getWinnerData() {
		fetch('http://localhost:3000/winner')
			.then((res) => res.json())
			.then((result) => {
				this.setState({
					redWins: result[0].Wins,
					blackWins: result[1].Wins,
				});
			});
	}

	postWinnerData() {
		if (this.props.winner !== null && 'Tie') {
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ player: this.props.winner }),
			};
			fetch('http://localhost:3000/winner', requestOptions)
				.then((res) => res.json())
				.then(() => {
					console.log('POST');
				})
				.catch((err) => console.log(err));
		}
	}

	updateStats() {
		this.postWinnerData();
		this.getWinnerData();
	}

	render() {
		// console.log(this.props.winner);
		// if (this.props.winner === 'Red' || 'Black') {
		// 	this.updateStats();
		// }

		let red = <i className="fas fa-paw fa-lg" style={{ color: 'crimson' }}></i>;
		let black = <i className="fas fa-skull-crossbones fa-lg" style={{ color: 'black' }}></i>;
		let noWinner = (
			<h1 style={{ textAlign: 'center' }}>
				Connect 4 Players <br />
				{black} vs {red}
			</h1>
		);
		let winner =
			this.props.winner === 'Tie' ? (
				<h1 style={{ textAlign: 'center' }}>
					Tie! No winner {red} & {black}
				</h1>
			) : this.props.winner === 'Red' ? (
				<h1 style={{ textAlign: 'center' }}>{red} has Won</h1>
			) : (
				<h1 style={{ textAlign: 'center' }}>{black} has Won</h1>
			);

		return (
			<div className="player">
				<div>{this.props.winner === null ? noWinner : winner}</div>
				<div>
					<h3>Stats</h3>
					<div className="playerStats">
						<div>
							<p>
								{red} {this.state.redWins}
							</p>
							<p>
								{black} {this.state.blackWins}
							</p>
						</div>
						<div>
							<button className="ui button" onClick={this.updateStats}>
								Update
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Player;

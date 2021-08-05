import React from 'react';

class Square extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let [color, icon] = this.props.grid[this.props.x][this.props.y] === 1 ? ['#ff6347', 'fas fa-paw fa-3x'] : this.props.grid[this.props.x][this.props.y] === -1 ? ['black', 'fas fa-skull-crossbones fa-3x'] : ['rgb(239, 248, 244)', ''];
		return (
			<div className="square icon" style={{ backgroundColor: color }}>
				<i className={icon}></i>
			</div>
		);
	}
}

export default Square;

import React from 'react';

class Circle extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="circle icon" style={{ backgroundColor: `${this.props.color}` }} onClick={() => this.props.onClick(this.props.y)}>
				<i className={this.props.color === '#ff6347' ? 'fas fa-paw fa-3x' : 'fas fa-skull-crossbones fa-3x'}></i>
			</div>
		);
	}
}

export default Circle;

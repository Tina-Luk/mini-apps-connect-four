import React from 'react';

function Reset(props) {
	return (
		<div className="center">
			<button className="ui inverted blue button" onClick={props.onClick}>
				Reset Game
			</button>
		</div>
	);
}

export default Reset;

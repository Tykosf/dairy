import React from 'react';

const Comment = (props) => (
	<div className="comment">
		<div className="avatar"/>
		<p>{props.text}</p>
	</div>
)

export default Comment
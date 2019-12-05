import React from 'react';
import './item.css';

const Item = (props) => (
	<div className="item">
		<div className="item__left">
			<span onClick={props.changeActive}>{props.title}</span>
			<div className="amount"><span>{props.amount}</span></div>
		</div>
		<button onClick={props.deleteItem}>Delete</button>
	</div>
)

export default Item
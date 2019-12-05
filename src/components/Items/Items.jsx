import React from "react";
import Item from "./Item/Item";
import "./items.css";

const Items = (props) => {
	return <div className="items">
			<h3>Items</h3>
			<div className="items-add">
				<input 
					type="text"
					placeholder="Type name here..." 
					onChange={props.onChangeInputText}
					value={props.text}
				/>
				<button onClick={props.addItem}>Add new</button>
			</div>
			<div className="items-list">
				{props.items.map((item, index) => 
					item.comments !== undefined ? 
					<div className="item-container" key={index}>
						{index === props.active && <div className="line"/>}
						<Item 
							key={index}
							changeActive={props.changeActive.bind(this, index)}
							title={item.text} 
							amount={item.comments.length} 
							deleteItem={props.deleteItem.bind(this, index)}		
						/>
					</div>
					: <></>
				)}
			</div>		
		</div>
}

export default Items
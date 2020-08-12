import React from 'react'

import Item from './Item/Item'
import Button from '../Button/Button';
import './items.scss';

class Items extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedId: null
		}
	}

	setId = (id) => this.setState({ selectedId: id })

	render() {
		const { onChangeInputText, addItem, active, editMode, deleteItem,
			changeEditMode, changeActive, text, items } = this.props
		const addNewItem = editMode ? () => addItem(this.state.selectedId) : addItem

		return (
			<div className='items'>
				<h3>Items</h3>
				<div className='items-add'>
					<input
						type='text'
						placeholder='Type name here...' 
						onChange={(e) => onChangeInputText(e.target.value)}
						value={text}
					/>
					<Button onClick={addNewItem}>
						{editMode ? 'Save' : 'Add new'}
					</Button>
					<i className={`${editMode ? 'fas fa-check': 'fas fa-plus-circle'}`} onClick={addNewItem} />
				</div>
				<div className='items-list'>
					{!editMode && items.map((item, index) => (
						<div className='item-container' key={item.id}>
							{index === active && <div className='line'/>}
							<Item 
								key={index}
								changeActive={changeActive.bind(this, index)}
								title={item.text} 
								amount={item.comments.length} 
								deleteItem={deleteItem.bind(this, index)}
								editItem={(value) => { onChangeInputText(value); changeEditMode(); this.setId(item.id)}}
							/>
						</div>
					))}
				</div>
			</div>
		)
	}
}

export default Items
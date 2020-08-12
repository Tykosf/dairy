import React, { Component } from 'react'

import Modal from '../../Modal/Modal'
import Button from '../../Button/Button'
import './item.css'

class Item extends Component{

	toggleModal = () => {
		this.setState({ showModal: !this.state.showModal })
	}

	constructor(props) {
		super(props)
		this.state = {
			showModal: false
		}
	}

	render() {
		const { deleteItem, amount, title, changeActive, editItem } = this.props
		const { showModal } = this.state

		return (
			<div className='item'>
				<div className='item__left'>
					<span onClick={changeActive}>{title}</span>
					<div className='amount'><span>{amount}</span></div>
				</div>
				<div className='right-block'>
					<Button className='btn' onClick={() => editItem(title)}>Edit</Button>
					<Button className='btn btn-danger' onClick={this.toggleModal}>Delete</Button>
					<i className='fas fa-edit' onClick={() => editItem(title)} />
					<i className='fas fa-trash' onClick={this.toggleModal} />
				</div>
				{showModal && (
					<Modal
						onClose={this.toggleModal}
						onSave={deleteItem}
					>
						All data will be lost
					</Modal>
				)}
			</div>	
		)
	}
}

export default Item
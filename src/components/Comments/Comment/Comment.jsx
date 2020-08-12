import React, { Component, Fragment } from 'react';

import Button from '../../Button/Button'
import Modal from '../../Modal/Modal'

class Comment extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isButtonsVisible: false,
			showModal: false
		}
	}

	toggleModal = () => {
		this.setState({ showModal: !this.state.showModal })
	}

	toggleButtonsVisable = () =>	this.setState({ isButtonsVisible: !this.state.isButtonsVisible })

	deleteComment = () => {
		const { id, itemId, deleteComment } = this.props
		deleteComment(itemId, id)
		this.toggleButtonsVisable()
	}

	editComment = () => {
		const { id, text, onChangeCommentText, toggleEditMode } = this.props
		toggleEditMode(id)
		onChangeCommentText(text)
	}

	render() {
		const { isButtonsVisible, showModal } = this.state
		const { text } = this.props
		return (
			<Fragment>
				<div className="comment">
					<div className="avatar"/>
					<p>{text}</p>
					<div className='actions'>
						<i className={`fas fa-arrow-${isButtonsVisible ? 'right' : 'left'}`} onClick={this.toggleButtonsVisable} />
						<div className={isButtonsVisible ? 'action-buttons action-buttons--out' : 'action-buttons'}>
							<Button className='btn' onClick={this.editComment}>Edit</Button>
							<Button className='btn-danger' onClick={this.toggleModal}>Delete</Button>
						</div> 
					</div>
				</div>
				{showModal && (
					<Modal
						onClose={this.toggleModal}
						onSave={this.deleteComment}
					>
						This comment will be lost
					</Modal>
				)}
			</Fragment>
		)
	}
}

export default Comment
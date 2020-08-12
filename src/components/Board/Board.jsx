import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Items from '../Items/Items'
import Comments from '../Comments/Comments'

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [], 
			inputText: '',
			active: -1,
			commentText: '',
			editMode: false
		}
	}

	componentDidMount() {
		if(this.state.items.length === 0) { 
			this.setState(JSON.parse(localStorage.getItem('currentState')));
			window.addEventListener('beforeunload', this.componentCleanup);
		}
	}

	componentCleanup = () => {
		this.setState({ inputText: '', commentText: '', editMode: false }) 	
		localStorage.setItem('currentState', JSON.stringify(this.state));
	}

	componentWillUnmount() {
		this.componentCleanup();
		window.removeEventListener('beforeunload', this.componentCleanup);
	}
	
	addItem = (id) => {
		const { inputText, items, editMode } = this.state
		if (editMode && id) {
			let selectedItem = items.find(item => item.id === id)
			selectedItem.text = inputText
			const filteredItems = items.filter(item => {
				if (item.id === id) return selectedItem
				return item
			})
			this.setState({ items: filteredItems	})
			this.changeEditMode();
			this.onChangeInputText('')
			return;
		}

		if (!inputText.trim().length) return;
		this.setState({
			items: [...items, { id: uuidv4(), text: inputText, comments: [] }],
			inputText: ''
		})
	}
	
	deleteItem = (id) => {
		const { items, active } = this.state
		const activeItem = items.length-1 === active ? active-1 : active
		this.setState({ 
			items: items.filter((_item,index) => index !== id),
			active: activeItem
		})
	}

	addComment = (event) => {
		const { commentAddKeyCode } = this.props
		const defaultKeyCodes = (event.keyCode === 10 || event.keyCode === 13) && event.ctrlKey
		const addKey = commentAddKeyCode ? event.keyCode === commentAddKeyCode && !event.ctrlKey & !event.shiftKey : defaultKeyCodes
		const { items, commentText, active } = this.state
		if (!commentText.trim().length) return;
		if (addKey) {
			this.setState({ items: items.map((_item, index) => {
					if(index === active) 
						_item.comments.push({id: uuidv4(), text: commentText });
					return _item;
				}),
				commentText: ''
			})
		}
	}

	editComment = (id) => {
		const { items, active, commentText } = this.state
		this.setState({ items: items.map((item, index) => {
				if (index === active) {
					const newComments = item.comments.map(comment => {
						if (comment.id === id) {
							return ({ ...comment, text: commentText })
						}
						return comment
					})
					return ({ ...item, comments: newComments })
				}
				return item
			}),
			commentText: ''
		})
	}

	deleteComment = (itemId, id) => {
		const { items } = this.state
		this.setState({ items: items.map((item, index) => {
				if (index === itemId) {
					return ({ ...item, comments: item.comments.filter(comment => comment.id !== id)})
				}
				return item
			})
		})
	}

	onChangeInputText = (value) => this.setState({ inputText: value });

	onChangeCommentText = (value) => {
		this.setState({ commentText: value });
	}

	changeEditMode = () => this.setState({ editMode: !this.state.editMode })

	changeActive = (id) => {
		this.setState({ active: id});
	}

	render() {
		const { items, active, inputText, commentText, editMode } = this.state
		const comments = this.state.items[this.state.active] !== undefined ? this.state.items[this.state.active].comments : [];
		return (
			<React.Fragment>
				<Items 
					items={items}
					addItem={this.addItem}
					deleteItem={this.deleteItem}
					onChangeInputText={this.onChangeInputText}
					active={active}
					text={inputText}
					changeActive={this.changeActive}
					editMode={editMode}
					changeEditMode={this.changeEditMode}
				/>
				<Comments 
					id={active+1} 
					comments={comments}
					addComment={this.addComment}
					onChangeCommentText={this.onChangeCommentText}
					text={commentText}
					deleteComment={this.deleteComment}
					commentRef={this.commentRef}
					editComment={this.editComment}
				/>
			</React.Fragment>
		)
	} 
}

export default Board
import React, { Component } from 'react';
import Items from '../Items/Items';
import Comments from '../Comments/Comments';

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [], 
			inputText: '',
			active: -1,
			commentText: ''
		};
		this.commentRef = React.createRef();
	}

	componentDidMount() {
		if(this.state.items.length === 0) { 
			this.setState(JSON.parse(localStorage.getItem('currentState')));
			window.addEventListener('beforeunload', this.componentCleanup);
		}
	}

	componentCleanup = () => {
		this.setState({ inputText: '', commentText: '' }) 	
		localStorage.setItem('currentState', JSON.stringify(this.state));
	}

	componentWillUnmount() {
		this.componentCleanup();
		window.removeEventListener('beforeunload', this.componentCleanup);
	}
	
	addItem = () => {
		if(!this.state.inputText.trim().length) return;
		this.setState({ 
			items: [...this.state.items, { text: this.state.inputText, comments: [] }],
			inputText: ''
		});
	}
	
	deleteItem = (id) => {
		const activeItem = this.state.items.length-1 === this.state.active ? this.state.active-1 : this.state.active;
		this.setState({ 
			items: this.state.items.filter((_item,index) => index !== id),
			active: activeItem
		})
	}

	addComment = (event) => {
		if(!this.state.commentText.trim().length) return;
		if ((event.keyCode === 10 || event.keyCode === 13) && event.ctrlKey) {
			this.setState({ items: this.state.items.map((_item, index) => {
					if(index === this.state.active) 
						_item.comments.push(this.state.commentText);
					return _item;
				}),
				commentText: ''
			})
		}
	}

	onChangeInputText = (event) => {
		this.setState({ inputText: event.target.value });
	}

	onChangeCommentText = (event) => {
		this.setState({ commentText: event.target.value });
	} 

	changeActive = (id) => {
		this.setState({ active: id});
		this.commentRef.current.focus();
	}

	render() {
		const comments = this.state.items[this.state.active] !== undefined ? this.state.items[this.state.active].comments : [];
		return (
			<React.Fragment>
				<Items 
					items={this.state.items}
					addItem={this.addItem}
					deleteItem={this.deleteItem}
					onChangeInputText={this.onChangeInputText}
					active={this.state.active}
					text={this.state.inputText}
					changeActive={this.changeActive}
				/>
				<Comments 
					id={this.state.active+1} 
					comments={comments}
					addComment={this.addComment}
					onChangeCommentText={this.onChangeCommentText}
					text={this.state.commentText}	
					commentRef={this.commentRef}
				/>
			</React.Fragment>
		)
	} 
}

export default Board
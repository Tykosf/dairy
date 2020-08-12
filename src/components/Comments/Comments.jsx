import React, { Component, Fragment } from 'react';
import Comment from './Comment/Comment';

import './comments.scss';

class Comments  extends Component {

	constructor(props) {
		super(props)
		this.state = {
			isEditModeActive: false,
			selectedId: null
		}
	}

	toggleEditMode = (id) => this.setState({ isEditModeActive: !this.state.isEditModeActive, selectedId: id  })

	render() {
		const { id, comments, addComment, onChangeCommentText, text, editComment, deleteComment } = this.props
		const { isEditModeActive, selectedId } = this.state
		return (
			<div className='comments'>
			{!id ? <h2>No comments</h2> 
				: (
					<Fragment>
						<h2>Comments #{id}</h2>
						<div className='comments-list'>
							{!isEditModeActive && comments && comments.map((_comment, index) =>
								<Comment
									key={index}
									text={_comment.text}
									id={_comment.id}
									itemId={id-1}
									deleteComment={deleteComment}
									toggleEditMode={this.toggleEditMode}
									onChangeCommentText={onChangeCommentText}
								/>
							)}
						</div>
						<div className='comment-add'>
							<div className='avatar-choose'/>
							<textarea
								name='comment'
								rows='3'
								onKeyDown={!isEditModeActive ? addComment : ((event) => { if (event.keyCode === 13) { editComment(selectedId); this.toggleEditMode() } })}
								onChange={(event) => onChangeCommentText(event.target.value)}
								value={text}
							/>
						</div>
					</Fragment>
				)
			}
		</div>	
		)
	}
}

export default Comments
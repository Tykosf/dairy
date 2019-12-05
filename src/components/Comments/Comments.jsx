import React from 'react';
import Comment from './Comment/Comment';
import './comments.css';

const Comments = (props) => (
	<div className="comments">
		{!props.id ? <h2>No comments</h2> 
		:
		<React.Fragment>
			<h2>Comments #{props.id}</h2>
			<div className="comments-list">
				{props.comments && props.comments.map((_comment, index) =>
					<Comment key={index} text={_comment} />
				)}
			</div>
			<div className="comment-add">
				<div className="avatar-choose"/>
				<textarea 
					name="comment" 
					rows="3" 
					onKeyDown={props.addComment} 
					onChange={props.onChangeCommentText}
					value={props.text}
					ref={props.commentRef}
				/>
			</div>
		</React.Fragment>
		}
	</div>
		
)

export default Comments
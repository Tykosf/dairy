import React from 'react';
import { Link } from 'react-router-dom'

import './header.scss';

const Header = (props) => (
	<header>
		<Link to='/'>
			<h1>diary app</h1>
		</Link>
		<p>Comment with no sense</p>
		<div className='user-settings'>
			<div className='menu-item'>
				<i className="fas fa-cog"></i>
				<Link to='/settings'>Settings</Link>
			</div>
		</div>
	</header>
)

export default Header
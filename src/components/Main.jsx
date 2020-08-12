import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Board from './Board/Board';
import { Settings } from './Settings/Settings';

const Main = (props) => {
	console.log(props)
	return <Switch>
		<Route exact path='/' component={() => <Board {...props} />} />
		<Route exact path='/settings' component={()=> <Settings {...props} />} />
	</Switch>
}

export default Main
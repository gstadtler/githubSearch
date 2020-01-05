import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import UserInfo from './UserInfo';

export default class App extends Component{
    render() {
		return(
			<div>
				<Router>
					<Switch>
						<Route 
							exact path={"/"} 
							render={props => (
								<Home
									{...props}
								/>
							)} 
						/>
						<Route 
							exact path={"/user-info"} 
							render={props => (
								<UserInfo
									{...props}
								/>
							)} 
						/>	
					</Switch>
				</Router>
			</div>
		)
	}
}
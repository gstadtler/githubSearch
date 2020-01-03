import React, { Component } from 'react';
import { BrowserRouter as Router, withRouter, Switch, Route } from 'react-router-dom';
import User from './User';
import Home from './Home';
import '../style/App.css';

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
							exact path={"/user"} 
							render={props => (
								<User 
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

// export default withRouter(App);
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import UserInfo from './UserInfo';

export default class App extends Component{
	constructor(props){
		super(props);
	}

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
									{...props} username={this.props.username}
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
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

export default class Home extends Component{
    constructor(props){
        super(props);
    
        this.state = {
            username: ""
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleClick(event){
        console.log("buscando");
        event.preventDefault();

    }
    render(){
        return(
            <div className="home">
                <div className="box-center">
                    <h2 className="title">GitHub</h2>
                    <p className="title title2">Search</p>
                    <input 
                        className="username-field" 
                        type="text"
                        name="username" 
                        placeholder="Enter with your github username"
                        value={this.state.username} 
                        onChange={this.handleChange} />
                    <input 
                        className="submit-button" 
                        type="submit" 
                        value="search" 
                        onClick={this.handleClick} />
                </div>
            </div>
        )
    }
}

//export default withRouter(Home);
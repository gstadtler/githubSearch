import React, { Component } from "react";
import Home from './Home';
//import { withRouter } from "react-router-dom";

export default class UserInfo extends Component {
    constructor(props) {
        super(props);

    this.state = {
        avatar: "some image",
        email: "some email",
        seguidores: "some followers",
        seguindo: "some friends",
        bio: "something about me"
    };

    this.handleUserInfo = this.handleUserInfo.bind(this);
    //this.handleRepos = this.handleRepos.bind(this);
    this.setUserData = this.setUserData.bind(this);
    //this.setRepoData = this.setRepoData.bind(this);
    }

    handleUserInfo() {
        fetch(`https://api.github.com/users/${this.props.username}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
    }

    handleRepos(){

    }

    setUserData(avatar_url, email, followers, following, bio) {
        this.setState({
            avatar: avatar_url,
            email: email,
            seguidores: followers,
            seguindo: following,
            bio: bio
        });
    }

    setRepoData(){

    }


    render() {
        return (
        <div>
            <input type="submit" onClick={this.handleUserInfo}></input>
            <div className="card">
                <img src={this.state.avatar}></img>
                <div className="container">
                    <h3>{this.state.email}</h3>
                    <h3>{this.state.seguidores}</h3>
                    <h3>{this.state.seguindo}</h3>
                    <h3>{this.state.bio}</h3>
                </div>
            </div>
            <div className="repos card">
                <h2>test test test teste</h2>
            </div>
        </div>
        );
    }
}

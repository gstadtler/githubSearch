import React, { Component } from "react";

export default class UserInfo extends Component {
    constructor(props) {
        super(props);

        const data = this.props.location.state
        this.state = {
            user_username: data.username,
            user_avatar: data.avatar,
            user_email: data.email,
            user_followers: data.seguidores,
            user_following: data.seguindo,
            user_bio: data.bio,
            user_repos_data: data.repos_data
        };
    }

    render() {
        return (
            <div>
                <div className="card">
                    <img src={this.state.user_avatar} alt=""/>
                    <div className="container">
                        <h3>{this.state.user_username}</h3>
                        <h3>{this.state.user_email}</h3>
                        <h3>{this.state.user_followers}</h3>
                        <h3>{this.state.user_following}</h3>
                        <h3>{this.state.user_bio}</h3>
                    </div> 
                </div>
                {this.state.user_repos_data.map(repo => (
                <div className="repos card" key={repo.id}>
                    <h2>{repo.name}</h2>
                </div>
                ))}
            </div>
        );
    }
}
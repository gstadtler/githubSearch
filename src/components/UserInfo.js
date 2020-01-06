import React, { Component } from "react";

export default class UserInfo extends Component {
    constructor(props) {
        super(props);

        const data = this.props.location.state;
        this.state = {
            user_username: data.username,
            user_avatar: data.avatar,
            user_email: data.email,
            user_followers: data.seguidores,
            user_following: data.seguindo,
            user_bio: data.bio,
            user_repos_data: data.repos_data,
        };
    }

    render() {
        return (
            <div>
                <React.Fragment>
                    <link
                        rel="stylesheet"
                        href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
                        integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
                        crossOrigin="anonymous"
                    />
                </React.Fragment>
                <div className="box-center-2">
                    <h2 className="title">GitHub</h2>
                    <p className="title title2-results-page">Search</p>
                    <input
                        className="username-field"
                        type="text"
                        name="username"
                        value={this.state.user_username}
                        readOnly
                    />
                </div>
                <div className="card">
                    <img src={this.state.user_avatar} alt="" width="100%" />
                    <div className="container">
                        <h3>@{this.state.user_username}</h3>
                        <h3>{this.state.user_email}</h3>
                        <p>
                            <i className="fas fa-users"> {this.state.user_followers}</i>
                        </p>
                        <p>
                            <i className="fas fa-user-check"></i> {this.state.user_following}
                        </p>
                        <p>{this.state.user_bio}</p>
                    </div>
                </div>
                <div className="repos">
                    {this.state.user_repos_data.map(repo => (
                        <div className="repos-card" key={repo.id}>
                            <p>{repo.name}</p>
                            <p><i className="fas fa-star"> {repo.stargazers_count}</i></p>
                        </div>
                    ))};
                </div>
            </div>
        );
    }
}

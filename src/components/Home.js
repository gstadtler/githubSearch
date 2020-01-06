import React, { Component } from 'react';
import Popup from './Popup';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showPopup: false,
            username: "",
            avatar: "",
            email: "",
            seguidores: "",
            seguindo: "",
            bio: "",
            repos_data: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.togglePopup = this.togglePopup.bind(this);
        this.setUserInfo = this.setUserInfo.bind(this);
        this.repoSearch = this.repoSearch.bind(this);
        this.setReposData = this.setReposData.bind(this);
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleClick() {
        fetch(`https://api.github.com/users/${this.state.username}`)
            .then(res => res.json())
            .then(data => {
                if (data.message === "Not Found") {
                    this.togglePopup();
                } else {
                    this.setUserInfo(data);
                    this.repoSearch();
                }
            });
    }

    setUserInfo({ avatar_url, email, followers, following, bio }) {
        this.setState({
            avatar: avatar_url,
            email: email,
            seguidores: followers,
            seguindo: following,
            bio: bio
        });
    }

    setReposData(data) {
        this.setState({
            repos_data: data
        });
    }

    repoSearch() {
        fetch(`https://api.github.com/users/${this.state.username}/repos`)
            .then(res => res.json())
            .then(data => {
                this.setReposData(data);
                this.props.history.push("/user-info", { ...this.state });
            })
    }

    render() {
        return (
            <div>
                <div className="box-center">
                    <h2 className="title">GitHub</h2>
                    <p className="title title2">Search</p>
                    <input
                        className="username-field"
                        type="text"
                        name="username"
                        placeholder="Enter with your github username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <input
                        className="submit-button"
                        type="submit"
                        value="search"
                        onClick={this.handleClick}
                    />
                </div>
                <div>
                    {this.state.showPopup ?
                        <Popup
                            text="O usuário não foi encontrado!"
                            closePopup={this.togglePopup}
                        />
                        : null
                    }
                </div>
            </div>
        );
    }
}

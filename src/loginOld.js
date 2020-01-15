import React, { Component } from 'react';
// import { withRouter } from "react-router-dom";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            items: []
        };
    }

    componentDidMount() {
        fetch('https://swapi.co/api/people/?format=json')
            .then(res => res.json())
            .then(json => {
                if (json && json.results) {
                    this.setState({
                        items: json.results
                    });
                } else {
                    this.setState({
                        items: []
                    })
                }
            })
    }

    handleChange = (event) => {
        let val = event.target.value;
        let name = event.target.name;
        this.setState({ [name]: val });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { items, username, password } = this.state;

        const uname = items && items.length > 0 ? items.filter(val => val.name === username) : "";

        if (uname && uname.length > 0) {
            if (uname[0].birth_year === password) {
                // success login
                this.props.history.push("/dashboard");
            } else {
                // wrong password 
                document.getElementById("errMsg").innerHTML = `<span>Password not match !</span>`
            }
        } else {
            // user not found
            document.getElementById("errMsg").innerHTML = `<span>User not found !</span>`
        }
    }

    render() {

        return (
            <div className="loginBlock">
                <form onSubmit={this.handleSubmit}>
                    <div className="inputBlock">
                        <label>username: </label>
                        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <div className="inputBlock">
                        <label>password: </label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <input type="submit" className="btnCustom" />
                    <div id="errMsg" style={{ color: "red", textAlign: "center" }}></div>
                </form>
            </div>
        );
    }
}
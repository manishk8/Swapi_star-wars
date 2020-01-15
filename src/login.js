import React, { Component } from 'react';
// import { withRouter } from "react-router-dom";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            url: ""
        };
    }

    handleChange = (event) => {
        let val = event.target.value;
        let name = event.target.name;
        this.setState({ [name]: val });
    }

    handleSubmit = () => {
        // event.preventDefault();

    }

    render() {

        return (
            <div className="loginBlock">
                <form >
                    <div className="inputBlock">
                        <label>Name: </label>
                        <input type="text" name="name" onChange={this.handleChange} />
                    </div>
                    <div className="inputBlock">
                        <label>Email: </label>
                        <input type="email" name="email" onChange={this.handleChange} />
                    </div>
                    <div className="inputBlock">
                        <label>Phone: </label>
                        <input type="phone" name="phone" onChange={this.handleChange} />
                    </div>
                    <div className="inputBlock">
                        <label>URL: </label>
                        <input type="url" name="url" onChange={this.handleChange} />
                    </div>
                    <div className="inputBlock">
                        <a href="#" onClick={this.handleSubmit} >Submit</a>
                    </div>
                    <div id="errMsg" style={{ color: "red", textAlign: "center" }}></div>
                </form>
            </div>
        );
    }
}
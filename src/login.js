import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            password: ""
        };
    }

    handleChange = (event) => {
        let val = event.target.value;
        let name = event.target.name;
        this.setState({ [name]: val });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, email, phone, password } = this.state;

        if (name === "") {
            document.getElementById("errMsg").innerHTML = `<span>Please Enter Your Name !</span>`
        }
        else if (email === "") {
            document.getElementById("errMsg").innerHTML = `<span>Please Enter Your Email !</span>`
        }
        else if (phone === "") {
            document.getElementById("errMsg").innerHTML = `<span>Please Enter Your Phone !</span>`
        }
        else if (password === "") {
            document.getElementById("errMsg").innerHTML = `<span>Please Enter Your Password !</span>`
        }
        else {
            this.props.history.push("/dashboard");
        }

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
                        <label>Password: </label>
                        <input type="password" name="password" onChange={this.handleChange} />
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
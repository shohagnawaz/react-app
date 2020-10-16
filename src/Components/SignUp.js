import React, { Component } from 'react';

class SignUp extends Component {

    constructor() {
        super();
        this.state = {
            fname: " ",
            lname: " ",
            email: " ",
            mobile: " "
        }
    }

    onChangeHandler = (event) => {
        let inputName = event.target.name;
        let inputValue = event.target.value;
        this.setState({ [inputName]: inputValue });

        if (inputName === "fname") {
            let namePattern = /^([a-zA-Z]){2,30}$/;
            if (!namePattern.text(inputValue)) {
                this.setState({ fname: "First name is not valid" });
            }
        }

        if (inputName === "lname") {
            let namePattern = /^([a-zA-Z]){2,30}$/;
            if (!namePattern.text(inputValue)) {
                this.setState({ lname: "Last name is not valid" });
            }
        }

        if (inputName === "email") {
            let emailPattern = /\S+@\S+\.\S+/;
            if (!emailPattern.text(inputValue)) {
                this.setState({ email: "Email is not valid" });
            }
        }

        if (inputName === "mobile") {
            if (!Number(inputValue)) {
                this.setState({ mobile: "Mobile number is not valid" })
            }
        }
    }

    render() {
        return (
            <div>
                <p>First Name: {this.state.fname}</p>
                <p>Last Name: {this.state.lname}</p>
                <p>Email: {this.state.email}</p>
                <p>Mobile: {this.state.mobile}</p>

                <form>
                    <input onChange={this.onChangeHandler} name="fname" type="text" placeholder="First Name" /><br></br>
                    <input onChange={this.onChangeHandler} name="lname" type="text" placeholder="Last Name" /><br></br>
                    <input onChange={this.onChangeHandler} name="email" type="text" placeholder="Email" /><br></br>
                    <input onChange={this.onChangeHandler} name="mobile" type="text" placeholder="Mobile" /><br></br>
                    <input onChange={this.onChangeHandler} name="submit" type="submit" value="Save Now" />
                </form>
            </div>
        );
    }
}

export default SignUp;
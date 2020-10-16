import React, { Component } from 'react';

class FormEx extends Component {

    constructor() {
        super()
        this.state = {
            username: " "
        }
    }

    onChangeHandler = (event) => {
        let myname = event.target.name;
        let myvalue = event.target.value;
        this.setState({ [myname]: myvalue });
    }

    onSubmitHandler = () => {
        alert(this.state.username)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <p>My first form</p>
                    <p>{this.state.username}</p>
                    <input name="username" onChange={this.onChangeHandler} type="text" placeholder="Your Name" /><br></br>
                    <input type="submit" value="submit now" />
                </form>
            </div>
        );
    }
}

export default FormEx;
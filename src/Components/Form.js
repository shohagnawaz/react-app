import React, { Component } from 'react';

class Form extends Component {

    constructor() {
        super()
        this.state = {
            name: " "
        }
    }

    onChangeHandler = (event) => {
        let newName = event.target.value;
        this.setState({ name: newName })
    }

    render() {
        return (
            <div>
                <form action="">
                    <p>My first form</p>
                    <p>{this.state.name}</p>
                    <input onChange={this.onChangeHandler} type="text" placeholder="Your Name" /><br></br>
                    <input type="submit" value="submit now" />
                </form>
            </div>
        );
    }
}

export default Form;
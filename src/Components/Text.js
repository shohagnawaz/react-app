import React, { Component } from 'react';

class Text extends Component {

    constructor() {
        super();
        this.state = {
            userInput: " "
        }
    }

    onChangeHandler=(event)=>{
        let inputValue = event.target.value;
        this.setState({userInput: inputValue})
    }

    render() {
        return (
            <div>
                <textarea onChange={this.onChangeHandler} placeholder="Text here" />
                <p>{this.state.userInput}</p>
            </div>
        )
    }
}

export default Text;
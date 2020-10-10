import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class NewDemo extends Component {

    myFun() {
        let container = document.getElementById("myId");
        let element = <h1>My name is Shohag. I am from ReactDOM.</h1>
        let callback = function() {
            alert("Hi I am callback");
        }
        ReactDOM.render(element, container, callback);
    }

    render() {
        return (
            <div>
                <button onClick={this.myFun}>Change</button>
                <h1 id="myId">My name is Nawaz</h1>
            </div>
        );
    }
}

export default NewDemo;
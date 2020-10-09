import React, { Component } from 'react';

class Welcome extends Component {

    doThisClass(a) {
        alert(a)
    }
    render() {
        return <div>
                <button onClick={this.doThisClass.bind(this, "Hello I am from Class Para")}>Click Me</button>
                <h1>I am from {this.props.abc}</h1>
        </div>
    };
}

export default Welcome;
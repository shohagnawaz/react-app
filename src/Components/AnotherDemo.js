import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class AnotherDemo extends Component {

    changeImg() {
        let imaId = document.getElementById("imgId");
        ReactDOM.findDOMNode(imaId).src="";
    }

    render () {
        return (
            <div>
                <button>Change Image</button>
                <br></br>
                <img id="imgId" src=""></img>
            </div>
        );
    }
}

export default AnotherDemo;
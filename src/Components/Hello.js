import React from 'react';

function Hello(props) {

    function DoThis(a) {
        alert(a)
    }

    return (
        <div>
            <button onClick={DoThis.bind(this, "Hello I am from Para")}>Click Me</button>
            <h1>Name: {props.name} and Age: {props.age}</h1>
        </div>
    );
}

export default Hello;
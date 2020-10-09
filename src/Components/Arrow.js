import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// function Arrow() {
//     return (
//         <div>
//             <h1>I am from arrow.</h1>
//         </div>
//     );
// }

const Arrow = () => {

    const AlertMe = (a) => {
        alert(a)
    }

    return (
        <div>
            <button onClick={AlertMe.bind(this, "I am from arrow function")} className="btn btn-danger">Arrow</button>
        </div>
    )
}

export default Arrow;
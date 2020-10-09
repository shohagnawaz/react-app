import React,{Component} from 'react';

class State extends Component {
    constructor() {
        super()
        this.state = {
            name: "Md. Shah Nawaz Shohag",
            age: 34,
            height: "5 feet 6 inch",
            color: "Dark Blue"
        }
    }

    render() {
        return (
            <div>
                <h1>Name: {this.state.name}</h1>
                <h1>Name: {this.state.age}</h1>
                <h1>Name: {this.state.height}</h1>
                <h1>Name: {this.state.color}</h1>
            </div>
        )
    }
}

export default State;

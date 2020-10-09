import React,{Component} from 'react';

class State extends Component {
    constructor() {
        super()
        this.state = {
            name: "Md. Shah Nawaz Shohag",
            age: ["20", "30", "40", "50"],
            height: "5 feet 6 inch",
            color: "Dark Blue",
            weight: {
                class7: ["10", "20", "30", "40"],
                class8: 45,
                class9: 50,
                class10: 60
            }
        }
    }

    render() {
        return (
            <div>
                <h1>Name: {this.state.name}</h1>
                <h1>Age: {this.state.age[1]}</h1>
                <h1>Height: {this.state.height}</h1>
                <h1>Color: {this.state.color}</h1>
                <h1>Weight: {this.state.weight.class7[2]}</h1>
            </div>
        )
    }
}

export default State;

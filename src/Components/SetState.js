import React,{ Component } from "react";

class SetState extends Component{

    constructor() {
        super()

        this.state = {
            name: "Mohammad Nawaz"
        }
    }

    changeName(a) {
        this.setState({name:a})
    }

    render() {
        return(
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.changeName.bind(this, "Mohammad Shohag")}>Change Name</button>
            </div>
        )
    }
}

export default SetState;
import React, { Component } from 'react';

class Select extends Component {

    constructor() {
        super();
        this.state = {
            city1: "Dhaka",
            city2: "Khulna",
            city3: "Jessore",
            city4: "Narail",
            city5: "Gopalgonj",
            city6: "Faridpur",
            auto: "Narail",
            show: " "
        }
    }

    onChangeHandler = (event) => {
        let showValue = event.target.value;
        this.setState({ show: showValue, auto: showValue });
    }

    render() {
        return (
            <div>
                <p>{this.state.show}</p>
                <select onChange={this.onChangeHandler} value={this.state.auto}>
                    <option>{this.state.city1}</option>
                    <option>{this.state.city2}</option>
                    <option>{this.state.city3}</option>
                    <option>{this.state.city4}</option>
                    <option>{this.state.city5}</option>
                    <option>{this.state.city6}</option>
                </select>
            </div>
        )
    }
}

export default Select;
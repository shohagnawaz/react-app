import React, { Component } from 'react';

class JsonArray extends Component {

    render() {

        const myList = [
            {
                city: "Dhaka",
                zipcode: "6000"
            },
            {
                city: "Khulna",
                zipcode: "5000"
            },
            {
                city: "Jessore",
                zipcode: "4000"
            },
            {
                city: "Narail",
                zipcode: "3000"
            }
        ]

        const dataItem = myList.map((data) => {
            return <option>{data.city}</option>
        });
        const dataItem2 = myList.map((data) => {
            return <option>{data.zipcode}</option>
        });

        return (
            <div>
                <select>{dataItem}</select>
                <select>{dataItem2}</select>
            </div>
        )
    }
}

export default JsonArray;
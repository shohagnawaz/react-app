import React, { Component } from 'react';

class List extends Component {

    myDataChild = (data) => {
        return <option>{data}</option>
    }

    render() {
        const country = ["Bangladesh", "Pakistan", "India", "Nepal"];
        const dataItems = country.map(this.myDataChild);

        return (
            <div>
                <select>{dataItems}</select>
            </div>
        );
    }
}

export default List;
import React from "react";

export default class List extends React.Component {
    render() {
        let list = this.props.list;
        return (
            list.map((key, step) => {
                return (
                    <li key={step}>
                        {key.name} {key.bday} <button type="button">Edit</button>
                    </li>
                )
            })
        );
    }
}
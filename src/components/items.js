import React from 'react';
import axios from 'axios';

export default class Items extends React.Component {
    state = {
        items: []
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/items')
        .then(res => {
            const items = res.data;
            this.setState({ items });
        })
    }

    render() {
        return (
            <div className="container">
                <ul>
                    {this.state.items.map(item => <li>{item.name}{item.description}{item.value}</li>)}
                </ul>
            </div>
        )
    }
}
import React from 'react';
import axios from 'axios';
import './item.css';

export default class Item extends React.Component {
    state = {
        items: {}
    }

    handleChange = event => {
        this.setState ({ item: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const item = {
            name: this.state.name,
            description: this.state.description,
            value: this.state.value
        };

        axios.post('http://localhost:3000/api/items', { item })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Item Name:
                        <input type="text" name="name" onChange={this.handleChange} />
                    </label>
                    <label>
                        Description:
                        <input type="text" name="description" onChange={this.handleChange} />
                    </label>
                    <label>
                        Item Value:
                        <input type="text" name="value" onChange={this.handleChange} />
                    </label>
                    <button type='submit'>Save</button>
                </form>
            </div>
        )
    }
}
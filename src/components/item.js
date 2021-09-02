import React from 'react';
import axios from 'axios';

export default class items extends React.Component {
    state = {
        item: {}
    }
    // HOW DO THESE LINE UP WITH THE SCHEMA OR DO THEY NOT?

    handleChange = event => {
        this.setState ({ item: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const item = {
            name: this.state.name,
            event: this.state.event,
            description: this.state.description,
            value: this.state.value
        };

        axios.post('https://jeffmcrockett.github.io/bidprosapi/items', { item })
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
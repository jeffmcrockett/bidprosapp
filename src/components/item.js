import React from 'react';
import axios from 'axios';
import './item.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class Item extends React.Component {
    state = {
        items: {}
    }

    handleChange = event => {
        this.setState({ item: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const item = {
            name: this.state.name,
            description: this.state.description,
            value: this.state.value
        };

        axios.post('http://localhost:3000/api/items/:eventId', { item })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div className="itemContainer2">
                <h1 className="itemTitle">Create/Update Item</h1>
                <form className="itemForm" noValidate>
                    <TextField variant="outlined" margin="normal" required
                        fullWidth id="name" label="Item Name" name="name"
                        autoComplete="name" autoFocus />
                    <TextField variant="outlined" margin="normal" required
                        fullWidth name="description" label="Description" type="description"
                        id="description" autoComplete="description" />
                    <TextField variant="outlined" margin="normal" required
                        fullWidth name="value" label="Item Value" type="value"
                        id="value" autoComplete="value" />
                    <Button type="submit" fullWidth variant="contained" color="primary" className="submitItem">
                        Save Changes
                    </Button>
                </form>
            </div>
        )
    }
}
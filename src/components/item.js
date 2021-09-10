import React from 'react';
import axios from 'axios';
import './item.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class Item extends React.Component {
    state = {
        name: '',
        description: '',
        value: '',
        _id: null
    }

    componentDidMount() {
        if(window.location.pathname.split("/")[3] !== 'undefined') {
            let itemId = window.location.pathname.split("/")[3];
            axios.get('http://bidprosapi.herokuapp.com/api/items/'+itemId)
                .then(res => {
                    const item = res.data[0];
                    this.setState( item );
                    console.log(item);
                })
        }
    }

    handleNameChange = event => {
        this.setState({ name: event.target.value });
    }

    handleDescChange = event => {
        this.setState({ description: event.target.value });
    }

    handleValueChange = event => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        console.log(this.state)
        if (!!this.state._id) {
            const name = this.state.name;
            const description = this.state.description;
            const value = this.state.value;
            console.log(this.state._id);
            const item = this.state;
            axios.put(`https://bidprosapi.herokuapp.com/api/items/${this.state._id}`, { name, description, value })
            .then(res => {
                const item = res.data;
                this.setState( item );
                console.log(item);
            })
        }
        else {
        const name = this.state.name;
        const description = this.state.description;
        const value = this.state.value;
        let eventId = window.location.pathname.split("/")[2];
        axios.post('https://bidprosapi.herokuapp.com/api/items/'+eventId, { name, description, value })
            .then(res => {
                const item = res.data;
                this.setState( item );
                window.location.href="https://bidprosapi.herokuapp.com/api/items/"+eventId;
            })
            .catch(error => {
              if (error.response) {
                console.log(error.response);
              }
            });
        }
    }

    render() {
        return (
            <div className="itemContainer2">
                    <h1 className="itemTitle">Create/Update Item</h1>
            
                <form className="itemForm" noValidate onSubmit={this.handleSubmit}>
                    <TextField variant="outlined" margin="normal" required
                        fullWidth id="name" label="Item Name" name="name"
                        autoComplete="name" autoFocus onChange={this.handleNameChange}
                        value={this.state.name} />
                    <TextField variant="outlined" margin="normal" required
                        fullWidth name="description" label="Description" type="description"
                        id="description" autoComplete="description" onChange={this.handleDescChange}
                        value={this.state.description} />
                    <TextField variant="outlined" margin="normal" required
                        fullWidth name="value" label="Item Value" type="value"
                        id="value" autoComplete="value" onChange={this.handleValueChange}
                        value={this.state.value} />
                    <Button type="submit" fullWidth variant="contained" color="primary"
                        className="submitItem">
                        Save Changes
                    </Button>
                </form>
            </div>
        )
    }
}
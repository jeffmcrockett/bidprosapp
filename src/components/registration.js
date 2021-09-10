import React from 'react';
import axios from 'axios';
import './registration.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class User extends React.Component {
    state = {
        users: {}
    }

    handleChange = event => {
        this.setState({ user: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        };

        axios.post('https://bidprosapi.herokuapp.com/api/users/:eventId', { user })
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
                        fullWidth id="firstName" label="First Name" name="firstName"
                        autoComplete="firstName" autoFocus onChange={this.handleChange} />
                    <TextField variant="outlined" margin="normal" required
                        fullWidth name="lastName" label="Last Name" type="lastName"
                        id="lastName" autoComplete="lastName" onChange={this.handleChange} />
                    <TextField variant="outlined" margin="normal" required
                        fullWidth name="email" label="Email Address" type="email"
                        id="email" autoComplete="email" onChange={this.handleChange} />
                    <TextField variant="outlined" margin="normal" required
                        fullWidth name="password" label="Password" type="password"
                        id="password" autoComplete="password" onChange={this.handleChange} />    
                    <Button type="submit" fullWidth variant="contained" color="primary" 
                        className="submitItem" onSubmit={this.handleSubmit}>
                        Create User
                    </Button>
                </form>
            </div>
        )
    }
}
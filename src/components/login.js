import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';

export default class Login extends React.Component {
    state = {
        login: {}
    }

    handleChange(event) {
        this.setState({ login: event.target.value})
    }
    
    handleSubmit = event => {
        event.preventDefault();

        const login = {
            email: this.state.email,
            password: this.state.password
        };

        axios.get(`https://bidprosapi.herokuapp.com/users/${this.state.email}/${this.state.password}`)
            .then(
                if ()
            )
    }

    render() {
        return (
            <div className="loginContainer">
                <h1 className="itemTitle">Login</h1>
                <form className="registrationForm" noValidate onSubmit={this.handleSubmit}>
                    <TextField variant="outlined" margin="normal" required
                        fullWidth name="email" label="Email Address" type="email"
                        id="email" autoComplete="email" value={this.state.email} 
                        onChange={this.handleChange} />
                    <TextField variant="outlined" margin="normal" required
                        fullWidth name="password" label="Password" type="password"
                        id="password" autoComplete="password" value={this.state.password} 
                        onChange={this.handleChange} />
                    <Button type="submit" fullWidth variant="contained" color="primary" className="submitItem">
                        Create User
                    </Button>
                </form>
            </div>
        )
    }
}
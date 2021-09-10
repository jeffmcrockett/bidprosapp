import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './login.css';

export default class Login extends React.Component {
    state = {
        email: "",
        password: ""
    }

    handleEmailChange = event => {
        console.log(event);
        this.setState({ 
            email: event.target.value
        })
    }

    handlePasswordChange = event => {
        console.log(event);
        this.setState({ 
            password: event.target.value
        })
    }
    
    handleSubmit = event => {
        event.preventDefault();

        axios.get(`https://bidprosapi.herokuapp.com/api/users/login/${this.state.email}/${this.state.password}`)
            .then(res => {
                if (res) {
                    window.location.href="https://bidprosapi.herokuapp.com/api/events"
            }
        });
    }

    render() {
        return (
            <div className="loginContainer">
                <h1 className="itemTitle">Login</h1>
                <form className="registrationForm" noValidate onSubmit={this.handleSubmit}>
                    <TextField variant="outlined" margin="normal" required
                        fullWidth name="email" label="Email Address" type="email"
                        id="email" autoComplete="email" value={this.state.email} 
                        onChange={this.handleEmailChange} />
                    <TextField variant="outlined" margin="normal" required
                        fullWidth name="password" label="Password" type="password"
                        id="password" autoComplete="password" value={this.state.password} 
                        onChange={this.handlePasswordChange} />
                    <Button type="submit" fullWidth variant="contained" color="primary" className="submitItem">
                        Sign In
                    </Button>
                </form>
                <h3>user: jeffmcrockett@gmail.com</h3>
                <h3>password: password</h3>
            </div>
        )
    }
}
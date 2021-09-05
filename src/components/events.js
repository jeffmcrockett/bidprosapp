import React from 'react';
import axios from 'axios';

export default class Events extends React.Component {
    state = {
        events: []
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/events')
        .then(res => {
            const events = res.data;
            this.setState({ events });
        })
    }

    render() {
        return (
            <div className="container">
                <ul>
                    {this.state.events.map(event => <li>{event.name}</li>)}
                </ul>
            </div>
        )
    }
}
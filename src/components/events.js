import React from 'react';
import axios from 'axios';

export default class Events extends React.Component {
    state = {
        events: []
    }

    componentDidMount() {
        axios.get('https://jeffmcrockett.github.io/bidprosapi/events')
        .then(res => {
            const events = res.data;
            this.setState({ events });
        })
    }

    render() {
        return (
            <ul>
                { this.state.events.map(event => <li>{event.name}</li>) }
            </ul>
        )
    }
}
import React from 'react';
import axios from 'axios';
import "./events.css";

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
            <div className="eventsContainer">
                <h1>Events</h1>
                <div className="events2Container">
                <ul>
                    {this.state.events.map(event => <li>{event.name}<br></br>{event.organization}</li>)}
                </ul>
                </div>
            </div>
        )
    }
}
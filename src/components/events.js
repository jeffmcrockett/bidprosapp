import React from 'react';
import axios from 'axios';
import "./events.css";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class Events extends React.Component {
    state = {
        events: []
    }

    componentDidMount() {
        axios.get('http://bidprosapi.herokuapp.com/api/events')
            .then(res => {
                const events = res.data;
                this.setState({ events });
            })
    }

    handleSubmit(id) {
        window.location.href="http://localhost:3001/items/"+id
    }

    render() {
        return (
            <div className="eventsContainer">
                <br />
                <h1>Events</h1>
                    <ul className="eventTable">
                        {this.state.events.map(event =>
                            <ul className="eventCards">
                                <Card className="cardRoot1">
                                    <CardActionArea onClick={ () => this.handleSubmit(event._id)}>
                                        <CardMedia component="img" className="cardMedia1" />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {event.name}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Hosted by: {event.organization}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary" onClick={ () => this.handleSubmit(event._id)}>
                                            Select Event
                                        </Button>
                                    </CardActions>
                                </Card>
                            </ul>)
                        }
                    </ul>
            </div>
        )
    }
}

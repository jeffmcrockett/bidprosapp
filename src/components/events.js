import React from 'react';
import axios from 'axios';
import "./events.css";
import { makeStyles } from '@material-ui/core/styles';
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
                    <ul>
                        {this.state.events.map(event =>
                            <ul>
                                <Card className="cardRoot1">
                                    <CardActionArea>
                                        <CardMedia
                                            className="cardMedia1"
                                            image="../images/buildings.png"
                                            title="Skyline"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {event.name}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {event.organization}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
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

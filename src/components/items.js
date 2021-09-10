import React from 'react';
import axios from 'axios';
import './items.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class Items extends React.Component {
    state = {
        items: []
    }

    componentDidMount() {
        let eventId = window.location.pathname.split("/")[2];
        axios.get('https://bidprosapi.herokuapp.com/api/items/event/'+eventId)
            .then(res => {
                const items = res.data;
                this.setState({ items });
                console.log(items);
            })
    }

    handleSubmit(id) {
        let eventId = window.location.pathname.split("/")[2];
        window.location.href="https://bidprosapp.herokuapp.com/item/"+eventId+"/"+id
    }

    handleDelete(id) {
        // let eventId = window.location.pathname.split("/")[2];
        axios.delete('https://bidprosapi.herokuapp.com/api/items/'+id)
        .then(res => {
            // window.location.href="https://localhost:3001/items/"+eventId
        })
    }

    render() {
        return (
            <div className="itemsContainer">
                <br />
                <h1>Items</h1>
                <Button variant="contained" color="primary" onClick={ () => this.handleSubmit()}>
                    Create New Item
                </Button>
                    <ul className="item">
                        {this.state.items.map(item =>
                            <ul className="itemCards">
                                <Card className="cardRoot2">
                                    <CardActionArea onClick={ () => this.handleSubmit(item._id)}>
                                        <CardMedia component="img" className="cardMedia2" />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {item.name}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Description: {item.description}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Value: {item.value}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary" onClick={ () => this.handleSubmit(item._id)}>
                                            Edit Item
                                        </Button>
                                        <Button size="small" color="primary" onClick={ () => this.handleDelete(item._id)}>
                                            Delete Item
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
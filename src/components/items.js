import React from 'react';
import axios from 'axios';
import './item.css';
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
        axios.get('http://bidprosapi.herokuapp.com/api/items')
            .then(res => {
                const items = res.data;
                this.setState({ items });
                console.log(items);
            })
    }

    render() {
        return (
            <div className="itemsContainer">
                <br />
                <h1>Items</h1>
                    <ul className="item">
                        {this.state.items.map(item =>
                            <ul className="itemCards">
                                <Card className="cardRoot2">
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            className="cardMedia2"
                                        />
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
                                        <Button size="small" color="primary">
                                            Edit Item
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
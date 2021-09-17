import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CartItem } from '../Interfaces';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 500,
  },
});
interface props {
  item: CartItem;
}
export default function Products({ item }: props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={item.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.title}
          </Typography>
          <Typography gutterBottom variant="h4" component="h4">
            {item.description}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Rs.{item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}

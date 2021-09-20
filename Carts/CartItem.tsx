import { makeStyles, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from "@material-ui/core";
import { IfaceCartItem } from "../Interfaces";

const useStyles = makeStyles({
    root: {
        marginTop: "20px",
        marginBlock: "10px",
        backgroundColor: "#b5afaf"
    },
    media: {
        height: 300,
        width: "auto"
    },
});
type Props = {
    item: IfaceCartItem;
    handleDelete: (deletedItem: number) => void
};

const CartItem = ({ item, handleDelete }: Props) => {
   

    const classes = useStyles();
    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={item.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h6">
                            {item.title}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h2">
                            Rs.{item.price}
                        </Typography>
                        <Button onClick={() => { handleDelete(item.id) }} > remove from cart</Button>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                </CardActions>
            </Card>
         
        </>
    );
};

export default CartItem;

import { Link } from 'react-router-dom'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { useState } from 'react';
import { Badge, Drawer } from '@material-ui/core';
import { IfaceCartItem } from "../Interfaces"
import Carts from "../Carts/Carts";
interface props {
  cartItems: IfaceCartItem[];
  handleDelete: (deletedItem: number) => void
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    icon: {
      color: "darkgrey",
      size: 344
    },
    draw: {
      width: "300px"
    },
  }),
);

export default function Navbar({ cartItems, handleDelete }: props) {
  const [cartOpen, setCartOpen] = useState(false);
  const classes = useStyles();
  return (
    <div >
      <AppBar className={classes.root} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Sofster Shopping
          </Typography>
          <Drawer className={classes.draw} anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
            <Carts
              cartItems={cartItems} handleDelete={handleDelete}
            />
          </Drawer>
          
          <ShoppingCartIcon className={classes.icon} onClick={() => setCartOpen(true)}  >
          </ShoppingCartIcon>
          <Badge badgeContent={cartItems.length} onClick={() => setCartOpen(true)} color="error" >
          </Badge>
        </Toolbar>
      </AppBar>
    </div>
  );
}


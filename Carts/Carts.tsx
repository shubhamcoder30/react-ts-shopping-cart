import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { IfaceCartItem } from "../Interfaces";
import { useState } from "react";

import CartItem from "./CartItem"
import { Button } from '@material-ui/core';
type Props = {
  cartItems: IfaceCartItem[];
  handleDelete: (deletedItem: number) => void
};

const Cart = ({ cartItems,handleDelete }: Props) => {
  const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item: IfaceCartItem) => (
        <CartItem
          key={item.id}
          item={item}
          handleDelete={handleDelete}
        />
      ))}
       <div>
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    CheckOut
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Congratulations."}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            thanks for shopping with us
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </div>
    </div>
  );
};

export default Cart;
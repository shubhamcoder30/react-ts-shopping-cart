import { useState } from 'react';
import LoginForm from "./components/LoginForm";
import Container from '@material-ui/core/Container';
import Products from "./components/Products";
import Product from "./Product.json";
import { IfaceCartItem } from "./Interfaces";
import Grid from "@material-ui/core/Grid";
import Navbar from "./components/Navbar";
function App() {
  const [cartItems, setCartItems] = useState<IfaceCartItem[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const setLog = () => {
    setIsLoggedIn(true)
  }
  const handleAddToCart = (clickedItem: IfaceCartItem) => {
    
    setCartItems((prev) => {
      return [...prev, { ...clickedItem }];
    });
  };
  const handleDelete = (deletedItem: number) => {
    console.log(deletedItem)
  };
  return (
    <div className="App">
      <Container>
        <Navbar cartItems={cartItems} handleDelete={handleDelete} />
        {!isLoggedIn && <LoginForm isLoggedIn={isLoggedIn} setLog={setLog} />}
        {isLoggedIn
          && <Grid container spacing={0}>
            {Product.map((data) => (
              <Grid key={data.id} xs={12} sm={3}>
                <Products
                  item={data} handleAddToCart={handleAddToCart}
                />
              </Grid>
            ))}
          </Grid>
        }
      </Container>
    </div>

  );
}

export default App;

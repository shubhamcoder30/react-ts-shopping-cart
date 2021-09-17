import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Container from '@material-ui/core/Container';
import Products from './components/Products';
import Product from './Product.json';
import { CartItem } from './Interfaces';
import Grid from '@material-ui/core/Grid';
import Navbar from './components/Navbar';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const setLog = () => {
    setIsLoggedIn(true);
  };
  return (
    <div className="App">
      <Container>
        <Navbar />

        {!isLoggedIn && <LoginForm isLoggedIn={isLoggedIn} setLog={setLog} />}
        {isLoggedIn && (
          <Grid container spacing={3}>
            {Product.map((data: CartItem) => (
              <Grid key={data.id} xs={12} sm={4}>
                <Products item={data} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </div>
  );
}

export default App;

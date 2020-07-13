import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Auth from './pages/Auth'
import { Products } from './pages/Products'
import { EditProduct } from './pages/EditProduct'
import { AddProduct } from './pages/AddProduct'
import Navbar from './components/Navbar'


function App() {
  return (
    <main className="App">
      <Navbar />
        <Switch>
          <Route exact path='/auth/:type' component={Auth} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/edit_product' component={EditProduct} />
          <Route exact path='/add_product' component={AddProduct} />
          <Redirect to='/auth/registration'/>
        </Switch>
    </main>
  );
}

export default App;

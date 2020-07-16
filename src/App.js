import React, { useEffect, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Auth from './pages/Auth'
import { Products } from './pages/Products'
import { EditProduct } from './pages/EditProduct'
import { AddProduct } from './pages/AddProduct'
import Navbar from './components/Navbar'
import { getData } from './firebase/api'

const App = () => {
  const [products, setProducts] = useState(null)
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    getData(setProducts)
  }, [])

  console.log(auth)
  return (
    <main className="App">
      <Navbar />
      <Switch>
        <Route exact path='/auth/:type'>
          <Auth setAuth={setAuth} />
        </Route>
        <Route exact path='/products' >
          <Products products={products} />
        </Route>
        <Route exact path='/edit_product/:id' component={EditProduct} />
        <Route exact path='/add_product' component={AddProduct} />
        <Redirect to='/auth/login' />
      </Switch>
    </main>
  )
}

export default App

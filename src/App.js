import React, { useEffect, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Auth from './pages/Auth'
import { Products } from './pages/Products'
import { AddProduct } from './pages/AddProduct'
import Navbar from './components/Navbar'
import { getData } from './firebase/api'

const App = () => {
  const [products, setProducts] = useState(null)
  const [changeData, setChangeData] = useState(false)
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    getData(setProducts)
  }, [])

  useEffect(() => {
    getData(setProducts)
  }, [changeData])

  return (
    <main className="App">
      {auth && <Navbar auth={auth}/>}
      <Switch>
        <Route exact path='/auth/:type'>
          <Auth setAuth={setAuth} />
        </Route>
        {auth && (
          <>
            <Route exact path='/products' >
              <Products products={products} setChangeData={setChangeData} />
            </Route>
            <Route exact path='/edit_product/:id' >
              <AddProduct setChangeData={setChangeData} products={products} />
            </Route>
            <Route exact path='/add_product'>
              <AddProduct setChangeData={setChangeData} />
            </Route>
          </>
        )}
        <Redirect to='/auth/login' />
      </Switch>
    </main>
  )
}

export default App

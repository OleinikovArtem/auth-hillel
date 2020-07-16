import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  linkBox: {
    flexGrow: 1,
    fontSize: 18
  },
  link: {
    padding: '0 20px',
    color: '#fff',
    textDecoration: 'none'
  }
}))

const Navbar = ({ locatin, history }) => {
  const classes = useStyles()

  const loginPage = () => {
    history.push('/auth')
  }

  return (
    <nav className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <div className={classes.linkBox}>
            <NavLink className={classes.link} to='/products'>Products</NavLink>
            <NavLink className={classes.link} to='/add_product'>Add Product</NavLink>
            {/* <NavLink className={classes.link} to='/edit_product'>Edit Product</NavLink> */}
          </div>
          <Button color="inherit" onClick={loginPage}>Login</Button>
        </Toolbar>
      </AppBar>
    </nav>
  )
}

export default withRouter(Navbar)
import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import HomeIcon from 'material-ui-icons/Home'
import Button from 'material-ui/Button'
import auth from './../auth/auth-helper'
import {Link, withRouter} from 'react-router-dom'

const isActive = (history, path) => {
  if (history.location.pathname == path)
    return { color: '#169622'}
  else
    return { color: '#246B01'}
}
const isPartActive = (history, path) => {
  if (history.location.pathname.includes(path))
    return {color: '#B3E2B1'}
  else
    return {
      color: '#246B01'}
}
const Menu = withRouter(({history}) => (
  <AppBar position="static" color='#fff'>
    <Toolbar>
      <Link to='/'>
      <img src='./dist/greenworld.jpeg' width='100' />
      </Link>
      <div>
        <Link to="/">
          <IconButton aria-label="Home" style={isActive(history, "/")}>
            <HomeIcon color='action' style={{ fontSize: 30}}/>
          </IconButton>
        </Link>
        <Link to="/home">
          <Button style={isActive(history, "/home")}><strong>Our Products</strong></Button>
        </Link>
        
      </div>
      <div style={{'position':'absolute', 'right': '30px'}}><span style={{'float': 'right'}}>
      {
        !auth.isAuthenticated() && (<span>
          <Link to="/signup">
            <Button style={isActive(history, "/signup")}>Sign Up
            </Button>
          </Link>
          <Link to="/signin">
            <Button style={isActive(history, "/signin")}>Log In 
            </Button>
          </Link>
        </span>)
      }
      {
        auth.isAuthenticated() && (<span>
          {auth.isAuthenticated().user.seller && (<Link to="/seller/shops"><Button style={isActive(history, "/seller")}>My Lists</Button></Link>)}
            {auth.isAuthenticated().user.seller && (<Link to="/contacts"><Button style={isActive(history, "/contacts")}>Contacts</Button></Link>)}

          <Link to={"/user/" + auth.isAuthenticated().user._id}>
            <Button style={isActive(history, "/user/" + auth.isAuthenticated().user._id)}>My Profile</Button>
          </Link>
          <Button color="inherit" onClick={() => {
              auth.signout(() => history.push('/'))
            }}>Sign out</Button>
        </span>)
      }
      </span></div>
    </Toolbar>
  </AppBar>
))

export default Menu

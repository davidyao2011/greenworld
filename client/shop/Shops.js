import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import List, {ListItem, ListItemAvatar} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import {list} from './api-shop.js'
import {Link} from 'react-router-dom'

const styles = theme => ({
  root: theme.mixins.gutters({
    maxWidth: 1100,
    margin: 'auto',
    padding: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit * 1,
    marginBottom: theme.spacing.unit * 2
  }),
  title: {
    margin: `${theme.spacing.unit * 1}px 0 ${theme.spacing.unit * 3}px`,
    color: '#246B01',
    textAlign: 'center',
    fontSize: '1.9em',
    fontWeight: 'bold'
  },
  subtitle: {
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 3}px`,
    color: "#003305",
    backgroundColor: '#F9F8F8',
    fontSize: '18px',
    textAlign:'center',
  },
  avatar:{
    width: 120,
    height: 120
  },
  subheading: {
    color: theme.palette.text.secondary
  },
  shopTitle: {
    fontSize: '1.2em',
    marginBottom: '6px'
  },
  details: {
    padding: '24px'
  },
  background: {
    backgroundImage: 'url(./dist/green-world.jpg)'
  }
})
class Shops extends Component {
  state = {
      shops:[]
  }
  loadShops = () => {
    list().then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        this.setState({shops: data})
      }
    })
  }
  componentDidMount = () => {
    this.loadShops()
  }
  render() {
    const {classes} = this.props
    return (
      <div className={classes.background}>
      <Paper className={classes.root} elevation={2}>
        <Typography type="title" className={classes.title}>
          Welcome to GreenWorld - Eco-friendly
        </Typography>
          <Typography type="title" className={classes.subtitle}>
            GreenWorld Company is a family-owned agricultural processing and transportation company. Together, we pursue business excellence with integrity, respect and compassion.
        </Typography>
          <Typography type="title" className={classes.subtitle}>
            Products that do not harm the environment whether in their production, use or disposal”. In other words, these products help preserve the environment by significantly reducing the pollution they could produce. 
        </Typography>
        <div className={classes.subtitle} style={{margin: 'auto', padding: 15}}>
        <img src='./dist/download2.png' width='1000' height='400'/>
        </div>
        <List dense>
          {this.state.shops.map((shop, i) => {
            return <Link to={"/shops/"+shop._id} key={i}>
              <Divider/>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}  src={'/api/shops/logo/'+shop._id+"?" + new Date().getTime()}/>
                </ListItemAvatar>
                <div className={classes.details}>
                  <Typography type="headline" component="h2" color="primary" className={classes.shopTitle}>
                    {shop.name}
                  </Typography>
                  <Typography type="subheading" component="h4" className={classes.subheading}>
                    {shop.description}
                  </Typography>
                </div>
              </ListItem>
              <Divider/>
            </Link>})}
        </List>
      </Paper>
    </div>)
  }
}
Shops.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Shops)

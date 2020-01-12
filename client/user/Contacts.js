import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import { listLatest, listCategories } from './../product/api-product.js'
import Categories from './../product/Categories'
import Typography from 'material-ui/Typography'
import PropTypes from 'prop-types'
import Card from 'material-ui/Card'



const styles = theme => ({
    
    root: {
        flexGrow: 1,
        margin: 20,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        background: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        width: '100%',
        transform: 'translateZ(0)',
    },
    tileTitle: {
        verticalAlign: 'middle',
        lineHeight: 2.5,
        textAlign: 'center',
        fontSize: '1.3em',
        margin: '0 10px 0 0',
    },
    card: {
        margin: 'auto',
        marginTop: 10
    },
    title: {
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 2}px`,
        color: "#F55D26",
        backgroundColor: '#eee',
        fontSize: '1.3em',
        textAlign:'center',
        fontWeight: 'bold'
    },
    heading: {
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 2}px`,
        color: "#F55D26",
        backgroundColor: '#fff',
        fontSize: '1.8em',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    subtitle: {
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 2}px`,
        color: "#676161",
        backgroundColor: '#eee',
        fontSize: '18px'
    },
    icon: {
        verticalAlign: 'sub',
        color: '#738272',
        fontSize: '0.9em'
    },
    link: {
        color: '#4d6538',
        textShadow: '0px 2px 12px #ffffff',
        cursor: 'pointer'
    }
})

class Home extends Component {
    state = {
        suggestionTitle: "Hot Products",
        suggestions: [],
        categories: []
    }
    componentDidMount = () => {
        listLatest().then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                this.setState({ suggestions: data })
            }
        })
        listCategories().then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                this.setState({ categories: data })
            }
        })
    }
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                <Grid item xs={12} sm={12}>
                    <Card className={classes.card}>
                        <Typography type="title" className={classes.heading}>
                            Staff Contact Information
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <Card className={classes.card}>
                        <Typography type="title" className={classes.title}>
                            David Yao 
                        <Typography type="title" className={classes.subtitle}>
                           Work: 04-8888888
                        
                        </Typography>
                        <Typography type="title" className={classes.subtitle}>
                           Mobile: 0225678910
                        
                        </Typography>
                        <Typography type="title" className={classes.subtitle}>
                            Email: david@gmail.com
                        
                        </Typography>
                        </Typography>
                        
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card className={classes.card}>
                        <Typography type="title" className={classes.title}>
                            Dipan Maniar
                            <Typography type="title" className={classes.subtitle}>
                           Work: 04-8888888
                        
                        </Typography>
                        <Typography type="title" className={classes.subtitle}>
                           Mobile: 0205533652
                        
                        </Typography>
                        <Typography type="title" className={classes.subtitle}>
                            Email: dipan@gmail.com
                        
                        </Typography>
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card className={classes.card}>
                        <Typography type="title" className={classes.title}>
                            Suprina 
                            <Typography type="title" className={classes.subtitle}>
                           Work: 04-8888888
                        
                        </Typography>
                        <Typography type="title" className={classes.subtitle}>
                           Mobile: 0225699880
                        
                        </Typography>
                        <Typography type="title" className={classes.subtitle}>
                            Email: Suprina@gmail.com
                        
                        </Typography>
                        </Typography>
                    </Card>
                    
                </Grid>
                
                <Grid item xs={12} sm={6}>
                    <Card className={classes.card}>
                        <Typography type="title" className={classes.title}>
                            Coby Lington 
                            <Typography type="title" className={classes.subtitle}>
                           Work: 04-8888888
                        
                        </Typography>
                        <Typography type="title" className={classes.subtitle}>
                           Mobile: 02156233910
                        
                        </Typography>
                        <Typography type="title" className={classes.subtitle}>
                            Email: coby@gmail.com
                        
                        </Typography>
                        </Typography>
                    </Card>
                </Grid>
                </Grid>
               
            </div>
        )
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)

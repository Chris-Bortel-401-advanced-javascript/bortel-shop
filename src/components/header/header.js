import React from 'react';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {

      
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
      // fontSize:30,
      fontFamily: 'Merriweather, serif',
      textDecoration: 'none',
    },
    link: {
      margin: theme.spacing(1, 1.5),
      textDecoration: 'none',
      fontFamily: 'Merriweather, serif',
      // fontSize: 20,
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  },
  fullHeight: {
    height: "100%"
  },

  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

function Header() {
  const classes = useStyles();
  const cart = useSelector( state => state.cart);
  let cartLength = Object.values(cart).reduce((acc, obj) => {
    return acc + obj.count;
  },0);
  return(
    <>
      
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
  
          <Typography variant="h4" color="inherit" noWrap className={classes.toolbarTitle}>
          <NavLink to='/' className={classes.link}>
                Bortel's Shop
          </NavLink>
          </Typography>
            <NavLink to='/cart' className={classes.link} >
              Cart({cartLength}) 
            </NavLink>
        </Toolbar>
      </AppBar>
      
    </>
  )
}

export default Header;
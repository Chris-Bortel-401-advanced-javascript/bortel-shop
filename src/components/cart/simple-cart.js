// Displays a short list (title only) of products in the cart
// This should be present at all times

// When a user clicks the “add to cart” button add the item to their cart
// In the <SimpleCart/> component, show a running list of the items in the cart (just the titles)
// Change the (0) indicator in the header to show the actual number of items in the cart
// Reduce the number in stock for that product
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import {deleteFromCart} from '../../store/cart.js';
import {putStockBack} from '../../store/products.js';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    position: 'fixed',
    right: 1
    // backgroundColor: theme.palette.background.paper,
  },
  secondary: {
    fontSize:90
  }
}));

function SimpleCart() {

  const classes = useStyles();
  const dispatch = useDispatch();
  let cart = useSelector( state => state.cart);
  const destroy = (product) => {
    dispatch(deleteFromCart(product));
    dispatch(putStockBack(product));
  }

  return (
    <>
    <List component="nav" className={classes.root}>

    {
      Object.entries(cart).map(product => {
        return (
          <ListItem key={product[0]} >
            <ListItemText primary={product[1].obj.name}  />
            <ListItemText secondary={'QTY: ' + product[1].count} className={classes.secondary} />
            <IconButton aria-label="delete" onClick={() => destroy(product[1])}>
              <DeleteIcon />
            </IconButton >
          </ListItem>
        )
      })
    }

    </List>
    </>
  )
}

export default SimpleCart;



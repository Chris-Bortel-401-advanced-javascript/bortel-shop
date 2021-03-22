import React from 'react';
import {useSelector} from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import SimpleCart from '../cart/simple-cart.js';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
}));

export default function ShoppingCart() {
  const classes = useStyles();

  const cart = useSelector( state => state.cart);
  let total = 0 

  Object.keys(cart).forEach((key) => {total += cart[key].count * cart[key].obj.price})

  return (
    <>
      <SimpleCart/>
      <div className={classes.layout}>
      <form>
        <Paper className={classes.paper}>
          <Typography variant="h4" gutterBottom>
            Order summary
          </Typography>
          <Typography variant="h6" gutterBottom>
          NOT CURRENTLY PROCESSING ORDERS
          </Typography>
          <List disablePadding>
          {
          Object.keys(cart).map((key, i) => {
          const item = cart[key].obj;
          const count = cart[key].count;
          
          return(
            <ListItem className={classes.listItem} key={item._id}>
              <ListItemText primary= {item.name} secondary={`Qty:  ${count}`}  />
              <Typography variant="body2">${item.price.toFixed(2)}</Typography>
            </ListItem>
          )})
        }
            <ListItem className={classes.listItem}>
              <ListItemText primary="Total" />
              <Typography variant="subtitle1" className={classes.total}>
                ${total.toFixed(2)}
              </Typography>
            </ListItem>
          </List>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                Billing Address
              </Typography>
              <TextField id="name" name="name" label="Full Name" />
              <TextField id="address" name="address" label="Address" />
              <TextField id="city" name="city" label="City" />
              <TextField id="state" name="state" label="State" />
              <TextField id="zip" name="zip" label="zip" />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                Payment details
              </Typography>
              <TextField id="cc_number" name="cc_number" label="Credit Card #" />
              <TextField
                id="date"
                label="Expiration"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField id="cvv" name="cvv" label="CVV" />
            </Grid>
          </Grid>

          <Grid container alignItems="center" justify="center" spacing={5}>
            <Grid item>
              <Button variant="contained" color="primary">Place Your Order</Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </div >
    
    </>
  );
}

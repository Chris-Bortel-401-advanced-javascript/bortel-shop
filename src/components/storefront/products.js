import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {When} from 'react-if';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import {addToCart} from '../../store/cart.js';
import {decrementStock} from '../../store/products.js';
// import {changeCategory} from '../../store/categories.js'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Products() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products)
  const activeCategory = useSelector(state => state.categories.activeCategory)

  let filtered = products.filter(product => product.category === activeCategory.name )

  const add = (product) => {
    dispatch(addToCart(product));
    dispatch(decrementStock(product));

    // decrement one from product
  }


  return (
  <>

  <Container maxWidth="md" component="main">
  <Grid container spacing={5} alignItems="stretch">


    {filtered.map(product => {
      return (

      <Grid item xs={12} sm={6} md={4} key={product._id}>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={product.imageUrl}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
        {product.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <When condition={product.inStock > 0}>
            <Button onClick={() => add(product)} size="small" color="primary">
              Add To Cart
            </Button>
          </When>

          <Button size="small" color="primary">
            <Link to='/productDetails'>
              View Details
            </Link>
          </Button>
        </CardActions>
        </Card>
      </Grid>
      );
    })
    }


  </Grid>
  </Container>
  </>
  )
}

export default Products;

  


  





import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

  // const dispatch = useDispatch();
  const products = useSelector(state => state.products.products)
  // const activeCategory = useSelector(state => state.categories.activeCategory)
  console.log('products products.js: ', products)
  return (
    <>

    {products.map(product => {
      return (

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
          <Button size="small" color="primary">
            Add To Cart
          </Button>
          <Button size="small" color="primary">
            View Details
          </Button>
        </CardActions>
      </Card>
      );
    })
    }
  </>
  )
}

export default Products;
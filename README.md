# Store Rebuild

## [Deployed Site](https://60247cdb39dd2374796baac1--romantic-morse-5b215b.netlify.app/)

## Pull Request
- [Lab 37 Combined Reducers and Lab 38 async actions](https://github.com/Chris-Bortel-401-advanced-javascript/storefront-rebuild/pull/3)
- [Deployed Site](https://6025d2ae66101f00082bfba4--romantic-morse-5b215b.netlify.app/)

## Pseudo Code

```
Redux Store:
- Reducers:

 - Cart:
  - s: cart
  - a: addToCart
  - a: deleteFromCart

 - Categories:
  - s: Categories
  - s: ActiveCategories
  - a: changeCategory
  - a: getCategories

 - Products:
  - s: Products
  - a: getProducts

  
  - a: decrementInStockCount
  - a: reShelfStockCount


<App />

<Header />
  // Displays store name and the cart
  s: cart

<SimpleCart />
  // Lists out the products that have been added to the cart
  s: cart
  a: deleteFromCart
  a: reShelveStockCount


<StoreFront>
  // Makes api call to initialize products and categories
  a: getCategories
  a: getProducts

<Categories />
  // Lists out all of the categories
  s: categories
  a: changeCategories

<CurrentCategory />
  // Shows the activeCategory in a sub header
  s: activeCategory

<Product />
  // Lists out all of the products in a given category
  s: products
  s: activeCategory
  a: getProducts
  a: addToCart
  a: decrementInStockCount

```



## TODO:
```
// Header.js and simpleCart.js --- 
  - TODO: Want the simple cart to display only when I click on the cart button.
  - TODO: Need to fix the decrement function in the simple cart. It is currently deleting everything for the specific item that you are wanting to remove quantity from. 

// Fixed/Non issue: The front end does not update until reload
  - Products.js , need to check for the behavior of decrementing the stock in the frontend console opposed to the back. They should be the same.
  - There is also an off by one error in the db every once and a while... Super bizarre
  - When I click on the delete button, one number should decrement from the cart and one number should increment to the inStock on the DB side.
```


TODO: Questions: should I be hitting my DB on load, or should I be waiting until the user hits the category link?

## Citing
- [Material UI checkout form](https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/checkout)
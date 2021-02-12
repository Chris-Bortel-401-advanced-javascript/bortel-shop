# Store Rebuild

## [Deployed Site](https://60247cdb39dd2374796baac1--romantic-morse-5b215b.netlify.app/)
## Pull Request

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
  - I want the simple cart to display only when I click on the cart button.
  - TODO: Need to fix the decrement function in the simple cart. It is currently deleting everything for the specific item that you are wanting to remove quantity from. 

// Products.js , need to check for the behavior of decrementing the stock in the frontend console opposed to the back. They should be the same.
  - There is also an off by one error in the db every once and a while... Super bizarre
  - When I click on the delete button, one number should decrement from the cart and one numer should increment to the inStock on the DB side.
```


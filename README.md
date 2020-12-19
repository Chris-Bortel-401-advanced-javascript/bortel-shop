# Store Rebuild

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
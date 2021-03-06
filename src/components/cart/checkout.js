// Hook up this component to the cart button

import React from 'react';
import {useSelector} from 'react-redux';


export default function ShoppingCart() {


  //TODO: Need to render this at the top of the page
  const cart = useSelector( state => state.cart);
console.log('cart at checkout',cart)
let total = 0;

Object.keys(cart).forEach((key) => {
  total += cart[key].obj.price 
} )

return (
  <>

    <ul>
      {
        // puts this into an arrau of the keys of the cart pbjectr
        Object.keys(cart).map((key, i) => 
        <li key={i}>
          {cart[key].obj.name}    
          <br/>
          Price: {cart[key].obj.price}
          <br/>
          Subtotal ({cart[key].count} items): {cart[key].obj.price}
          <br/> 
          Item Total: {cart[key].count * cart[key].obj.price} 
          <br/>
          <br/>
        </li>)
      }
    </ul>
  total:{total}
  </>
  );
  }

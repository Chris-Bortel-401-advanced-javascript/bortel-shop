import React from 'react';
import {useSelector} from 'react-redux';

export default function ShoppingCart() {
  const cart = useSelector( state => state.cart);
  let total = 0 

  Object.keys(cart).forEach((key) => {total += cart[key].count * cart[key].obj.price})

  return (
    <>
    <h1>Checkout</h1>
      <ul>
        {
          // puts this into an array of the keys of the cart object
          Object.keys(cart).map((key, i) => {
          const item = cart[key].obj;
          const count = cart[key].count;
          
            return(
            <li key={i}>
              {item.name}    
              <br/>
              Price: ${item.price}
              <br/>
              Subtotal ({count} items): ${count * item.price}
              <br/>
              <br/>
            </li>
            )})
        }
      </ul>

      Total: ${total.toFixed(2)}
    </>
  );
}

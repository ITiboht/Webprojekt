import React from 'react'
import './cart.css'
import payment from '../../images/payment.png';

const Cart = () => {

  return (
    <div className='Cart-Page'>
        <h1>Cart</h1>
        <div className='Shipping-Text'>
          <h1>Depending on your country the shipping might be free</h1>
      <div className='Cart-Box'>
        <div className='Cart-Grid'>
        <div className='Cart-Column'>
        <h1>Name</h1>
        </div>
        </div>
        <div className='Cart-Column'>
        <h1>Price</h1>
        </div>
        <div className='Cart-Column'>
        <h1>Quantity</h1>
        </div>
        </div>
        <button className='Cart-Checkout'>Checkout</button>
        <img className='Payment-Image' src={payment} alt='Fizu'/>
        </div>
    </div>
  );
};

export default Cart;
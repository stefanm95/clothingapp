import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { useEffect, useRef } from 'react';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../store/cart/cart.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();
    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!selectIsCartOpen))
  //   const cartDropdownRef = useRef(null);
  
  // useEffect(() => {
  //   const handleOutsideClick = (event) => {
  //       if(cartDropdownRef.current && !cartDropdownRef.current.contains(event.target)){
  //           toggleIsCartOpen(true);
  //       };
  //   };
  //   document.addEventListener('click', handleOutsideClick);

  //   return () => {
  //       document.removeEventListener('click', handleOutsideClick);
  //   }
  // }, [])

    const goToCheckOutHandler = () => {
        navigate('./checkout')
        toggleIsCartOpen();
    };
    return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
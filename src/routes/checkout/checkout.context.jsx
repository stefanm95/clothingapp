import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.context';


import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from './checkout.styles.jsx'

const Checkout = () => {
    const { cartItems } = useContext(CartContext);
    const { cartTotal } = useContext(CartContext);
    return(
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map((cartItem)=> (
                     <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    ))};
                <Total>Total: ${cartTotal}</Total>
        </CheckoutContainer>
    );
};
export default Checkout;
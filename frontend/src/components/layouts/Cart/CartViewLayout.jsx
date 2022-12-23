import React from 'react'
import CartCardView from '../../components/CartCardView'
import { Wrapper } from './CartViewLayout.styles'
import { useSelector } from 'react-redux'
const CartViewLayout = () => {
    const {cartItems} = useSelector(state => state.cart)
    console.log('cartItems :>> ', cartItems);
  return (
    <Wrapper>
        <CartCardView/>
    </Wrapper>
  )
}

export default CartViewLayout
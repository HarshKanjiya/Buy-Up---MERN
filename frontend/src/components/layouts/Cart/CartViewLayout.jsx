import React from "react";
import CartCardView from "../../components/CartCardView";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";

const CartViewLayout = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <Wrapper>
      <Header>
        <div className="cart-layout-header-left">
          <p>Product</p>
        </div>
        <div className="cart-layout-header-right">
          <div className="cart-layout-header-right-ele">
            <p>Quantiy</p>
          </div>
          <div className="cart-layout-header-right-ele">
            <p>Total Cost</p>
          </div>
        </div>
      </Header>

      <div className="CartViewLayout-List">
        {cartItems.length ? (
          cartItems.map((data, index) => (
            <CartCardView data={data} key={index} index={index} />
          ))
        ) : (
          <div className="CartViewLayout-emptyCart">
            {" "}
            <p>Your Cart is Empty!</p>{" "}
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default CartViewLayout;

const Wrapper = styled.div`
  width: calc(100% - 2rem);
  height: 100%;
  margin: 0 1rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;

  .CartViewLayout-List {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .CartViewLayout-emptyCart {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
`;
const Header = styled.div`
  width: 80%;
  display: flex;
  border-bottom: 1px solid #f5f5f5;
  padding: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #b6b6b6;

  .cart-layout-header-left {
    flex: 1;
  }
  .cart-layout-header-right {
    flex: 1;

    display: flex;
    justify-content: flex-end;
    text-align: center;
  }
  .cart-layout-header-right-ele {
    flex: 1;
  }
`;

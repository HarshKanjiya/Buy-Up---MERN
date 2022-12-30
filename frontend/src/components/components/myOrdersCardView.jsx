import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";

const MyOrdersCardView = () => {
  const { orderList } = useSelector((state) => state.order);
  return (
    <>
      {orderList &&
        orderList.map((order) => (
          <Wrapper
            key={data.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
            layout
            onClick={() => {
              dispatch(setSpacsInfo(data));
            }}
          ></Wrapper>
        ))}
    </>
  );
};

export default MyOrdersCardView;


const Wrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0.3rem 0;
`;
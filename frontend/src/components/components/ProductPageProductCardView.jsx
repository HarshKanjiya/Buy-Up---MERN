import ReactStars from "react-rating-stars-component";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const ProductPageProductCardView = ({ product }) => {
  const navigate = useNavigate();

  const HelperClick = () => {
    navigate(`/product/${product._id}`);
  };

  return (
    
      <Wrapper
        onClick={HelperClick}
        initial={{ y: 0 }}
        whileHover={{ y: -10 }}
        whileTap={{ y: 0 }}
      >
        <div className="cardView-img-wrapper">
          <img
            src={product.images ? product.images[0].url : null}
            alt="product"
          />
        </div>
        <div className=" flex flex-col gap-2 m-2 cardView-text-wrapper">
          <p>{product.name}</p>
          <div className=" flex items-center gap-2  ">
            <ReactStars
              color="#f1f1f1"
              activeColor="tomato"
              isHalf
              edit={false}
              value={product.ratings}
            />
            <p className=" text-gray-400 text-[0.8rem] ">{product.ratings}</p>
          </div>
          <p>₹{product.price}</p>
        </div>
      </Wrapper>
    
  );
};

export default ProductPageProductCardView;

const Wrapper = styled(motion.div)`
  max-width: 170px;
  max-height: 206px;
  margin: 0.5rem;
  border: 1px solid #f0f0f0;
  overflow: hidden;
  border-radius: 9px;
  transition: 100ms;
  position: relative;
  &:hover {
    box-shadow: 0 10px 11px rgba(0, 0, 0, 0.2);
    border: 1px solid white;
  }
  max-width: min-content(40vw, 150px);
  font-size: 0.8rem;

  display: flex;
  flex-direction: column;


  .cardView-img-wrapper {
    img {
      height: 111px;
      width: 170px;
    }
  }

  @media (max-width: 650px) {
    flex-direction: row;
    /* background-color: #fafafa; */
    box-shadow: 0 0 17px rgba(0, 0, 0, 0.05);

    max-width: 100% ;
    
    .cardView-img-wrapper{
      width: 30%;
      display: grid;
      place-content:center;
      img{
        width:100%;
      height: auto;
      }
      
    }
    .cardView-text-wrapper{
      display: flex;
      flex-direction: column;
      gap:0.3rem;
    }
  }
`;

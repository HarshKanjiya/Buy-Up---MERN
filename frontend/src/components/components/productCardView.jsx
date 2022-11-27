import ReactStars from "react-rating-stars-component";
import  {motion} from "framer-motion"
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const ProductCardView = ({ product }) => {
  const navigate = useNavigate()

  const HelperClick = () => {
    navigate(`/product/${product._id}`)
  }

  return (
    <div onClick={HelperClick} >
    <Wrapper
    initial={{y:0}}
    whileHover={{y:-10}} 
    whileTap={{ y:0}}
    >
      <div>
        <img src={product.images?product.images[0].url:null} alt="product" />
      </div>
      <div className=" flex flex-col gap-2 m-2 " >
        <p>{product.name}</p>
        <div className=" flex align-middle justify-between " >
          <ReactStars
            color="#f1f1f1"
            activeColor="tomato"
            isHalf
            edit={false}
            value={product.ratings}
          />
          <p className=" text-gray-400 text-sm " >{ product.numOfReviews } Reviews</p>
        </div>
        <p>₹{product.price}</p>
      </div>
    </Wrapper>
    </div>
  );
};

export default ProductCardView;

const Wrapper = styled(motion.div)`
max-width: 170px;
margin: 0.5rem;
border: 1px solid #f0f0f0;
overflow: hidden;
border-radius:9px;
transition: 100ms ;

&:hover{
  box-shadow: 0 10px 11px rgba(0,0,0,0.2);
  border:1px solid white;
}
`
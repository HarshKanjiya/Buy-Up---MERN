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
    <>
    <Wrapper
    onClick={HelperClick}
    initial={{y:0}}
    whileHover={{y:-10}} 
    whileTap={{ y:0}}
    >
      <div className="cardView-img-wrapper" >
        <img src={product.images?product.images[0].url:null} alt="product" />
      </div>
      <div className=" flex flex-col gap-2 m-2 " >
        <p>{product.name}</p>
        <div className=" flex items-center gap-2 cardView-text-wrapper justify-between " >
          <ReactStars
            color="#f1f1f1"
            activeColor="tomato"
            isHalf
            edit={false}
            value={product.ratings}
          />
          <p className=" text-[tomato] text-[0.8rem] bg-[#ffbf4795] w-8 rounded-[0.4rem] text-center " >{ product.ratings }</p>
        </div>
        <p>₹{product.price}</p>
      </div>
    </Wrapper>
    </>
  );
};

export default ProductCardView;

const Wrapper = styled(motion.div)`
max-width: 170px;
max-height: 206px;
margin: 0.5rem;
border: 1px solid #f0f0f0;
overflow: hidden;
border-radius:9px;
transition: 100ms ;
position: relative;
&:hover{
  box-shadow: 0 10px 11px rgba(0,0,0,0.2);
  border:1px solid white;
}

@media (min-width: 480px){
  max-width: min-content(40vw,150px);
  font-size: 0.8rem;
}

.cardView-img-wrapper{
img{
  height: 111px;
  width: 170px;
}
}
`
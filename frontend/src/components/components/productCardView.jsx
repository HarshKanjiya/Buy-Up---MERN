import ReactStars from "react-rating-stars-component";
import  {motion} from "framer-motion"
import {Link} from "react-router-dom"

const ProductCardView = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`} >
    <motion.div
    className=" max-w-sm  mx-2 rounded-lg overflow-hidden border border-gray-300 border-solid hover:shadow-lg duration-10 "
    initial={{y:0}}
    whileHover={{y:-10}} 
    >
      <div>
        <img src={product.image} />
      </div>
      <div className=" flex flex-col gap-2 m-2 " >
        <p>{product.name}</p>
        <div className=" flex align-middle justify-between " >
          <ReactStars
            color="#f1f1f1"
            activeColor="tomato"
            isHalf
            edit={false}
            value={3.5}
          />
          <p className=" text-gray-400 text-sm " >257 Reviews</p>
        </div>
        <p>{product.price}</p>
      </div>
    </motion.div>
    </Link>
  );
};

export default ProductCardView;

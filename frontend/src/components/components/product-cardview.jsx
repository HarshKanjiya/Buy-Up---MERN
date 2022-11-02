import styled from "styled-components";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ProductCardView = ({ product }) => {
  return (
    <Link to={product._id}>
      <Container>
        <img src={product.image[0].url} alt={product.name} />
        <TextData>
        <p>{product.name}</p>
          <Stars>
            <ReactStars
              edit={false}
              activeColor="tomato"
              color="#f1f1f1"
              value= {2.7}
              isHalf={true}
              size= {window.innerWidth < 600 ? 20 : 22 }
            />{" "}
            <p> {`256 Reviews`}</p>
          </Stars>
          <p>{ product.price }</p>
        </TextData>
      </Container>
    </Link>
  );
};

export default ProductCardView;

const Container = styled.div`
  margin: 1rem;
  border-radius: 7px;
  overflow: hidden;
  box-shadow:4px 4px 11px rgba(0,0,0,0.1),-4px -4px 9px rgba(255,255,255,0.3) ;

  img {
    height: 12rem;
  }
`;
const TextData = styled.div`
  margin:  0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`

const Stars = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p{
    font-size: 0.8rem;
    color:"#898989"
  }
`;

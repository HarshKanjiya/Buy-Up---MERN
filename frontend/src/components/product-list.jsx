import { Button } from "@mui/material";
import styled from "styled-components";
import ProductCardView from "./layout/product-cardview";


const products = [
  {
    name:"pocox3",
    price:"₹19000",
    image:[{
      url:"https://imgs.search.brave.com/TOyCCGsCTglBaiQ-wIbpn3jgNOduAVrvonzi8um6wDQ/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/aVR1R3VWRThPbWFn/N0NZX1YyQ3V3SGFG/aiZwaWQ9QXBp"
    }],
    _id:"harxhh"
  },
  {
    name:"pocox3",
    price:"₹19000",
    image:[{
      url:"https://imgs.search.brave.com/TOyCCGsCTglBaiQ-wIbpn3jgNOduAVrvonzi8um6wDQ/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/aVR1R3VWRThPbWFn/N0NZX1YyQ3V3SGFG/aiZwaWQ9QXBp"
    }],
    _id:"harxh2h"
  },
  {
    name:"pocox3",
    price:"₹19000",
    image:[{
      url:"https://imgs.search.brave.com/TOyCCGsCTglBaiQ-wIbpn3jgNOduAVrvonzi8um6wDQ/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/aVR1R3VWRThPbWFn/N0NZX1YyQ3V3SGFG/aiZwaWQ9QXBp"
    }],
    _id:"harx3hh"
  },
  {
    name:"pocox3",
    price:"₹19000",
    image:[{
      url:"https://imgs.search.brave.com/TOyCCGsCTglBaiQ-wIbpn3jgNOduAVrvonzi8um6wDQ/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/aVR1R3VWRThPbWFn/N0NZX1YyQ3V3SGFG/aiZwaWQ9QXBp"
    }],
    _id:"harx5hh"
  },
  
]

const ProductList = () => {
  return (
    <>
      <Featured>
      <Header>
        <p className="Home-Featured-Title">Featured Products</p>
        {/* <Button>more</Button> */}
        <Button>qw</Button>
      </Header>
      <Display>
      {
        products ?
        products.map((product, index) => <ProductCardView key={product._id} product={product} /> )
            :
            <p>no product</p>

      }
      </Display>
      </Featured>
    </>
  );
};

export default ProductList;

const Featured = styled.div`
margin: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .Home-Featured-Title {
    width: max-content;
    padding: 0.5rem 2rem;
    font-weight: 600;
  }
`;
const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const Display = styled.div`
display: flex;
overflow-x: auto;

`
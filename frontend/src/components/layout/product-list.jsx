import { Button } from "@mui/material";
import styled from "styled-components";
import ProductCardView from "../components/product-cardview";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const products = [
  {
    name: "pocox3",
    price: "₹19000",
    image: [
      {
        url: "https://imgs.search.brave.com/TOyCCGsCTglBaiQ-wIbpn3jgNOduAVrvonzi8um6wDQ/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/aVR1R3VWRThPbWFn/N0NZX1YyQ3V3SGFG/aiZwaWQ9QXBp",
      },
    ],
    _id: "harxhh",
  },
  {
    name: "pocox3",
    price: "₹19000",
    image: [
      {
        url: "https://imgs.search.brave.com/TOyCCGsCTglBaiQ-wIbpn3jgNOduAVrvonzi8um6wDQ/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/aVR1R3VWRThPbWFn/N0NZX1YyQ3V3SGFG/aiZwaWQ9QXBp",
      },
    ],
    _id: "harxh2h",
  },
  {
    name: "pocox3",
    price: "₹19000",
    image: [
      {
        url: "https://imgs.search.brave.com/TOyCCGsCTglBaiQ-wIbpn3jgNOduAVrvonzi8um6wDQ/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/aVR1R3VWRThPbWFn/N0NZX1YyQ3V3SGFG/aiZwaWQ9QXBp",
      },
    ],
    _id: "harx3hh",
  },
  {
    name: "pocox3",
    price: "₹19000",
    image: [
      {
        url: "https://imgs.search.brave.com/TOyCCGsCTglBaiQ-wIbpn3jgNOduAVrvonzi8um6wDQ/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/aVR1R3VWRThPbWFn/N0NZX1YyQ3V3SGFG/aiZwaWQ9QXBp",
      },
    ],
    _id: "harx5hhsh",
  },
  {
    name: "pocox3",
    price: "₹19000",
    image: [
      {
        url: "https://imgs.search.brave.com/TOyCCGsCTglBaiQ-wIbpn3jgNOduAVrvonzi8um6wDQ/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/aVR1R3VWRThPbWFn/N0NZX1YyQ3V3SGFG/aiZwaWQ9QXBp",
      },
    ],
    _id: "harxf5hh",
  },
  {
    name: "pocox3",
    price: "₹19000",
    image: [
      {
        url: "https://imgs.search.brave.com/TOyCCGsCTglBaiQ-wIbpn3jgNOduAVrvonzi8um6wDQ/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/aVR1R3VWRThPbWFn/N0NZX1YyQ3V3SGFG/aiZwaWQ9QXBp",
      },
    ],
    _id: "harx5hsh",
  },
  {
    name: "pocox3",
    price: "₹19000",
    image: [
      {
        url: "https://imgs.search.brave.com/TOyCCGsCTglBaiQ-wIbpn3jgNOduAVrvonzi8um6wDQ/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/aVR1R3VWRThPbWFn/N0NZX1YyQ3V3SGFG/aiZwaWQ9QXBp",
      },
    ],
    _id: "harx5dhh",
  },
];

const ProductList = () => {
  return (
    <>
      <Featured>
        <Header>
          <p>Featured Products</p>
          <p>xbvjhbcjhbvjhcb</p>
        </Header>
        <Display>
          
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
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    width: max-content;
    padding: 0.5rem 2rem;
    font-weight: 600;
    font-size: 1.1rem;
  }
`;
const More = styled(Button)`
  border-radius: 2rem !important;
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  padding: 0.5rem 1.5rem !important;
`;
const Display = styled.div`
  /* display: flex;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  } */
  width: 100%;
  background-color: red;
`;

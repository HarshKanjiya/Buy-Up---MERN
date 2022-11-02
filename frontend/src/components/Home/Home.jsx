import styled from "styled-components";

import scroll from "../../Assets/images/scroll-bar.png"
import ProductList from "../product-list";

const Home = () => {
  return (
    <Container>
      <Hero>
        <h1>Welcome to <span>Buy UP</span></h1>
        <p>Find Product that matches Your Life style</p>
        <a href="#container">
            <img src={scroll} alt="scroll down" />
        </a>
      </Hero>
      <ProductList />

    </Container>
  );
};

export default Home;

const Container = styled.div`
overflow-x: hidden;
`;

const Hero = styled.div`
height: 100vmin;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
color: white;
background-image: linear-gradient( to right,#635dc0, #3027ae ) ;

h1{
    margin: 1rem;
}
span{
    font-size: 3rem;
    color: #fff;
}
p{
    font-size: 2.5rem;
    padding-bottom: 3rem;
}
`;

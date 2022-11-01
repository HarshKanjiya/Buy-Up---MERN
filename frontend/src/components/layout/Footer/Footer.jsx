import styled from "styled-components";

import playStore from "../../../Assets/images/playstore.png";
import appStore from "../../../Assets/images/Appstore.png";
import logo from "../../../Assets/images/logo.png";
import instagram from '../../../Assets/images/instagram.png'
import linkedin from '../../../Assets/images/linkedin.png'

const Footer = () => {
  return (
    <Wrapper>
    <Container>
      <LeftFooter>
        <h3>DOWNLOAD OUR APP</h3>
        <p className="Footer-LeftFooter-Text">
            for Android and IOS 
        </p>
        <div className="Footer-LeftFooter-Img">
          <img src={playStore} alt="playstore" />
          <img src={appStore} alt="Appstore" />
        </div>
      </LeftFooter>

      <MidFooter>
        <img src={logo} />
        <p>High Quality is our first priority</p>

       
      </MidFooter>

      <RightFooter>
        <h3>Follow Us</h3>
        <div className="Footer-RightFooter">
          <a href="https://www.instagram.com/harxh_designs/" className="Footer-RightFooter-instagram" > <img src={instagram} />Instagram</a>
          <a href="https://www.linkedin.com/in/harsh-kanjiya-306aa21b9/" className="Footer-RightFooter-linkedin">
            <img src={linkedin} />LinkedIn
          </a>
        </div>
      </RightFooter>
    </Container>
    <p className="Footer-bottom-text" >Copyrights 2022 &copy; HarshKanjiya</p>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #0b0b0b;
  color: white;
  padding: 20px 0;
  overflow: hidden;

  .Footer-bottom-text{
    margin-top: 2rem;
    padding: 0.2rem;
    border-top: 1px solid #787878;
    border-bottom: 1px solid #787878;
    text-align: center;
  }
`

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const LeftFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;

  .Footer-LeftFooter-Text {
    font-size: 0.9rem;
    max-width: 80%;
  }
  .Footer-LeftFooter-Img {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 0.5rem;
    img {
      max-width: 8rem;
      height: auto;
    }
  }
  @media (max-width: 800px) {
    .Footer-LeftFooter {
      flex-direction: row;
    }
    .Footer-LeftFooter-Img{
        flex-direction: row;
    }
  }
`;
const MidFooter = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  img {
    height: 4rem;
    width: auto;
  }
`;
const RightFooter = styled.div`
    padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
text-align: center;
  .Footer-RightFooter {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  img{
    height: 1.5rem;
    width: auto;
  }
  a{
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .Footer-RightFooter-instagram{
    transition: 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275) ;
    &:hover{
        color: #fb3958;
    }
  }
  .Footer-RightFooter-linkedin{
    transition: 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275) ;

    &:hover{
        color:#0A66C2;
    }
  }
  
  @media (max-width: 800px) {
    .Footer-RightFooter {
      flex-direction: row;
    }
  }
`;

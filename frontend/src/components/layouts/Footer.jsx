import styled from "@emotion/styled";
import React from "react";
import Logo from "../../assets/images/logo.png";
import BackGround from "../../assets/images/FooterBackground.jpg";

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Footer = () => {
  return (
   <Wrapper>
     <Container>
      {/* app info */}
      <ProductInfo>
        <Title>
          <img src={Logo} alt="logo" />
          <p>BUY UP</p>
        </Title>
      </ProductInfo>

      {/* services */}
      <ProductLinks>
        <Title>
          <p>SERVICES</p>
        </Title>
      </ProductLinks>

      {/* social */}
      <SocialLinks>
        <TitleContectME>
          <p>CONTECT ME</p>
        </TitleContectME>

      <ListItem>

      </ListItem>
        
      </SocialLinks>
    </Container>
    <FooterText>
      copyright &copy; 2022 HARSH KANJIYA All rights reserved
    </FooterText>
   </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
overflow:hidden;
display: flex;
flex-direction: column;
gap:1rem
`

const FooterText = styled.p`
width: 100%;
margin-top: -1rem;
padding:1rem 0;
text-align:center;
font-family: "Hubballi", cursive;
color:white;
background-color: black;
`
const Container = styled.div`
  width: 100vw;
  height: max-content;
  padding-bottom: 2rem;
  overflow: hidden;
  background-image: linear-gradient(#121212, black);
  border-top: 1rem solid #2bb594;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  overflow: hidden;
`;
const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: white;
  padding-top: 2rem;
`;

const ProductLinks = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
  color: white;
`;
const SocialLinks = styled.div`
  padding-top: 2rem;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-image: linear-gradient(-180deg, #2bb594, #01b277);
`;

const Title = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: flex-end;
  img {
    height: 2.7rem;
    width: auto;
  }
  p {
    border-radius: 3px;
    border-bottom: 3px solid #2bb594;
    font-size: 2rem;
    font-family: "Hubballi", cursive;
  }
`;
const TitleContectME = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: flex-end;
  img {
    height: 2.7rem;
    width: auto;
  }
  p {
    border-radius: 3px;
    border-bottom: 3px solid #121212;
    font-size: 2rem;
    font-family: "Hubballi", cursive;
  }
`;
const ListItem = styled.div`

`
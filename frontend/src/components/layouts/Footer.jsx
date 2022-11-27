import styled from "@emotion/styled";
import React from "react";
import Logo from "../../assets/images/logo.png";
import BackGround from "../../assets/images/FooterBackground.jpg";

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

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
            <EmailOutlinedIcon />
            <p>harshkanjiya100@gmail.com</p>
          </ListItem>

          <ListItem>
            <WhatsAppIcon />
            <p>90542 42004</p>
          </ListItem>
          <ListItem>
            <p className="SocialLinks-SocialTag" >Social Media</p>
          </ListItem>

          <ListItem>
          <LinkedInIcon sx={{scale:'1.5'}} />
          <InstagramIcon sx={{scale:'1.5'}}/>
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
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top:2rem
`;
const FooterText = styled.p`
  width: 100%;
  margin-top: -1rem;
  padding: 1.5rem 0;
  text-align: center;
  font-family: "Hubballi", cursive;
  color: white;
  background-color: black;
`;
const Container = styled.div`
  width: 100vw;
  height: max-content;
  overflow: hidden;
  background-image: linear-gradient(#121212, black);
  border-top: 1rem solid #2bb594;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  overflow: hidden;

  @media ( max-width: 900px ){
    flex-direction: column;
  }

`;
const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: white;
  padding-top: 2rem;

  @media (max-width:480px){
    width: 100%;
  }
`;
const ProductLinks = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
  color: white;
  
  @media (max-width:480px){
    width: 100%;
  }
`;
const SocialLinks = styled.div`
  padding: 2rem 0 ;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-image: linear-gradient(-180deg, #2bb594, #01b277);
  
  @media (max-width:480px){
    width: 100%;
  }
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
  display: flex;
  gap: 1rem;
  margin: 0 4rem;

  .SocialLinks-SocialTag{
    border-bottom: 1px solid black;
    width: 100%;
  }

  
  @media (max-width:480px){
    width: 100%;
    margin: 0 1rem;

    .SocialLinks-SocialTag{
      width: 90%;
    }
  }
`;

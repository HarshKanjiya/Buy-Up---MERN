import styled from "@emotion/styled";
import React from "react";
import Logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Footer = () => {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <Container>
        {/* app info */}
        <ProductInfo>
          <Title>
            <img src={Logo} alt="logo" />
            <p>BUY UP</p>
          </Title>
          <FooterBody>
            <p className="Footer-ProfileClass">
              Hello there,👋
              <br />
              I'm Harsh and You are Watching My Side Project. Find More about me
              at About me page.
            </p>
          </FooterBody>
        </ProductInfo>

        {/* services */}
        <ProductLinks>
          <Title>
            <p>SERVICES</p>
          </Title>
          <FooterBody>
            
              <ListItem onClick={()=>{ navigate('/') }} >
                <NavigateNextIcon /> Home
              </ListItem>
            

              <ListItem onClick={()=>{ navigate('/products') }}>
                <NavigateNextIcon /> Products
              </ListItem>

              <ListItem onClick={()=>{ navigate('/profile') }}>
                <NavigateNextIcon /> Profile
              </ListItem>

              <ListItem onClick={()=>{ navigate('/aboutme') }}>
                <NavigateNextIcon /> About me
              </ListItem>
          </FooterBody>
        </ProductLinks>

        {/* social */}
        <SocialLinks>
          <TitleContectME>
            <p>CONTECT ME</p>
          </TitleContectME>

          <FooterBody>
            <ListItem>
              <EmailOutlinedIcon />
              <p>harshkanjiya100@gmail.com</p>
            </ListItem>

            <ListItem>
              <WhatsAppIcon />
              <p>90542 42004</p>
            </ListItem>
            <ListItem>
              <p className="SocialLinks-SocialTag">Social Media</p>
            </ListItem>

            <ListItem>
              <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
                <LinkedInIcon sx={{ scale: "1.5" }} />
              </a>
              <a href="https://www.instagram.com/harxh_designs/">
                <InstagramIcon sx={{ scale: "1.5" }} />
              </a>
            </ListItem>
          </FooterBody>
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
  font-size: 0.9rem;
  margin-top: 2rem;
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
  border-top: 0.5rem solid #2bb594;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  overflow: hidden;

  @media (max-width: 900px) {
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

  @media (max-width: 900px) {
    width: 100%;
  }
`;
const ProductLinks = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0;
  color: white;

  @media (max-width: 900px) {
    width: 100%;
  }
`;
const SocialLinks = styled.div`
  padding: 2rem 0;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-image: linear-gradient(-180deg, #2bb594, #01b277);

  @media (max-width: 900px) {
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
    font-size: 1.5rem;
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
  cursor: pointer;


  .SocialLinks-SocialTag {
    border-bottom: 1px solid black;
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin: 0 1rem;

    .SocialLinks-SocialTag {
      width: 90%;
    }
  }
`;
const FooterBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  width: max-content;
  margin: 0 auto;

  .Footer-ProfileClass {
    max-width: 290px;
    text-justify: inter-word;
  }

  @media (max-width: 480px) {
    align-items: flex-start;
    width: 100%;
    margin: 0 1rem;

    .Footer-ProfileClass {
      max-width: 90vw;
    }
  }
`;

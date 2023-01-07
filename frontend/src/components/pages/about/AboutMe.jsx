import React from "react";
import styled from "@emotion/styled";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Insta from "../../../assets/images/instagram.png";
import Linkdin from "../../../assets/images/linkedin.png";
import Github from "../../../assets/images/github.png";
import Gmail from "../../../assets/images/gmail.png";


const AboutMe = () => {
  return (
    <Wrapper>
      <Cont>
        <Header>
          <p>
            About <span>ME</span>
          </p>
        </Header>
        <Body>
          <Left>
            <p>Hi there 🙋‍♂️ </p>
            <p>
              I'm <span>Harsh Kanjiya</span>,
            </p>
            <p>
              a self taught <span>Full stack developer</span> &{" "}
              <span>UIUX Designer</span>.
            </p>
            <br />
            <p>
              this is my first Full stack project after learning for 5 months
            </p>
            <p>
              i used <span>MERN stack</span> for making this web Application.
            </p>
            <p>
              I also used <span>cloudinary</span> For storing Images of products
              and profile Pictures.
            </p>
            <br />
            <p>If you want to contect me then,</p>
            <Links>
              <a href="https://www.linkedin.com/in/harsh-kanjiya-306aa21b9/">
                <img src={Linkdin} alt="linkedin" />
              </a>
              <a href="https://www.instagram.com/harxh_designs/">
                <img src={Github} alt="github" />
              </a>
             
              <a href="https://www.instagram.com/harxh_designs/">
                <img src={Insta} alt="instagram" />
              </a>
            </Links>
            <a href="mailto:harshkanjiya001@gmail.com">
                <img src={Gmail} alt="email" />
              </a>
          </Left>
          <Right>
            <Player
              autoplay
              loop
              src="https://assets6.lottiefiles.com/packages/lf20_pghdouhq.json"
              style={{ height: "300px", width: "300px" }}
            >
              <Controls />
            </Player>
          </Right>
        </Body>
      </Cont>
    </Wrapper>
  );
};

export default AboutMe;

const Links = styled.div`
  display: flex;
  gap: 0.7rem;
  margin: 0.5rem 0;
 
`;

const Left = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  p {
    color: #787878;
  }
  span {
    color: #2bb595;
    font-weight: 600;
  }
  img {
    height: 2rem;
    width: 2rem;
    transition: 300ms;
  }
`;

const Right = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin: 1rem;
  padding: 1rem;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;
const Header = styled.div`
  margin: 1rem;
  border-bottom: 1px solid #d1d1d1;
  p {
    font-size: 2rem;
    font-weight: 900;
    color: #d1d1d1;
  }
  span {
    color: #232323;
  }
`;
const Cont = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 1rem;
  margin: 1rem;
  height: 100%;
  width: 100%;
  border-radius: 9px;
  box-shadow: 8px 8px 1rem rgba(0, 0, 0, 0.2),
    -8px -8px 1rem rgba(255, 255, 255, 0.1);
`;
const Wrapper = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: linear-gradient(-40deg, #11483b, #08614b);
`;

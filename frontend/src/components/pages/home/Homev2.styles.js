import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(120deg, #071b0f, #2b3d32);
  overflow: hidden;
  z-index: -1;
`;
export const BGteal = styled.div`
  content: " ";
  position: absolute;
  width: 27rem;
  height: 150vh;
  background-color: #2bb594;
  transform: rotate(10deg);
  right: 10vw;
  top: -20vh;
`;
export const Text = styled.div`
  display: flex;
  height: 100vh;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #909090;
  p {
    line-height: 4rem;
    font-size: 2rem;
    span {
      font-size: 5rem;
      background: -webkit-linear-gradient(-50deg, #2bb594, #2b3d32);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 700;
      position: relative;
    }
  }
`;
export const Spacer = styled.div`
  height: 119vh;
  width: 100%;
  background-color: white;
  content: " ";
  -webkit-clip-path: polygon(0 98%, 0% 100%, 100% 100%);
  clip-path: polygon(0 98%, 0% 100%, 100% 100%);
  background-image: linear-gradient(60deg, #071b0f, #2b3d32);
`;
export const Content = styled.div`
  background-color: white;
  min-height: 100vh;
  background-image: linear-gradient(120deg, #071b0f, #2b3d32);
`;

export const ExploreMore = styled.a`
  color: white;
  position: absolute;
  z-index: 10;
  right: -0.5rem;
  bottom: 8rem;
  font-weight: 300;
  letter-spacing: 1px;
  padding: 0.6rem 1rem;
  border: 1px solid white;
  border-radius: 2rem;
  transform: rotate(90deg);
  font-size: 0.9rem;
  transition: 300ms ease-out;

  &:hover {
    background-color: white;
    color: #2b3d32;
  }
`;

export const Btn1 = styled.div`
  height: 3rem;
  width: 3rem;
  padding: 1rem;
  border-radius: 3rem;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  display: grid;
  place-content: center;
  position: absolute;
  top: 40%;
  right: 10%;
  transition: 300ms ease-out;

  &:hover {
    background-color: white;
    color: #2b3d32;
    box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.4);
  }
`;

export const Btn2 = styled.div`
  height: 3rem;
  width: 3rem;
  padding: 1rem;
  border-radius: 2rem;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  position: absolute;
  display: grid;
  place-content: center;
  top: 60%;
  right: 12%;
  transition: 300ms ease-out;

  &:hover {
    background-color: white;
    color: #2b3d32;
    box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.4);
  }
`;

export const Cartwtapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 33vh;
  align-items: center;
  justify-content: center;
  width: max-content;
  background-color: blue;

  img {
    height: 6rem;
    width: 6rem;
  }
`;
export const CustomeSlider = styled.div`
  position: fixed;
  right: 25vw;
  width: max-content;
  z-index: -1;
  background-color: red;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

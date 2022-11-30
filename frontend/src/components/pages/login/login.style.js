import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: grid;
  place-content: center;
  background-image: linear-gradient(45deg, #b2f8e8, #cffff3);
`;
export const Container = styled.div`
  height: 80vh;
  width: 80vw;
  background-color: white;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
`;

// img
export const Img = styled.div`
  flex: 1;
  width: 50%;
  height: 100%;
  position: relative;
  background-image: conic-gradient(
    from 0.5turn at 50% 50%,
    #15ffe1,
    #48edc5,
    #3cecc1,
    #cffff3
  );
`;
export const Blur = styled.div`
  height: 100%;
  width: 100%;
  backdrop-filter: blur(20px);
  background-color: rgba(0, 0, 0, 0.05);
`;
export const Grid = styled.div`
  height: 100%;
  width: 100%;
  margin: -1px;
  opacity: 0.3;
  z-index: 10;
  position: absolute;
  background-image: repeating-linear-gradient(#ccc 0 1px, transparent 1px 100%),
    repeating-linear-gradient(90deg, #ccc 0 1px, transparent 1px 100%);
  background-size: 75px 75px;
`;
export const ImgTextWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 99;
  left: 0;
  top: 0;

  display: grid;
  place-content: center;
`;
export const ImgText = styled.div`
  color: #b2f8e8;
  font-size: 2.2rem;
  padding:  2rem;
  border-radius: 6px;
  backdrop-filter: blur(5px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.15)
  );
  h6{
    font-size: 1rem;
    letter-spacing: 1px;
    color:rgba(255,255,255,0.8);
  }
  span {
    font-size: 2.7rem;
    font-weight: 700;
    color: white;
  }
`;

// form
export const Form = styled.div`
  flex: 1;
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
export const FormHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

img{
    height: 3rem;
    width: auto;
}
.FormHeaderElement-p{
    font-size: 2rem;
    font-weight: 700;
    color: #0c3324 ;
}

`
export const FormHeaderElement = styled.div`
display: flex;
gap:0.5rem;
`

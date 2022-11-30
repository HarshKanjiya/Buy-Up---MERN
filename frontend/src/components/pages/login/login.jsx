import Logo from "../../../assets/images/logo.png";
import {
  Blur,
  Container,
  Form,
  FormHeader,
  FormHeaderElement,
  Grid,
  Img,
  ImgText,
  ImgTextWrapper,
  Wrapper,
} from "./login.style";

const Login = () => {
  return (
    <>
      <Wrapper>
        <Container>
          {/* imgggg */}
          <Img>
            <Grid />
            <Blur />
            <ImgTextWrapper>
              <ImgText>
                <p>Smart</p>
                <span>PRODUCTS</span>
                <p>for</p>
                <p>
                  smart <span>PEOPLE</span>.
                </p>
                <h6>products for Better Lifestyle.</h6>
              </ImgText>
            </ImgTextWrapper>
          </Img>

          {/* fomr */}
          <Form>
            <FormHeader>
              <FormHeaderElement>
                <img src={Logo} alt="logo" />
                <p className="FormHeaderElement-p">BUY UP</p>
              </FormHeaderElement>
            </FormHeader>
          </Form>
        </Container>
      </Wrapper>
    </>
  );
};

export default Login;

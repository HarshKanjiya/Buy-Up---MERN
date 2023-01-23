import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 91.2vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(-90deg, #2bb594, #01b277);

  @media (max-width: 555px) {
    padding: 0.5rem;
  }
`;
export const Container = styled.div`
  width: 100%;
  margin: 1rem;
  padding: 1rem;
  overflow: hidden;
  background-color: #fafffe;
  border-radius: 9px;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.06),
    -3px -3px 1.5rem rgba(255, 255, 255, 0.06);

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (max-width: 555px) {
    padding: 0.3rem;
    gap: 0.5rem;
    margin: 0;
  }
`;
export const Left = styled.div`
  height: 100%;
  background-color: white;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  border-radius: 9px;

  @media (max-width: 555px) {
    padding: 0.2rem;
  }
`;
export const LeftLogoEle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  overflow: hidden;
  img {
    height: 2.5rem;
    width: auto;
  }
`;
export const LeftElement = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  padding: 0.5rem;
  color: #898989;
  border-radius: 7px 0 0 7px;
  border: 2px solid white;
  transform: 100ms;
  cursor: pointer;
  p {
    background-color: white;
    border: 2px solid white;
    border-left: none;
    border-radius: 0 7px 7px 0;
    z-index: 99;
    position: absolute;
    padding: 0.5rem 0.3rem;
    padding-right: 1rem;
    left: 100%;
    flex: 1;
    display: none;
  }
  .dashboard-left-hover-white {
    color: #2bb594;
  }
  &:hover {
    background-color: #2bb594;
    z-index: 100;
    color: white;
    box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.16),
      30px 0 1.5rem rgba(0, 0, 0, 0.14), 60px 0 1.5rem rgba(0, 0, 0, 0.14);
    p {
      display: block;
      background-color: #2bb594;
      @media (max-width:600px){
      display:none;
    }
    }
    .dashboard-left-hover-white {
      color: white;
    }

    @media (max-width:600px){
     box-shadow:none;
     background-color: #fff;
     color:#898989;
     .dashboard-left-hover-white{
      color:#898989;
     }


    }

    
  }
`;
export const Right = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex: 1;
  padding: 0.5rem;
  overflow-y: scroll;
  /* background-color: white; */
  /* box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.06); */
  /* border-radius: 9px; */
`;

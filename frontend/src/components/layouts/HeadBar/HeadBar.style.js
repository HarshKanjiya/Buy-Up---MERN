import styled from "@emotion/styled";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Slider,
} from "@mui/material";

// base UI
export const HeadBarWrapper = styled.div`
  width: 100%;
  background-color: #fafafa;
  box-shadow: inset -2px -2px 9px rgba(0, 0, 0, 0.07);

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem 1rem;

  .HeadBar-left {
    display: flex;
    gap: 0.8rem;
  }

  .HeadBar-right {
    width: 40%;
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }

  @media (max-width: 650px) {
    .HeadBar-left {
      justify-content: flex-start;
      width: 100%;
    }
    .HeadBar-right {
      width: 100%;
      align-items: center;
      flex-wrap: wrap;
    }
  }
  @media (max-width: 650px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;
export const HeadBarElement = styled(Button)`
  background: white;
  padding: 0.2rem 0.5rem;
  border-radius: 7px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.08);
  color: #909090;

  display: grid !important;
  place-content: center !important;

  &:hover {
    background-color: #fff;
  }
`;
export const HeadBarElementSearchInput = styled.div`
  background: white;
  padding: 0.2rem 0.7rem;
  border-radius: 7px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.08);
  color: #232323;

  width: 100%;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  input {
    outline: none;
    border-bottom: 1px solid #f5f5f5;
    width: 85%;

    &::placeholder {
      color: #a0a0a0;
    }
  }
  button {
    position: absolute;
    right: 0;
    height: 100%;
    width: 2rem;
    border-radius: 0 7px 7px 0;
    color: #0c3324;
    background-image: linear-gradient(90deg, #2bb594, #01b277);
    transition: 300ms;
    &:hover {
      color: white;
    }
  }

  @media (max-width: 480px) {
    margin: 0.5rem 0;
    width: 100%;
  }
`;
export const HeadBarElementFilter = styled.button`
  background-image: linear-gradient(90deg, #2bb594, #01b277);
  display: grid;
  place-content: center;
  border-radius: 7px;
  padding: 0 0.5rem;
  color: #0c3324;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.08);
  transition: 300ms;
  &:hover {
    color: white;
  }
  @media (max-width: 480px) {
    height: 32px;
  }
`;

// filter UI

export const FilterDialog = styled(Dialog)``;
export const FilterDialogTitle = styled(DialogTitle)`
  font-size: 1.2rem;
`;
export const FilterDialogContent = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  margin:0.5rem;
  padding: 1rem;
  gap: 0.5rem;
  min-width: 50vw;

  @media (max-width: 480px) {
    min-width: 80vw;
  }
`;
export const FilterDialogSlider = styled(Slider)`
width: 60%;
color:#2bb594;

`;
export const FilterDialogFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  `;
export const FilterDialogFooterButton = styled(Button)`
  display: flex;
  gap: 1rem;
  color:white;

  background-image: linear-gradient(90deg, #2bb594, #01b277);
`;

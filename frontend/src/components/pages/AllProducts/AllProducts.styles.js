import styled from "@emotion/styled";
import Pagination from "@mui/material/Pagination";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 1rem;
`;
export const Title = styled.div`
display: grid;
place-content: center;
  h1 {
    width: max-content;
    border-bottom: 1px solid #909090;
    padding: 0.2rem 0.5rem;
    font-size: 1.3rem;
    margin-bottom: 0.3rem;
  }
`;
export const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

// pagination
export const ProductPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;

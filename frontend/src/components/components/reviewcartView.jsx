import styled from "@emotion/styled";
import ReactStars from "react-rating-stars-component";

const ReviewCartView = ({review}) => {
    return ( 
        <Container>
         <ReactStars
                color="#f1f1f1"
                activeColor="tomato"
                isHalf
                size={20}
                edit={false}
                value={review.rating}
              />
              <p> {review.comment} </p>
              <p className="ReviewCartView-author"> ~{review.name} </p>
        </Container>
     );
}
 
export default ReviewCartView;

const Container = styled.div`
font-size: 0.8rem;
width:200px;
min-width: 170px;
border-radius:11px;
border: 1px solid #d0d0d0;
padding:1rem;
margin: 0 0.5rem;

&::hover{
    border-color:#909090;
}

.ReviewCartView-author{
    width:100%;
    text-align:end;
    padding-top: 0.7rem;
}
`
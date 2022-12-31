import styled from "@emotion/styled";

export const HeadLine = styled.p`
  font-weight: 700;
  font-size: 2rem;
  color: #d1d1d1;
`;
export const HeadLineBeta = styled.p`
  font-weight: 500;
  font-size: 1.3;
  color: #d1d1d1;
  margin-top: 0.5rem;
`;

export const HeaderElementsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 1rem 0;
  flex-wrap: wrap;

  .dashboardlayout-overview-profit {
    background: hsla(149, 100%, 37%, 1);

    background: linear-gradient(
      45deg,
      hsla(149, 100%, 37%, 1) 0%,
      hsla(157, 100%, 23%, 1) 100%
    );

    background: -moz-linear-gradient(
      45deg,
      hsla(149, 100%, 37%, 1) 0%,
      hsla(157, 100%, 23%, 1) 100%
    );

    background: -webkit-linear-gradient(
      45deg,
      hsla(149, 100%, 37%, 1) 0%,
      hsla(157, 100%, 23%, 1) 100%
    );

    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#00BD5B", endColorstr="#007548", GradientType=1 );
  }
  .dashboardlayout-overview-products {
    background: hsla(220, 78%, 29%, 1);

    background: linear-gradient(
      45deg,
      hsla(220, 78%, 29%, 1) 0%,
      hsla(186, 100%, 69%, 1) 100%
    );

    background: -moz-linear-gradient(
      45deg,
      hsla(220, 78%, 29%, 1) 0%,
      hsla(186, 100%, 69%, 1) 100%
    );

    background: -webkit-linear-gradient(
      45deg,
      hsla(220, 78%, 29%, 1) 0%,
      hsla(186, 100%, 69%, 1) 100%
    );

    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#103783", endColorstr="#60efff", GradientType=1 );
  }
  .dashboardlayout-overview-orders {
    background: hsla(40, 95%, 42%, 1);

    background: linear-gradient(
      45deg,
      hsla(40, 95%, 42%, 1) 0%,
      hsla(60, 89%, 72%, 1) 100%
    );

    background: -moz-linear-gradient(
      45deg,
      hsla(40, 95%, 42%, 1) 0%,
      hsla(60, 89%, 72%, 1) 100%
    );

    background: -webkit-linear-gradient(
      45deg,
      hsla(40, 95%, 42%, 1) 0%,
      hsla(60, 89%, 72%, 1) 100%
    );

    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#D18D05", endColorstr="#F7F779", GradientType=1 );
  }
  .dashboardlayout-overview-users {
    background: hsla(176, 68%, 12%, 1);

    background: linear-gradient(
      45deg,
      hsla(176, 68%, 12%, 1) 0%,
      hsla(159, 35%, 45%, 1) 100%
    );

    background: -moz-linear-gradient(
      45deg,
      hsla(176, 68%, 12%, 1) 0%,
      hsla(159, 35%, 45%, 1) 100%
    );

    background: -webkit-linear-gradient(
      45deg,
      hsla(176, 68%, 12%, 1) 0%,
      hsla(159, 35%, 45%, 1) 100%
    );

    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#0A3431", endColorstr="#4A9B7F", GradientType=1 );
  }
`;
export const HeaderElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1rem;
  border: 1px solid white;
  border-radius: 9px;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.09);
  min-width: 200px;
  min-height: 120px;
  padding: 1rem;
  position: relative;
  img {
    position: absolute;
    height: 3.5rem;
    width: auto;
    right: 0.5rem;
    bottom: 0.5rem;
    opacity: 0.4;
  }
  .dashboardlayout-header-ele-subtext {
    color: white;
    font-weight: 600;
    font-size: 1.2rem;
    opacity: 0.3;
  }
  .dashboardlayout-header-ele-text {
    color: white;
    font-weight: 600;
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    min-height: 100px;
    min-width: 170px;
    img {
      height: 2rem;
    }
    .dashboardlayout-header-ele-subtext {
      font-size: 1rem;
    }
    .dashboardlayout-header-ele-text {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 480px) {
    gap: 0.5rem;
    min-height: 80px;
    min-width: 120px;
    img {
      height: 1.5rem;
    }
    .dashboardlayout-header-ele-subtext {
      font-size: 0.7rem;
    }
    .dashboardlayout-header-ele-text {
      font-size: 1rem;
    }
  }
`;
export const ChartWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100% ;
  gap: 1rem;
  height: max-content;
`;
export const LineGraphWrapper = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  background-color: white;
  border: 1px solid white;
  border-radius: 9px;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.09);

  display: grid;
  place-content: center;
  @media (max-width: 800px) {
    max-width: 60vw;
  }
`;
export const DoughnutChartWrapper = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  background-color: white;
  border: 1px solid white;
  border-radius: 9px;
  display: grid;
  place-content: center;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.09);
  @media (max-width: 800px) {
    width: 60vw;
  }
`;

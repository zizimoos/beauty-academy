import React from "react";
import styled from "styled-components";

import CarouselResponse from "../Components/Carousel/CarouselResponse";

const Container = styled.div`
  width: 100vw;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
function Main(props) {
  return (
    <Container>
      <div>Main</div>
      <CarouselResponse />
      <div>Main</div>
      <CarouselResponse />
      <div>Main</div>
      <CarouselResponse />
    </Container>
  );
}

export default Main;

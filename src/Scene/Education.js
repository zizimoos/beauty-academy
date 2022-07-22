import React from "react";
import styled from "styled-components";

import CarouselSwiper from "../Components/Carousel/CarouselSwiper";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Education(props) {
  return (
    <Container>
      <div>Education</div>
      <CarouselSwiper />
    </Container>
  );
}

export default Education;

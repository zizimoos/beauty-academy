import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img_01 from "../../assets/images/beauty_01.jpg";
import img_02 from "../../assets/images/beauty_02.jpg";
import img_03 from "../../assets/images/beauty_03.jpg";
import img_04 from "../../assets/images/beauty_04.jpg";
import img_05 from "../../assets/images/beauty_05.jpg";
import img_06 from "../../assets/images/beauty_06.jpg";
// import img_07 from "../../assets/images/beauty_07.jpg";
// import img_08 from "../../assets/images/beauty_08.jpg";
// import img_09 from "../../assets/images/beauty_09.jpg";
// import img_10 from "../../assets/images/beauty_10.jpg";
// import img_11 from "../../assets/images/beauty_11.jpg";
// import img_12 from "../../assets/images/beauty_12.jpg";

const CarouselContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 280px) {
    width: 280px;
  }
  @media (min-width: 375px) {
    width: 375px;
  }
  @media (min-width: 390px) {
    width: 390px;
  }
  @media (min-width: 393px) {
    width: 393px;
  }
  @media (min-width: 412px) {
    width: 412px;
  }
  @media (min-width: 414px) {
    width: 414px;
  }
  @media (min-width: 540px) {
    width: 540px;
  }
  @media (min-width: 768px) {
    width: 540px;
  }
  @media (min-width: 820px) {
    width: 540px;
  }
  @media (min-width: 912px) {
    width: 540px;
  }
  @media (min-width: 1024px) {
    width: 600px;
  }
  @media (min-width: 1280px) {
    width: 600px;
  }
`;
const Image = styled.img`
  width: 360px;
  object-fit: cover;
  margin: 0 auto;
  @media (max-width: 280px) {
    width: 280px;
  }
  @media (min-width: 375px) {
    width: 375px;
  }
  @media (min-width: 390px) {
    width: 390px;
  }
  @media (min-width: 393px) {
    width: 393px;
  }
  @media (min-width: 412px) {
    width: 412px;
  }
  @media (min-width: 414px) {
    width: 414px;
  }
  @media (min-width: 540px) {
    width: 540px;
  }
  @media (min-width: 768px) {
    width: 540px;
  }
  @media (min-width: 820px) {
    width: 540px;
  }
  @media (min-width: 912px) {
    width: 540px;
  }
  @media (min-width: 1024px) {
    width: 600px;
  }
  @media (min-width: 1280px) {
    width: 600px;
  }
`;

function CarouselResponse({ width }) {
  return (
    <CarouselContainer width={width}>
      <Carousel
        showStatus={false}
        showArrows={true}
        showIndicators={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        showThumbs={false}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
        dynamicHeight={true}

        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
      >
        <div>
          <Image src={img_01} />
        </div>
        <div>
          <Image src={img_02} />
        </div>
        <div>
          <Image src={img_03} />
        </div>
        <div>
          <Image src={img_04} />
        </div>
        <div>
          <Image src={img_05} />
        </div>
        <div>
          <Image src={img_06} />
        </div>
      </Carousel>
    </CarouselContainer>
  );
}

export default CarouselResponse;

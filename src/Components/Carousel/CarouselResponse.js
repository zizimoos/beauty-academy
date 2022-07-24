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

const CarouselContainer = styled.div`
  width: 360px;
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
    width: 768px;
  }
  @media (min-width: 820px) {
    width: 820px;
  }
  @media (min-width: 912px) {
    width: 912px;
  }
  @media (min-width: 1024px) {
    width: 414px;
  }
  @media (min-width: 1280px) {
    width: 414px;
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
    width: 768px;
  }
  @media (min-width: 820px) {
    width: 820px;
  }
  @media (min-width: 912px) {
    width: 912px;
  }
  @media (min-width: 1024px) {
    width: 414px;
  }
  @media (min-width: 1280px) {
    width: 414px;
  }
`;

function CarouselResponse(props) {
  return (
    <CarouselContainer>
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

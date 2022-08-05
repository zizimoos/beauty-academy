import React from "react";
import styled from "styled-components";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import img_01 from "../../assets/images/beauty_01.jpg";
import img_02 from "../../assets/images/beauty_02.jpg";
import img_03 from "../../assets/images/beauty_03.jpg";
import img_04 from "../../assets/images/beauty_04.jpg";
import img_05 from "../../assets/images/beauty_05.jpg";
import img_06 from "../../assets/images/beauty_06.jpg";
import img_07 from "../../assets/images/beauty_07.jpg";
import img_08 from "../../assets/images/beauty_08.jpg";
import img_09 from "../../assets/images/beauty_09.jpg";
import img_10 from "../../assets/images/beauty_10.jpg";
import img_11 from "../../assets/images/beauty_11.jpg";
import img_12 from "../../assets/images/beauty_12.jpg";

const CarouselContainer = styled.div`
  // width: 360px;
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
  // margin: 0 auto;
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

function CarouselSwiper({ width }) {
  return (
    <CarouselContainer width={width}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        a11y={true}
        //   onSwiper={(swiper) => console.log(swiper)}
        //   onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Image src={img_07} alt="Image"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img_08} alt="Image"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img_09} alt="Image"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img_10} alt="Image"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img_11} alt="Image"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img_12} alt="Image"></Image>
        </SwiperSlide>
      </Swiper>
    </CarouselContainer>
  );
}

export default CarouselSwiper;

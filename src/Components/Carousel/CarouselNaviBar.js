import React from "react";
import styled from "styled-components";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CarouselContainer = styled.div`
  width: ${(props) => props.width}px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: black;
  div {
    width: ${(props) => props.width}px;
    margin-top: 15px;
    margin-bottom: 2px;
    font-size: 1rem;
    text-align: center;
    // padding: 1rem;
    background-color: black;
    color: white;
  }
  @media (max-width: 280px) {
    width: 280px;
  }
  @media (min-width: ${(props) => props.width}px) {
    width: ${(props) => props.width}px;
  }
  //   @media (min-width: 390px) {
  //     width: 390px;
  //   }
  //   @media (min-width: 393px) {
  //     width: 393px;
  //   }
  //   @media (min-width: 412px) {
  //     width: 412px;
  //   }
  //   @media (min-width: 414px) {
  //     width: 414px;
  //   }
  //   @media (min-width: 540px) {
  //     width: 540px;
  //   }
  //   @media (min-width: 768px) {
  //     width: 540px;
  //   }
  //   @media (min-width: 820px) {
  //     width: 768px;
  //   }
  //   @media (min-width: 912px) {
  //     width: 540px;
  //   }
  //   @media (min-width: 1024px) {
  //     width: 912px;
  //   }
  //   @media (min-width: 1280px) {
  //     width: 1280px;
  //   }
`;

function CarouselNaviBar(props) {
  return (
    <CarouselContainer>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={4}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        a11y={true}
        //   onSwiper={(swiper) => console.log(swiper)}
        //   onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div>교육과정</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>교육과정</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>교육과정</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>교육과정</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>교육과정</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>교육과정</div>
        </SwiperSlide>
      </Swiper>
    </CarouselContainer>
  );
}

export default CarouselNaviBar;

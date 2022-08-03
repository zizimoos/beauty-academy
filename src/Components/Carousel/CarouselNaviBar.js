import React from "react";
import styled from "styled-components";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { windowDimensionsStateAtom } from "../../Recoil";
import { useRecoilValue } from "recoil";

const CarouselContainer = styled.div`
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: orchid;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    text-align: center;
    background-color: orchid;
    color: white;
  }
  @media (max-width: 280px) {
    width: 280px;
  }
  @media (max-width: ${(props) => props.width}px) {
    width: ${(props) => (props.width > 1280 ? 1280 : props.width)}px;
  }
`;

function CarouselNaviBar({ width }) {
  const windowDimensions = useRecoilValue(windowDimensionsStateAtom);
  return (
    <CarouselContainer width={windowDimensions.width}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={1}
        slidesPerView={width > 1279 ? 8 : width > 1023 ? 6 : 4}
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
          <div>창업코스</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>입시코스</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>리얼후기</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>합격현황</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>커뮤니티</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>무료특강</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>이벤트</div>
        </SwiperSlide>
      </Swiper>
    </CarouselContainer>
  );
}

export default CarouselNaviBar;

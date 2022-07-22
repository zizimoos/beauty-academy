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

const CarouselContainer = styled.div`
  width: 540px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: 600px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0 auto;
`;

function CarouselSwiper(props) {
  return (
    <CarouselContainer>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        //   scrollbar={{ draggable: true }}
        a11y={true}
        //   onSwiper={(swiper) => console.log(swiper)}
        //   onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Image src={img_01} alt="Image"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img_02} alt="Image"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img_03} alt="Image"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img_04} alt="Image"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img_05} alt="Image"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img_06} alt="Image"></Image>
        </SwiperSlide>
      </Swiper>
    </CarouselContainer>
  );
}

export default CarouselSwiper;
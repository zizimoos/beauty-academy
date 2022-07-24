import React from "react";
import styled from "styled-components";

import CarouselSwiper from "../Components/Carousel/CarouselSwiper";

const Container = styled.div`
  width: 100vw;
  // margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TextBox = styled.div`
  width: 100vw;
  padding: 20px;
`;
function Education(props) {
  return (
    <Container>
      <CarouselSwiper />
      <TextBox>
        모든 플랫폼의 사진 치수를 기억해야 하던 나날은 이제 없습니다. 원하는
        디자인을 정하고 나면 Adobe Express의 간편하고 마법 같은 크기 조절
        기능으로 아무 소셜 플랫폼 규격으로 바꿀 수 있습니다. 프로젝트를
        복제하고, 크기 조절을 누르고, 원하는 플랫폼을 선택하면 나머지는 AI가
        알아서 합니다. 모든 채널의 콘텐츠를 순식간에 완성할 수 있습니다.
      </TextBox>
      <TextBox>
        모든 플랫폼의 사진 치수를 기억해야 하던 나날은 이제 없습니다. 원하는
        디자인을 정하고 나면 Adobe Express의 간편하고 마법 같은 크기 조절
        기능으로 아무 소셜 플랫폼 규격으로 바꿀 수 있습니다. 프로젝트를
        복제하고, 크기 조절을 누르고, 원하는 플랫폼을 선택하면 나머지는 AI가
        알아서 합니다. 모든 채널의 콘텐츠를 순식간에 완성할 수 있습니다.
      </TextBox>
    </Container>
  );
}

export default Education;

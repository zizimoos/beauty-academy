import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { windowDimensionsStateAtom } from "../Recoil";

const FooterContainer = styled.div`
  width: 100vw;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  div {
    width: 100vw;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: black;
    flex: 1;
  }
  div:last-child {
    margin-bottom: 50px;
  }
`;

function Footer(props) {
  const windowDimensions = useRecoilValue(windowDimensionsStateAtom);
  return (
    <FooterContainer height={windowDimensions.height}>
      <div>이용약관 | 개인정보처리방침 | 지점안내</div>
      <div>회사소개 1.</div>
      <div>회사소개 2.</div>
    </FooterContainer>
  );
}

export default Footer;

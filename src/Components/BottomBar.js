import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { windowDimensionsStateAtom } from "../Recoil";

const BottomBarContainer = styled.div`
  width: 100vw;
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 10;
  div:first-child {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: teal;
    flex: 1;
  }
  div:last-child {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: dodgerblue;
    flex: 1;
  }
`;

function BottomBar(props) {
  const windowDimensions = useRecoilValue(windowDimensionsStateAtom);
  return (
    <BottomBarContainer height={windowDimensions.height}>
      <div>채팅상담</div>
      <div>수강료3초</div>
    </BottomBarContainer>
  );
}

export default BottomBar;

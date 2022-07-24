import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { windowDimensionsStateAtom } from "../Recoil";
import CarouselNaviBar from "./Carousel/CarouselNaviBar";
// import Logo from "../assets/Logo.png";

const NavbarContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  height: 50px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: lightGrey;
  border: none;
  z-index: 10;
  @media (max-width: ${(props) => props.width}px) {
    width: ${(props) => props.width}px;
  }
`;
const NavbarInnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: none;
`;
const LeftNavbarContainer = styled.div`
  display: flex;
  flex: 70%;
  justify-content: flex-start;
  align-items: flex-start;
  color: black;
  background-color: lightGrey;
  border: none;
`;
const RightNavbarContainer = styled.div`
  flex: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightGrey;
  border: none;
`;
const HamburgerButton = styled.button`
  width: 40px;
  height: 40px;
  font-size: 25px;
  align-self: center;
  cursor: pointer;
  border: none;
  color: white;
  background-color: transparent;
`;
const NavList = styled.div`
  width: 60vw;
  height: 100vh;
  position: absolute;
  top: 50px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 20px;
  padding-left: 20px;
  background-color: salmon;
  z-index: 10;
  ${(props) => (props.move ? `display: none;` : `display: flex;`)}
  ${(props) => (props.extendNavbar ? `display: flex;` : `display: none;`)}
  @media (min-width: 540px) {
    width: 40vw;
  }
  @media (min-width: 768px) {
    width: 40vw;
  }
  @media (min-width: 820px) {
    width: 40vw;
  }
  @media (min-width: 912px) {
    width: 40vw;
  }
  @media (min-width: 1024px) {
    width: 30vw;
  }
  @media (min-width: 1280px) {
    width: 30vw;
  }
`;
const NavbarLink = styled(Link)`
  color: black;
  font-size: 14px;
  margin: 10px;
  border: none;
  @media (max-width: 360px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;
const LogoTitle = styled.span`
  margin-right: 10px;
  font-size: 12px;
  align-self: center;
  border: none;
`;
// const NavbarExtendedContainer = styled.div`
//   width: 70vw;
//   height: 100vh;
//   padding-top: 50px;
//   padding-left: 5%;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   background-color: dimgray;
// `;

// const LogoImage = styled.img`
//   width: 30px;
//   height: auto;
//   align-self: center;
//   border: none;
// `;
// eslint-disable-next-line

function Navbar(props) {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const [move, setMove] = useState(false);
  const windowDimensions = useRecoilValue(windowDimensionsStateAtom);

  const hamburgerClick = () => {
    setExtendNavbar(!extendNavbar);
  };

  const clickMove = () => {
    setMove(!move);
    setExtendNavbar(false);
  };

  useEffect(() => {
    console.log(
      "windowDimensions",
      windowDimensions.width,
      windowDimensions.height
    );
  }, [windowDimensions]);

  return (
    <>
      <NavbarContainer width={windowDimensions.width}>
        <NavbarInnerContainer extendNavbar={extendNavbar}>
          <LeftNavbarContainer>
            <HamburgerButton onClick={hamburgerClick}>
              {extendNavbar ? <>&#10005;</> : <> &#9776;</>}
            </HamburgerButton>
            <NavList move={move} extendNavbar={extendNavbar}>
              <NavbarLink onClick={clickMove} move={move} to="/education">
                교육과정
              </NavbarLink>
              <NavbarLink onClick={clickMove} move={move} to="/got-a-job">
                취.창업코스
              </NavbarLink>
              <NavbarLink onClick={clickMove} move={move} to="/enterance-exam">
                입시코스
              </NavbarLink>
              <NavbarLink onClick={clickMove} move={move} to="/epilogue">
                수강생리얼후기
              </NavbarLink>
              <NavbarLink onClick={clickMove} move={move} to="/">
                자격증 합격현황
              </NavbarLink>
              <NavbarLink onClick={clickMove} move={move} to="/community">
                커뮤니티
              </NavbarLink>
              <NavbarLink onClick={clickMove} move={move} to="/special-lecture">
                무료특강
              </NavbarLink>
              <NavbarLink onClick={clickMove} move={move} to="/event">
                이벤트
              </NavbarLink>
            </NavList>
          </LeftNavbarContainer>
          <RightNavbarContainer>
            <LogoTitle>BEAUTY ACADEMY</LogoTitle>
            {/* <LogoImage src={Logo} alt="logo" /> */}
          </RightNavbarContainer>
        </NavbarInnerContainer>
      </NavbarContainer>
      <CarouselNaviBar width={windowDimensions.width} />
    </>
  );
}

export default Navbar;

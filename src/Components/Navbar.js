import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import Logo from "../assets/Logo.png";

const NavbarContainer = styled.div`
  width: 540px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: lightGrey;
  border: none;
  @media (min-width: 768px) {
    width: 100vw;
  }
`;
const NavbarInnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border: none;
`;
const LeftNavbarContainer = styled.div`
  flex: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 5%;
  color: black;
  background-color: lightGrey;
  border: none;
`;
const HamburgerButton = styled.button`
  width: 40px;
  height: 40px;
  padding-right: 80px;
  font-size: 25px;
  align-self: center;
  cursor: pointer;
  border: none;
  color: white;
  background-color: transparent;
  @media (min-width: 768px) {
    display: none;
  }
`;
const NavList = styled.div`
  @media (max-width: 768px) {
    width: 70vw;
    height: 100vh;
    position: absolute;
    top: 50px;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: salmon;
    ${(props) => (props.move ? `display: none;` : `display: flex;`)}
    ${(props) => (props.extendNavbar ? `display: flex;` : `display: none;`)}
  }
`;
const NavbarLink = styled(Link)`
  color: black;
  font-size: 14px;
  margin: 10px;
  border: none;
`;
const RightNavbarContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightGrey;
  border: none;
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

  const hamburgerClick = () => {
    setExtendNavbar(!extendNavbar);
  };

  const clickMove = () => {
    setMove(!move);
    setExtendNavbar(false);
  };

  return (
    <>
      <NavbarContainer>
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
    </>
  );
}

export default Navbar;
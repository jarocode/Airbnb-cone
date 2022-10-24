import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { IoSearch } from "react-icons/io5";
import { BiGlobe } from "react-icons/bi";
import { CgMenu } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";

import Logo from "../assets/non-svg/Airbnb-logo.png";
import { color } from "../theme";

const Header = () => {
  return (
    <div>
      <Container borderBottom>
        <Inner>
          <img src={Logo} />
          <MiddleDiv>
            <TextDiv bordered width="30%">
              <Typography
                variant="subtitle2"
                component="h2"
                fontWeight={600}
                fontSize={"15px"}
                color={color.black}
                align={"center"}
              >
                Anywhere
              </Typography>
            </TextDiv>
            <TextDiv bordered width="30%">
              <Typography
                variant="subtitle2"
                component="h2"
                fontWeight={600}
                fontSize={"15px"}
                color={color.black}
                align={"center"}
              >
                Any week
              </Typography>
            </TextDiv>
            <TextDiv width="40%">
              <Typography
                variant="subtitle2"
                component="h2"
                fontWeight={500}
                fontSize={"15px"}
                color={color.grey}
                align={"center"}
                marginLeft={"-1.5rem"}
              >
                Add guests
              </Typography>
            </TextDiv>
            <SearchDiv>
              <IoSearch color={color.white} />
            </SearchDiv>
          </MiddleDiv>
          <RightDiv>
            <Typography
              variant="subtitle2"
              component="h2"
              fontWeight={600}
              fontSize={"15px"}
              color={color.black}
              align={"center"}
            >
              Become a Host
            </Typography>
            <BiGlobe size={"1.2rem"} />
            <AvatarDiv>
              <CgMenu size={"1.2rem"} />
              <FaUserCircle color={color.grey} size={"2rem"} />
            </AvatarDiv>
          </RightDiv>
        </Inner>
      </Container>
      <Container>
        <Inner></Inner>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  height: 5.5rem;
  border-bottom: 1px solid ${color.lightGrey};
`;

const Inner = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

const TextDiv = styled.div`
  width: ${(props) => props.width};
  border-right: ${(props) =>
    props.bordered ? `1px solid ${color.lightGrey}` : "none"};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MiddleDiv = styled.div`
  position: relative;
  height: 3rem;
  width: 24rem;
  border-radius: 1.5rem;
  border: 1px solid ${color.lightGrey};
  padding: 0.7rem;
  box-sizing: border-box;
  display: flex;
`;

const SearchDiv = styled.div`
  background: ${color.primary};
  height: 32px;
  width: 32px;
  border-radius: 50%;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
const AvatarDiv = styled.div`
  height: 3rem;
  width: 4.5rem;
  display: flex;
  align-items: center;
  border-radius: 1.5rem;
  border: 1px solid ${color.lightGrey};
  gap: 0.7rem;
  padding-left: 1rem;
`;

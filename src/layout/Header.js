import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

import Logo from "../assets/non-svg/logo.svg";

const Header = () => {
  return (
    <Container>
      <img src={Logo} />
      <MiddleDiv>
        <Inner>
          <Typography
            variant="subtitle2"
            component="h2"
            fontWeight={700}
            fontFamily={"Raleway"}
            fontSize={"32px"}
            color={color.black}
            marginTop={"1rem"}
            align={"center"}
          >
            Anywhere
          </Typography>
        </Inner>
      </MiddleDiv>
      <RightDiv></RightDiv>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  margin: auto;
`;

const MiddleDiv = styled.div`
  display: inline-flex;
`;

const Button = styled.button``;

const RightDiv = styled.div``;

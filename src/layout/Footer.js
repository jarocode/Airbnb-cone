import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <Container>
      <Inner></Inner>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  margin: auto;
`;
const Inner = styled.div`
  display: flex;
  margin: auto;
`;

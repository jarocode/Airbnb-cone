import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <Container>
      <Inner>
        <Header />
        {children}
        <Footer />
      </Inner>
    </Container>
  );
};

export default MainLayout;

const Container = styled.div`
  display: flex;
  margin: auto;
`;
const Inner = styled.div`
  display: flex;
  margin: auto;
`;

import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default MainLayout;

const Container = styled.div``;

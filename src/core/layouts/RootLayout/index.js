import React from "react";
import { injectGlobal } from "styled-components";
import { Box } from "grid-styled";

import { Header } from "core/components";
import Wrapper from "./Wrapper";

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`;

const RootLayout = ({ children }) => (
  <Wrapper>
    <Header />
    <Box flex={1}>{children}</Box>
  </Wrapper>
);

export default RootLayout;

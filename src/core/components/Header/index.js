import React from "react";
import { Box } from "grid-styled";

import { Container, Heading } from "core/components";

const Header = () => (
  <Box bg="white">
    <Container alignItems="center" flexDirection="row">
      <Heading is="h2" color="alizarin">
        ÐMeetup
      </Heading>
    </Container>
  </Box>
);

export default Header;

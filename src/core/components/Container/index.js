import sys from "system-components";
import { Flex } from "grid-styled";

const Container = sys({
  flex: 1,
  flexDirection: "column",
  is: Flex,
  maxWidth: 1024,
  mx: "auto",
  p: 4
});

export default Container;

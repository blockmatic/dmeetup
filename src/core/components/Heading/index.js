import React from "react";
import sys from "system-components";

const HeadingBase = sys(
  {
    fontWeight: "bold",
    lineHeight: 1.25,
    is: "h1",
    m: 0
  },
  "color",
  "textAlign"
);

const HeadingWithBorder = HeadingBase.extend`
  &:after {
    background-color: ${props => props.theme.colors.alizarin};
    content: "";
    display: block;
    height: 2px;
    margin-top: 8px;
    width: 200px;
  }
`;

const Heading = ({ border, ...props }) => {
  const Component = border ? HeadingWithBorder : HeadingBase;
  return <Component {...props} />;
};

export default Heading;

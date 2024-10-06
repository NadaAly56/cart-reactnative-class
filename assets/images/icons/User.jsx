import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#a)"
    >
      <Path d="M12.16 10.87c-.11-.01-.22-.01-.33 0a4.445 4.445 0 1 1 .33 0ZM7.16 14.561c-2.42 1.62-2.42 4.26 0 5.87a9.767 9.767 0 0 0 10.01 0c2.42-1.62 2.42-4.26 0-5.87a9.812 9.812 0 0 0-10.01 0v0Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;

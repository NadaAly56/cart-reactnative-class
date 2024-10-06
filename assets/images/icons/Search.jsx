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
      <Path d="M20 11a9 9 0 1 1-17.999 0A9 9 0 0 1 20 11v0ZM18.93 20.69c.53 1.6 1.74 1.76 2.67.36.85-1.28.29-2.33-1.25-2.33a1.405 1.405 0 0 0-1.42 1.97v0Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;

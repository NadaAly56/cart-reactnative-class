import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#09090B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 6h10M3 12h18M3 18h14"
    />
  </Svg>
);
export default SvgComponent;

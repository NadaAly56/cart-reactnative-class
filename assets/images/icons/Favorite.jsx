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
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.453}
      d="M12.694 20.628c-.392.117-.809.117-1.2 0-2.81-.959-9.088-4.96-9.088-11.74a5.4 5.4 0 0 1 5.386-5.416 5.343 5.343 0 0 1 4.302 2.17 5.374 5.374 0 0 1 9.687 3.245c0 6.781-6.277 10.782-9.087 11.741Z"
    />
  </Svg>
);
export default SvgComponent;

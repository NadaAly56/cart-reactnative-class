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
      strokeWidth={1.5}
      d="M2 2h1.74a1.85 1.85 0 0 1 1.84 2l-.83 9.96a2.8 2.8 0 0 0 2.79 3.03h10.65A2.877 2.877 0 0 0 21 14.38l.54-7.5a2.774 2.774 0 0 0-2.81-3.01H5.82M17.5 20.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM9.5 20.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM9 8h12"
    />
  </Svg>
);
export default SvgComponent;

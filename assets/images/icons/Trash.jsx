import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      stroke="red"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 6.48c-3.33-.33-6.68-.5-10.02-.5-1.984 0-3.966.1-5.94.3L3 6.48M8.5 5.47l.22-1.31c.16-.95.28-1.66 1.97-1.66h2.62c1.69 0 1.82.75 1.97 1.67l.22 1.3M18.85 9.64l-.65 10.07c-.11 1.57-.2 2.79-2.99 2.79H8.79c-2.79 0-2.88-1.22-2.99-2.79L5.15 9.64M10.33 17h3.33M9.5 13h5"
    />
  </Svg>
);
export default SvgComponent;

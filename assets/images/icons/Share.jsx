import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      fill="#707070"
      stroke="#707070"
      strokeWidth={0.757}
      d="M1.632 19.847a.373.373 0 0 1-.267-.114.35.35 0 0 1-.096-.267c.01-.125 1.07-12.32 14.948-13.366l-.033-4.596c0-.071.021-.14.062-.2a.375.375 0 0 1 .57-.041l7.638 7.82a.345.345 0 0 1 0 .483l-7.686 7.89a.368.368 0 0 1-.4.085.362.362 0 0 1-.167-.13.344.344 0 0 1-.061-.2l.044-4.474c-2.738.177-5.411.885-7.86 2.082a20.382 20.382 0 0 0-6.398 4.884.362.362 0 0 1-.294.144Zm15.282-17.45.03 4.033c0 .09-.035.176-.098.242a.37.37 0 0 1-.243.112C5.436 7.467 2.78 15.339 2.17 18.363c3.781-3.803 8.913-6.075 14.36-6.357a.376.376 0 0 1 .27.097.351.351 0 0 1 .113.258l-.038 3.959 6.812-6.994-6.773-6.93Z"
    />
  </Svg>
);
export default SvgComponent;

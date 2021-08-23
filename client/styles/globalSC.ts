import { createGlobalStyle, css } from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { Transition, animated, config, useSpring } from "react-spring";

export const GlobalStyle = createGlobalStyle`


body {
  background-color: black;
  overflow: ${(props) => (props.NavOn ? "hidden" : "visible")};

}

`;

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const SGlobalStyle = createGlobalStyle`
  ${reset}
  html, body, #root {
    height: 100%;
  }
  #root {
    display: flex;
    flex-direction: column;
  }
`;

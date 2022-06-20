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
  body, select {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  }
  body {
    font-size: 1.5em;
  }
  select {
    font-size: 1.2em;
    border: none;
    outline: none;
  }
`;

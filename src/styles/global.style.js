import { css, createGlobalStyle } from "styled-components";

const reset = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  html {
    font-size: 10px;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    line-height: normal;
  }

  button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    border: none;
  }

  select {
    appearance: none;
  }

  button {
    background-color: transparent;
    cursor: pointer;
  }

  ul, ol, li {
    list-style: none;
  }

  a, a:hover, a:focus, a:visited {
    color: black;
    text-decoration: none;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  #root {
    height: 100%;
  }
`;

export default GlobalStyle;

import styled from "styled-components";

export const SLayout = styled.nav`
  display: flex;
  justify-content: space-evenly;
  border: 2px #f5f5f5 solid;
  > a {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 2;
    color: black;
    padding: 20px 0;
    text-decoration: none;
    &:nth-child(${(props) => props.tab}) {
      background: #f5f5f5;
      border-top: 2px solid red;
      box-sizing: content-box;
    }
    &:hover {
      background: #f5f5f5;
    }
  }
`;

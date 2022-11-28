import styled from "styled-components";

export const SLayout = styled.nav`
  display: flex;

  border: 2px #f5f5f5 solid;
  font-size: 1.5rem;

  > a {
    flex: 1;
    padding: 20px 0;

    color: black;
    text-align: center;
    text-decoration: none;
    line-height: 2;

    &:nth-child(${(props) => props.tab}) {
      background: #f5f5f5;
      border-top: 2px solid red;
    }
    
    &:hover {
      background: #f5f5f5;
    }
  }
`;

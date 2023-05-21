import styled from 'styled-components';

export const SLayout = styled.div`
  opacity: ${props => (props.isShow ? 1 : 0)};
  position: fixed;
  right: 25px;
  bottom: 40px;
  transition: opacity 0.2s ease-in;
`;

export const SButton = styled.button`
  width: 50px;
  height: 50px;
  cursor: pointer;

  :hover {
    background-color: ${props => props.theme.colors.gray[2]};
  }
`;

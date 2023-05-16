import styled from 'styled-components';

export const SLayout = styled.div`
  background-color: ${props => props.theme.gray[0]};
  position: absolute;
  width: 200px;
  top: 40px;
  right: 0;
  z-index: 1;
`;

export const SItem = styled.div`
  padding: 10px 5px;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.gray[3]};
  }
`;

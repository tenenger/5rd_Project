import styled from 'styled-components';

export const SLayout = styled.button`
  width: 100%;
  padding: 12.5px 5px;
  font-size: 1.6rem;
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  ${props => props.isBorder && 'border: 1px solid #ced4da'}
`;

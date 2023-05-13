import styled from 'styled-components';

export const SLayout = styled.button`
  width: 100%;
  padding: 12.5px 5px;
  font-size: 2rem;
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  ${props => props.isBorder && 'border: 1px solid #ced4da'}
  ${props =>
    props.disabled &&
    `
    border-color: transparent;
    background-color: rgb(233, 236, 239);
    color: rgb(173, 181, 189);
    cursor: not-allowed;
    background-image: none;
    pointer-events: none;
  `}
`;

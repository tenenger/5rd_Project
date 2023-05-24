import styled from 'styled-components';

export const SLayout = styled.div`
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : '0.5px')};
  background-color: ${props => props.theme.colors.gray[4]};
  margin: 10px 0;
`;

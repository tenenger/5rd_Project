import styled from 'styled-components';

export const SLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const SContainer = styled.div`
  position: relative;
  width: 500px;
  padding: 60px 20px 20px;
  background-color: ${props => props.theme.colors.white[0]};
  border-radius: 10px;
  font-size: 1.6rem;
`;

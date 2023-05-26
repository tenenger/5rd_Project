import styled from 'styled-components';

export const SLayout = styled.ul`
  width: 100%;
  max-height: 400px;
  display: ${props => (props.isShow ? 'block' : 'none')};
  position: absolute;

  font-size: 2rem;
  background-color: ${props => props.theme.colors.white[0]};

  overflow-y: scroll;
  cursor: pointer;
  z-index: 1;

  ::-webkit-scrollbar {
    display: none;
  }

  li {
    button {
      text-align: left;
      width: 100%;
      padding: 10px 20px;
      height: 100%;
    }

    :hover {
      background-color: ${props => props.theme.colors.gray[2]};
    }
  }
`;

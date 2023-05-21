import styled from 'styled-components';

export const SLayout = styled.div`
  position: relative;
`;

export const SDropDownSelect = styled.div`
  width: ${props => props.width}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  font-size: 1.6rem;
  font-weight: bold;
  border: 0.5px solid ${props => props.theme.colors.gray[2]};
  border-radius: 5px;

  cursor: pointer;
`;

export const SDropDownList = styled.ul`
  width: ${props => props.width}px;
  max-height: 400px;
  display: ${props => (props.isShow ? 'block' : 'none')};
  position: absolute;

  font-size: 1.6rem;
  background-color: ${props => props.theme.colors.white[0]};

  overflow-y: scroll;
  cursor: pointer;

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

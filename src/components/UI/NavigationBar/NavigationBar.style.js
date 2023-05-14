import styled from 'styled-components';

export const SLayout = styled.header`
  margin-bottom: 40px;
  border-bottom: 1px solid ${props => props.theme.gray[4]};
`;

export const SContainer = styled.div`
  max-width: 1200px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const SUtils = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  gap: 10px;
`;

export const SSearchBar = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;

  svg {
    position: absolute;
    left: 10px;
    top: calc(50% - ${props => parseInt(props.size) / 2}rem);
  }
`;

export const SearchInput = styled.input.attrs({
  type: 'text',
})`
  width: 100%;
  border: 1px solid ${props => props.theme.gray[4]};
  font-size: 2rem;
  outline: none;
  border-radius: 10px;
  padding: 10px 0;
  padding-left: calc(20px + ${props => props.size});
`;

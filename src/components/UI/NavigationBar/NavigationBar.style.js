import styled from 'styled-components';

export const SLayout = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  max-width: 1200px;
  height: 80px;
`;

export const SLogo = styled.h1`
  font-size: 3rem;
  display: flex;
  align-items: center;
  gap: 10px;
  height: 40px;
`;

export const SImage = styled.img`
  height: 100%;
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
  border: 1px solid #ced4da;
  font-size: 2rem;
  outline: none;
  border-radius: 10px;
  padding: 10px 0;
  padding-left: calc(20px + ${props => props.size});
`;

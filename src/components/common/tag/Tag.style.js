import styled from 'styled-components';

export const SLayout = styled.ul`
  width: 400px;
  min-height: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    padding: 5px 10px;

    font-size: 1.4rem;
    color: ${props => props.theme.white[0]};
    border-radius: 5px;
    background: ${props => props.theme.violet[6]};
  }
`;

export const SCloseBtn = styled.button`
  width: 14px;
  height: 14px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.2rem;
  color: ${props => props.theme.violet[6]};
  border-radius: 50%;
  background: ${props => props.theme.white[0]};

  line-height: 16px;
  cursor: pointer;
`;

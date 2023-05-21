import styled from 'styled-components';

export const SSelect = styled.select`
  width: 100%;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  padding: 10px 20px;
`;

export const SCardLayout = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  align-items: center;
  margin: 0 auto;

  font-size: 2rem;
  font-weight: bold;
  text-align: center;

  @media ${props => props.theme.devices.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${props => props.theme.devices.md} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${props => props.theme.devices.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${props => props.theme.devices.xs} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

import styled from 'styled-components';

export const STitle = styled.strong`
  font-size: 2rem;
`;

export const SValue = styled.span`
  font-size: 3rem;
  color: ${props => props.theme.colors.blue[5]};
`;

export const SStatus = styled.span`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.blue[5]};
`;

export const SLocationArea = styled.div`
  display: flex;

  > strong {
    display: flex;
    gap: 5px;
    flex-grow: 1;
  }
  > span {
    font-size: 1.2rem;
  }
`;

export const SDustArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border: 1px solid ${props => props.theme.colors.gray[4]};
  margin-top: 10px;
  border-radius: 5px;
`;

export const SDustValueArea = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  ${STitle} {
    font-size: 1.8rem;
  }
`;

export const SNoticeArea = styled.div`
  text-align: start;

  > div {
    display: flex;
    gap: 20px;
  }
`;

export const SStation = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${props => props.theme.colors.blue[9]};
`;

export const SLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  ::before {
    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
    background-size: 14px;
    background-position: center;
    background-image: ${props => `url(public/${props.url})`};
    background-repeat: no-repeat;
  }
`;

export const SDescription = styled.p`
  padding: 10px 0 0;
`;

export const SPollutionArea = styled.div`
  margin-top: 30px;
`;

export const SChartArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;

  text-align: center;
`;

export const SChartDetail = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  line-height: 1.5;

  ${STitle} {
    font-size: 1.5rem;
  }

  ${SValue} {
    font-size: 1.2rem;
    color: ${({ theme, color, colorIdx }) => theme.colors[color][colorIdx]};
  }

  ${SStatus} {
    font-size: 1.3rem;
    color: ${({ theme, color, colorIdx }) => theme.colors[color][colorIdx]};
  }
`;

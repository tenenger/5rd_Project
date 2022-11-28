import styled from "styled-components";

export const SLayout = styled.div`
  flex-grow: 1;
  background: ${(props) => props.meseColor};
  color: white;
  line-height: 2;
  
  > [data-weather="message"] {
    color: ${(props) => props.meseColor};
    background: white;
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 2em;
  }
  > div {
    > [data-weather="dataTime"] {
      font-weight: 400;
      font-size: 0.7rem;
    }
  }
`;

export const SHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const SSido = styled.span`
  font-size: 1.5rem;
`

export const SIconButton = styled.label`
  cursor: pointer;
`

export const SMessage = styled.div`
  font-size: 1.7rem;
`

export const SMese = styled.div`
  font-size: 1.4rem;
`

export const SDataTime = styled.span`
  font-size: 1.7rem;
`
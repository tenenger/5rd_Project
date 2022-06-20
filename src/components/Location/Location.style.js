import styled from "styled-components";

export const SLocation = styled.div`
  font-weight: bold;
  width: 500px;
  margin: auto;
  text-align: center;
`;

export const SSelect = styled.div`
  display: flex;
  justify-content: space-around;
  > select {
    text-align: center;
    flex: 1;
  }
`;

export const SWeather = styled.div`
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
    > [data-weather="station"] {
      font-size: 1.4em;
      &::after {
        content: "";
        padding: 5px;
      }
    }
    > [data-weather="sido"] {
    }
    > [data-weather="dataTime"] {
      font-weight: 400;
      font-size: 0.7em;
    }
  }
`;

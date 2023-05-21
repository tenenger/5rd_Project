import styled from 'styled-components';

export const SLayout = styled.button(
  ({ theme, disabled, isBorder, fontColor, fontColorIdx, backgroundColor, backgroundColorIdx }) => `
  width: 100%;
  padding: 12.5px 5px;
  font-size: 2rem;
  color: ${theme.colors[fontColor][fontColorIdx]};
  background-color: ${theme.colors[backgroundColor][backgroundColorIdx]};
  ${isBorder && `border: 1px solid ${theme.colors.gray[4]}`};

  ${
    disabled &&
    `
    border-color: transparent;
    background-color: ${theme.colors.gray[2]};
    color: ${theme.colors.gray[5]};
    cursor: not-allowed;
    background-image: none;
    pointer-events: none;
  `
  }
`
);

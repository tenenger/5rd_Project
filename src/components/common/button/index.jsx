import { SLayout } from './Button.style';

const Button = ({ type = 'button', color, bgColor, disabled, isBorder, children, handleClick }) => {
  const [fontColor, fontColorIdx = 0] = color?.split('.') ?? ['black', 0];
  const [backgroundColor, backgroundColorIdx = 0] = bgColor?.split('.') ?? ['white', 0];

  return (
    <SLayout
      {...{ type, disabled, fontColor, fontColorIdx, backgroundColor, backgroundColorIdx, isBorder }}
      onClick={e => {
        handleClick && handleClick(e);
      }}>
      {children}
    </SLayout>
  );
};

export default Button;

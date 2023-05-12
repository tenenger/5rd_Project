import { SImage, SLogo } from './Logo.style';

const Logo = () => {
  return (
    <SLogo>
      <SImage src="/images/logo/main.png" alt="logo" />
      <span>Meses</span>
    </SLogo>
  );
};

export default Logo;

import { Link } from 'react-router-dom';
import { SLogo, SLayout, SImage, SUtils, SSearchBar, SearchInput } from './NavigationBar.style';
import { PATH } from '../../../constants/path';
import { SearchIcon, UserIcon } from '../../common/icons';
import { Menu } from '../../common';

const Logo = () => {
  return (
    <Link to={PATH.MY_LOCATION}>
      <SLogo>
        <SImage src="/images/logo/main.png" alt="logo" />
        <span>Meses</span>
      </SLogo>
    </Link>
  );
};

const SearchBar = ({ icon }) => {
  return (
    <SSearchBar size={icon.props.size}>
      {icon}
      <SearchInput size={icon.props.size} placeholder="검색" />
    </SSearchBar>
  );
};

const Utils = () => {
  return (
    <SUtils>
      <Menu icon={<UserIcon size="3rem" />}>
        <Link to={PATH.LOGIN}>
          <Menu.Item>로그인</Menu.Item>
        </Link>
        <Link to={PATH.JOIN}>
          <Menu.Item>회원가입</Menu.Item>
        </Link>
      </Menu>
    </SUtils>
  );
};

const NavigationBar = () => {
  return (
    <SLayout>
      <Logo />
      <SearchBar icon={<SearchIcon size="3rem" />} />
      <Utils />
    </SLayout>
  );
};

export default NavigationBar;

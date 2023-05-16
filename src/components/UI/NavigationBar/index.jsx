import { Link } from 'react-router-dom';

import { Menu, Logo } from 'components/common';
import { SearchIcon, UserIcon } from 'components/common/icons';
import { PATH } from 'constants';

import { SLayout, SContainer, SUtils, SSearchBar, SearchInput } from './NavigationBar.style';

const SearchBar = ({ icon }) => (
  <SSearchBar size={icon.props.size}>
    {icon}
    <SearchInput placeholder="검색" size={icon.props.size} />
  </SSearchBar>
);

const Utils = () => (
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

const NavigationBar = () => (
  <SLayout>
    <SContainer>
      <Link to={PATH.MY_LOCATION}>
        <Logo />
      </Link>
      <SearchBar icon={<SearchIcon size="3rem" />} />
      <Utils />
    </SContainer>
  </SLayout>
);

export default NavigationBar;

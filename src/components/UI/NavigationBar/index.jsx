import { Link } from 'react-router-dom';
import { SLayout, SUtils, SSearchBar, SearchInput } from './NavigationBar.style';
import { PATH } from '../../../constants';
import { SearchIcon, UserIcon } from '../../common/icons';
import { Menu, Logo } from '../../common';

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
      <Link to={PATH.MY_LOCATION}>
        <Logo />
      </Link>
      <SearchBar icon={<SearchIcon size="3rem" />} />
      <Utils />
    </SLayout>
  );
};

export default NavigationBar;

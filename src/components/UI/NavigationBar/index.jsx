import { lazy, useMemo, useState } from 'react';

import { Link } from 'react-router-dom';
import { debounce } from 'lodash';

import { Menu, Logo } from 'components/common';
import { SearchIcon, UserIcon } from 'components/common/icons';
import { useOnClickOutSide } from 'hooks';
import { PATH } from 'constants';

import { SLayout, SContainer, SUtils, SSearchBar, SearchInput } from './NavigationBar.style';

const LazySearchAutoComplete = lazy(() => import('../lazySearchAutoComplete'));

const SearchBar = ({ icon }) => {
  const [isSearch, setIsSearch] = useState(false);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  const debounced = useMemo(() => debounce(value => setFilter(value), 300), []);

  const handleSearchChange = e => {
    const value = e.target.value.trim();

    setSearch(value);
    debounced(value);
  };

  const handleSearchFocus = () => setIsSearch(true);
  const handleSearchBlur = () => setIsSearch(false);
  const handleAutoCompleteItemClick = value => {
    setSearch(value);
    handleSearchBlur();
  };
  const ref = useOnClickOutSide(handleSearchBlur);

  return (
    <SSearchBar ref={ref} size={icon.props.size}>
      {icon}
      <SearchInput
        placeholder="검색"
        size={icon.props.size}
        value={search}
        onChange={handleSearchChange}
        onFocus={handleSearchFocus}
      />
      <LazySearchAutoComplete filter={filter} isShow={isSearch} onItemClick={handleAutoCompleteItemClick} />
    </SSearchBar>
  );
};

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

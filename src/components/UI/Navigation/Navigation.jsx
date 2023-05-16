import { useLocation } from 'react-router-dom';

import { MyLocationIcon, AllLocationIcon, FilledStarIcon } from 'components/common/icons';
import { PATH } from 'constants';

import { SLayout, SLink } from './Navigation.style';

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <SLayout>
      <SLink $active={PATH.MY_LOCATION === pathname} to={PATH.MY_LOCATION}>
        <MyLocationIcon />
        <h3>내 지역보기</h3>
      </SLink>
      <SLink $active={PATH.ALL_LOCATION === pathname} to={PATH.ALL_LOCATION}>
        <AllLocationIcon />
        <h3>전체 지역보기</h3>
      </SLink>
      <SLink $active={PATH.FAVORITES === pathname} to={PATH.FAVORITES}>
        <FilledStarIcon />
        <h3>즐겨찾기</h3>
      </SLink>
    </SLayout>
  );
};

export default Navigation;

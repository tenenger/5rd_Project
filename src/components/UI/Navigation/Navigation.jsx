import { useLocation } from 'react-router-dom';

import { SLayout, SLink } from './Navigation.style';
import { MyLocationIcon, AllLocationIcon, FilledStarIcon } from '../../common/icons';
import { PATH } from '../../../constants';

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <SLayout>
      <SLink to={PATH.MY_LOCATION} $active={PATH.MY_LOCATION === pathname}>
        <MyLocationIcon />
        <h3>내 지역보기</h3>
      </SLink>
      <SLink to={PATH.ALL_LOCATION} $active={PATH.ALL_LOCATION === pathname}>
        <AllLocationIcon />
        <h3>전체 지역보기</h3>
      </SLink>
      <SLink to={PATH.FAVORITES} $active={PATH.FAVORITES === pathname}>
        <FilledStarIcon />
        <h3>즐겨찾기</h3>
      </SLink>
    </SLayout>
  );
};

export default Navigation;

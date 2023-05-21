import { useLocation } from 'react-router-dom';

import { MainIcon, FilledStarIcon } from 'components/common/icons';
import { PATH } from 'constants';

import { SLayout, SLink } from './Navigation.style';

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <SLayout>
      <SLink $active={PATH.MAIN === pathname} to={PATH.MAIN}>
        <MainIcon />
        <h3>내 지역보기</h3>
      </SLink>
      <SLink $active={PATH.FAVORITES === pathname} to={PATH.FAVORITES}>
        <FilledStarIcon />
        <h3>즐겨찾기</h3>
      </SLink>
    </SLayout>
  );
};

export default Navigation;

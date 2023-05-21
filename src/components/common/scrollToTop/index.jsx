import { ScrollToTopIcon } from 'components/common/icons';
import { useScroll } from 'hooks';

import { SButton, SLayout } from './ScrollToTop.style';

const ScrollToTop = () => {
  const isShow = useScroll(300);
  const onClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <SLayout isShow={isShow}>
      <SButton as={ScrollToTopIcon} onClick={onClick}>
        ScrollToTop
      </SButton>
    </SLayout>
  );
};

export default ScrollToTop;

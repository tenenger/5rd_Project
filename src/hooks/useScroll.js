import { useEffect, useState } from 'react';

import { throttle } from 'lodash';

const checkPositionY = positionY => window.pageYOffset > positionY ?? window.scrollY > positionY;

const useScroll = positionY => {
  const [isShow, setIsShow] = useState(checkPositionY(positionY));

  useEffect(() => {
    const detectScroll = throttle(() => setIsShow(checkPositionY(positionY)), 200);

    window.addEventListener('scroll', detectScroll);

    return () => {
      window.removeEventListener('scroll', detectScroll);
    };
  }, [positionY]);

  return isShow;
};

export default useScroll;

import { useEffect, useRef } from 'react';

const useOnClickOutSide = handler => {
  const ref = useRef(null);

  useEffect(() => {
    const listener = e => {
      if (!ref.current || ref.current.contains(e.target)) return;

      handler(e);
    };

    document.addEventListener('click', listener);

    return () => {
      document.removeEventListener('click', listener);
    };
  }, [handler, ref]);

  return ref;
};

export default useOnClickOutSide;

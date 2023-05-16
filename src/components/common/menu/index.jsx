import { useState } from 'react';

import useOnClickOutSide from 'hooks/useOnClickOutSide';

import { SItem, SLayout } from './Menu.style';

const Item = ({ children }) => <SItem>{children}</SItem>;

const Menu = ({ icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useOnClickOutSide(() => {
    setIsOpen(false);
  });

  return (
    <div>
      <button ref={ref} onClick={() => setIsOpen(!isOpen)}>
        {icon}
      </button>
      {isOpen && <SLayout>{children}</SLayout>}
    </div>
  );
};

Menu.Item = Item;

export default Menu;

import { useState } from 'react';
import { SItem, SLayout } from './Menu.style';
import useOnClickOutSide from '../../../hooks/useOnClickOutSide';

const Item = ({ children }) => {
  return <SItem>{children}</SItem>;
};

const Menu = ({ icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useOnClickOutSide(() => {
    setIsOpen(false);
  });

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} ref={ref}>
        {icon}
      </button>
      {isOpen && <SLayout>{children}</SLayout>}
    </div>
  );
};

Menu.Item = Item;

export default Menu;

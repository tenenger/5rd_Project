import { useState } from 'react';

import { ArrowDown, ArrowUp } from 'components/common/icons';
import useOnClickOutSide from 'hooks/useOnClickOutSide';

import { SLayout, SDropDownSelect, SDropDownList } from './DropDown.style';

const DropDown = ({ data, title, handleItemClick, children }) => {
  const [isShow, setIsShow] = useState(false);
  const ref = useOnClickOutSide(() => setIsShow(false));

  const handleDropDownClick = e => {
    e.stopPropagation();

    setIsShow(!isShow);
  };

  return (
    <SLayout>
      <SDropDownSelect ref={ref} onClick={handleDropDownClick}>
        {children || (
          <>
            <em>{title}</em>
            {isShow ? <ArrowDown /> : <ArrowUp />}
          </>
        )}
      </SDropDownSelect>
      <SDropDownList isShow={isShow}>
        {data.map(item => (
          <li key={item.id}>
            <button onClick={() => handleItemClick(item)}>{item.title}</button>
          </li>
        ))}
      </SDropDownList>
    </SLayout>
  );
};

export default DropDown;

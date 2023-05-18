import { useState } from 'react';

import { ArrowDown, ArrowUp } from 'components/common/icons';
import useOnClickOutSide from 'hooks/useOnClickOutSide';

import { SLayout, SDropDownSelect, SDropDownList } from './DropDown.style';

const DropDown = ({ data, title, handleItemClick, children, width = 200 }) => {
  const [isShow, setIsShow] = useState(false);
  const ref = useOnClickOutSide(() => setIsShow(false));

  const handleDropDownClick = e => {
    e.stopPropagation();

    setIsShow(!isShow);
  };

  return (
    <SLayout>
      <SDropDownSelect ref={ref} width={width} onClick={handleDropDownClick}>
        {children || (
          <>
            <em>{title}</em>
            {isShow ? <ArrowDown /> : <ArrowUp />}
          </>
        )}
      </SDropDownSelect>
      <SDropDownList isShow={isShow} width={width}>
        {data.map(item => (
          <li key={item.title}>
            <button onClick={() => handleItemClick(item)}>{item.title}</button>
          </li>
        ))}
      </SDropDownList>
    </SLayout>
  );
};

export default DropDown;

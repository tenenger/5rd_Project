import { useState } from 'react';

import { ArrowDown, ArrowUp } from 'components/common/icons';
import useOnClickOutSide from 'hooks/useOnClickOutSide';

import { SLayout, SDropDownSelect, SDropDownList } from './DropDown.style';

const DropDown = ({ data, content, handleItemClick }) => {
  const [isShow, setIsShow] = useState(false);
  const ref = useOnClickOutSide(() => setIsShow(false));

  const handleDropDownClick = e => {
    e.stopPropagation();

    setIsShow(!isShow);
  };

  return (
    <SLayout>
      <SDropDownSelect ref={ref} onClick={handleDropDownClick}>
        <em>{content}</em>
        {isShow ? <ArrowDown /> : <ArrowUp />}
      </SDropDownSelect>
      <SDropDownList isShow={isShow}>
        {data.map(({ subject, order, content }) => (
          <li key={`${subject}_${order}`}>
            <button onClick={() => handleItemClick({ subject, order, content })}>{content}</button>
          </li>
        ))}
      </SDropDownList>
    </SLayout>
  );
};

export default DropDown;

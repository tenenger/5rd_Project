import { useState } from 'react';

import { DropDown, Tag } from 'components/common';
import { SIDO_NAMES } from 'constants';

import { SContainer } from './Banner.style';

const SORT_DATA = [
  { id: 1, subject: 'dictionary', order: 'asc', title: '사전 오름차순' },
  { id: 2, subject: 'dictionary', order: 'desc', title: '사전 내림차순' },
  { id: 3, subject: 'dust', order: 'asc', title: '미세먼지 낮은 순' },
  { id: 4, subject: 'dust', order: 'desc', title: '미세먼지 높은 순' },
];
const Banner = ({ tags, handleFilterItemClick, handleRemoveTagClick, handleSortItemClick }) => {
  const [title, setTitle] = useState('정렬');

  const handleSortClick = item => {
    setTitle(item.title);
    handleSortItemClick(item);
  };

  return (
    <SContainer>
      <DropDown data={SIDO_NAMES} handleItemClick={handleFilterItemClick} width={400}>
        <Tag data={tags} handleCloseBtnClick={handleRemoveTagClick} />
      </DropDown>
      <DropDown data={SORT_DATA} handleItemClick={handleSortClick} title={title} />
    </SContainer>
  );
};

export default Banner;

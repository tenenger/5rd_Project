import { useState } from 'react';

import styled from 'styled-components';

import { Tag, Carousel, DropDown, LoadingModal } from 'components/common';
import { WeatherCard } from 'components/UI';
import useAddress from 'hooks/useAddress';
import useFilterSidoDust from 'hooks/useFilterSidoDust';
import { sortSidoDust } from 'utils/dust';
import { SIDO_NAMES } from 'constants';

const SLayout = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const SContainer = styled.div`
  height: 100%;
  padding: 20px 0;
`;

const SORT_DATA = [
  { id: 1, subject: 'dictionary', order: 'asc', title: '사전 오름차순' },
  { id: 2, subject: 'dictionary', order: 'desc', title: '사전 내림차순' },
  { id: 3, subject: 'dust', order: 'asc', title: '미세먼지 낮은 순' },
  { id: 4, subject: 'dust', order: 'desc', title: '미세먼지 높은 순' },
];

const FILTER_DATA = [
  { id: 1, title: '서울' },
  { id: 2, title: '부산' },
  { id: 3, title: '대구' },
  { id: 4, title: '광주' },
];

const FilterSido = ({ tags, handleItemClick, handleRemoveTagClick }) => (
  <DropDown data={FILTER_DATA} handleItemClick={handleItemClick}>
    <Tag data={tags} handleCloseBtnClick={handleRemoveTagClick} />
  </DropDown>
);
const SortSelection = ({ handleItemClick }) => {
  const [title, setTitle] = useState('정렬');

  const handleSortClick = item => {
    setTitle(item.title);
    handleItemClick(item);
  };

  return <DropDown data={SORT_DATA} handleItemClick={handleSortClick} title={title} />;
};

const MyLocation = () => {
  const { address } = useAddress();
  const [tags, setTags] = useState([
    { title: SIDO_NAMES.find(SIDO_NAME => address?.[0].region_1depth_name.includes(SIDO_NAME)) ?? '서울', id: 1 },
  ]);
  const [sorted, setSorted] = useState({ subject: '', order: '' });
  const { data, isLoading } = useFilterSidoDust(tags, { select: sidoDust => sortSidoDust(sorted, sidoDust) });

  const handleRemoveTagClick = id => setTags(tags.filter(tag => tag.id !== id));

  const handleFilterItemClick = ({ id, title }) => {
    if (tags.some(tag => tag.id === id)) return;

    setTags([...tags, { id, title }]);
  };

  const handleSortItemClick = ({ subject, order }) =>
    setSorted(prev => ({
      ...prev,
      subject,
      order,
    }));

  return (
    <>
      {isLoading ? (
        <LoadingModal />
      ) : (
        <SLayout>
          <Carousel autoplay />
          <SContainer>
            <FilterSido
              handleItemClick={handleFilterItemClick}
              handleRemoveTagClick={handleRemoveTagClick}
              tags={tags}
            />
            <SortSelection handleItemClick={handleSortItemClick} />
          </SContainer>
          <WeatherCard data={data} isShow={false} />
        </SLayout>
      )}
    </>
  );
};

export default MyLocation;

import { useState } from 'react';

import { Carousel, LoadingModal } from 'components/common';
import { DustModal, WeatherCard } from 'components/UI';
import Banner from 'components/UI/main/Banner';
import { useAddress, useFilterSidoDust, useDustModal } from 'hooks';
import { sortSidoDust } from 'utils/dust';
import { SIDO_NAMES } from 'constants';

const Main = () => {
  const { address } = useAddress();
  const [tags, setTags] = useState([
    SIDO_NAMES.find(({ title }) => address?.[0].region_1depth_name.includes(title))?.title ?? '서울',
  ]);
  const [sorted, setSorted] = useState({ subject: '', order: '' });
  const [selected, setSelected] = useState({});
  const { data, isLoading } = useFilterSidoDust(tags);
  const { handleSetSidoDust, handleToggleClick } = useDustModal();

  const handleRemoveTagClick = sido => setTags(tags.filter(tag => tag !== sido));

  const handleFilterItemClick = sido => {
    if (tags.some(tag => tag === sido.title)) return;

    setTags([...tags, sido.title]);
  };

  const handleSortItemClick = ({ subject, order }) =>
    setSorted(prev => ({
      ...prev,
      subject,
      order,
    }));

  const handleSelectCardClick = selected => {
    setSelected(selected);
    handleSetSidoDust(selected);
    handleToggleClick();
  };

  return (
    <>
      {isLoading ? (
        <LoadingModal />
      ) : (
        <>
          <DustModal selected={selected} />
          <Carousel autoplay />
          <Banner
            handleFilterItemClick={handleFilterItemClick}
            handleRemoveTagClick={handleRemoveTagClick}
            handleSortItemClick={handleSortItemClick}
            tags={tags}
          />
          <WeatherCard data={sortSidoDust(sorted, data)} handleSelectCardClick={handleSelectCardClick} isShow={false} />
        </>
      )}
    </>
  );
};

export default Main;

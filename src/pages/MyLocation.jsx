import { useState } from 'react';

import styled from 'styled-components';

import { Carousel, DropDown, LoadingModal } from 'components/common';
import { WeatherCard } from 'components/UI';
import useAddress from 'hooks/useAddress';
import useSidoDust from 'hooks/useSidoDust';
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
  { subject: 'dust', order: 'desc', content: '미세먼지 높은 순' },
  { subject: 'dust', order: 'asc', content: '미세먼지 낮은 순' },
];

const SortSelection = ({ handleItemClick }) => {
  const [content, setContent] = useState('정렬');

  const handleSortClick = ({ subject, order, content }) => {
    setContent(content);
    handleItemClick({ subject, order, content });
  };

  return <DropDown content={content} data={SORT_DATA} handleItemClick={handleSortClick} />;
};

const MyLocation = () => {
  const { address } = useAddress();
  const SIDO_NAME = SIDO_NAMES.find(SIDO_NAME => address?.[0].region_1depth_name.includes(SIDO_NAME)) ?? '서울';
  const [sorted, setSorted] = useState({ subject: '', order: '' });
  const { sidoDust, isLoading } = useSidoDust({
    sido: SIDO_NAME,
    select:
      sorted.subject === ''
        ? sidoDust => sidoDust
        : sidoDust =>
            sidoDust.sort(({ pm10Value: aPm10Value }, { pm10Value: bPm10Value }) => {
              if (sorted.subject === 'dust') {
                return sorted.order === 'asc' ? aPm10Value - bPm10Value : bPm10Value - aPm10Value;
              }

              // 임시
              return aPm10Value - bPm10Value;
            }),
  });

  const handleItemClick = ({ subject, order }) => {
    setSorted(prev => ({
      ...prev,
      subject,
      order,
    }));
  };

  return (
    <>
      {isLoading ? (
        <LoadingModal />
      ) : (
        <SLayout>
          <Carousel autoplay />
          <SContainer>
            {/* <span>필터 기능 추가 예정</span> */}
            <SortSelection handleItemClick={handleItemClick} />
          </SContainer>
          <WeatherCard data={sidoDust} isShow={false} />
        </SLayout>
      )}
    </>
  );
};

export default MyLocation;

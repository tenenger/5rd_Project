import { Card } from 'components/common';
import { SIDO_NAMES } from 'constants';

import { SCardLayout, SSelect } from './WeatherCard.style';

const WeatherCard = ({ data, isShow, dosi, handleSelectChange, handleSelectCardClick }) => (
  <>
    {isShow && (
      <SSelect defaultValue={dosi} onChange={handleSelectChange}>
        {SIDO_NAMES.map(({ title }) => (
          <option key={title}>{title}</option>
        ))}
      </SSelect>
    )}
    <SCardLayout>
      {data.map(item => (
        <Card key={item.stationName} handleSelectCardClick={handleSelectCardClick} item={item} />
      ))}
    </SCardLayout>
  </>
);
export default WeatherCard;

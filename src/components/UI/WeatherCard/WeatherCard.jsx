import { Card } from '../../common';
import { SCardLayout, SSelect } from './WeatherCard.style';
import { SIDO_NAMES } from '../../../constants';

const WeatherCard = ({ data, isShow, dosi, handleSelectChange }) => {
  return (
    <>
      {isShow && (
        <SSelect onChange={handleSelectChange} defaultValue={dosi}>
          {SIDO_NAMES.map(item => (
            <option key={item}>{item}</option>
          ))}
        </SSelect>
      )}
      <SCardLayout>
        {data.map(item => (
          <Card key={item.stationName} item={item} />
        ))}
      </SCardLayout>
    </>
  );
};
export default WeatherCard;

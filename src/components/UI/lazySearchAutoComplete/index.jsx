import { AutoComplete } from 'components/common';
import { useAllSidoDust } from 'hooks';

const LazySearchAutoComplete = ({ filter, isShow, onItemClick }) => {
  const { sidoDusts, isLoading } = useAllSidoDust(filter);
  // console.log(filter);
  return (
    <AutoComplete isShow={isShow}>
      {!isLoading &&
        sidoDusts.map(({ stationName }) => (
          <li key={stationName}>
            <button onClick={() => onItemClick(stationName)}>{stationName}</button>
          </li>
        ))}
    </AutoComplete>
  );
};

export default LazySearchAutoComplete;

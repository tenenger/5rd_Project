import { useQuery } from '@tanstack/react-query';

import { getGeolocation, getKakaoAddresses } from 'api/fetch';
import { addressQueryKey, geolocationQueryKey } from 'constants';

const useAddress = () => {
  const { data: geolocation } = useQuery({
    queryKey: geolocationQueryKey,
    queryFn: getGeolocation,
  });
  const { data: address } = useQuery({
    queryKey: addressQueryKey,
    queryFn: async () => {
      const data = await getKakaoAddresses(geolocation);
      return data;
    },
    enabled: !!geolocation,
  });

  return { address };
};

export default useAddress;

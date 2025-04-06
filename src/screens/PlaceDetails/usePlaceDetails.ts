import { useRoute } from '@react-navigation/native';
import { usePlaceDetailsQuery } from '../../redux/api/placesApi';

export const usePlaceDetails = () => {
  const route = useRoute();
  const { data: place } = usePlaceDetailsQuery(
    { placeId: route?.params?.placeId ?? '' },
    { skip: !route?.params?.placeId },
  );

  return { place: place?.result };
};

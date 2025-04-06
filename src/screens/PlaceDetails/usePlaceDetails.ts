import { useNavigation, useRoute } from '@react-navigation/native';
import { usePlaceDetailsQuery } from '../../redux/api/placesApi';
import { useLayoutEffect } from 'react';

export const usePlaceDetails = () => {
  const route = useRoute<PlaceDetailsScreenRouteProp>();
  const navigation = useNavigation<RootStackNavigationProp>();

  const { data: place } = usePlaceDetailsQuery(
    { placeId: route?.params?.placeId ?? '' },
    { skip: !route?.params?.placeId },
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route?.params?.placeName ?? 'Place Details',
    });
  }, [route?.params?.placeName]);

  return { place };
};

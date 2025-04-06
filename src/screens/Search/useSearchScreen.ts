import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { debounce } from 'lodash';
import { useCallback, useState } from 'react';
import { GOOGLE_MAPS_WEB_API_KEY } from '../../config';

export const useSearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [predictions, setPredictions] = useState<Place[]>([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const navigation = useNavigation();

  const fetchPredictions = async (text: string) => {
    if (!text) {
      setPredictions([]);
      return;
    }

    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json`,
        {
          params: {
            input: text,
            key: GOOGLE_MAPS_WEB_API_KEY,
          },
        },
      );

      if (response.data.status === 'OK') {
        setPredictions(response.data.predictions);
      } else {
        setPredictions([]);
        console.warn('Places API error:', response.data.status);
      }
    } catch (err) {
      console.error('Autocomplete fetch error', err);
    }
  };

  const debouncedFetch = useCallback(debounce(fetchPredictions, 300), []);
  const handleInputChange = useCallback(
    (text: string) => {
      setSearchText(text);
      if (!text) {
        setPredictions([]);
        return;
      }
      debouncedFetch(text);
    },
    [debouncedFetch],
  );

  const handleSelect = useCallback((place: Place) => {
    setSearchText(place.description);
    setPredictions([]);
    navigation.navigate('PlaceDetails', {
      placeId: place.place_id,
    });
  }, []);

  return {
    searchText,
    isInputFocused,
    predictions,
    setSearchText,
    fetchPredictions,
    handleInputChange,
    handleSelect,
    setIsInputFocused,
  };
};

import { useNavigation } from '@react-navigation/native';
import { debounce } from 'lodash';
import { useCallback, useState } from 'react';
import { useLazyAutocompleteQuery } from '../../redux';

export const useSearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [predictions, setPredictions] = useState<Place[]>([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const navigation = useNavigation();
  const [fetchPlaces] = useLazyAutocompleteQuery();

  const fetchPredictions = useCallback(async (text: string) => {
    if (!text) {
      setPredictions([]);
      return;
    }

    try {
      const response = await fetchPlaces({ input: text }).unwrap();

      if (response.predictions) {
        setPredictions(response.predictions);
      } else {
        setPredictions([]);
        console.warn('Places API error:', response.status);
      }
    } catch (err) {
      console.error('Autocomplete fetch error', err);
    }
  }, []);

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

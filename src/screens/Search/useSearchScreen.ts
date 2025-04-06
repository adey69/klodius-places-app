import { useNavigation } from '@react-navigation/native';
import { debounce } from 'lodash';
import { useCallback, useState } from 'react';
import {
  PlacesSliceActions,
  previousSearchesSelector,
  useAppDispatch,
  useAppSelector,
  useLazyAutocompleteQuery,
} from '../../redux';

export const useSearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [predictions, setPredictions] = useState<PlacePrediction[]>([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const navigation = useNavigation<RootStackNavigationProp>();

  const [fetchPlaces] = useLazyAutocompleteQuery();

  const dispatch = useAppDispatch();

  const previousSearches = useAppSelector(previousSearchesSelector);

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

  const handleInputChange = useCallback((text: string) => {
    setSearchText(text);
    if (!text) {
      setPredictions([]);
      return;
    }
    debouncedFetch(text);
  }, []);

  const handleSelect = useCallback((place: PlacePrediction) => {
    setSearchText(place.description);
    dispatch(
      PlacesSliceActions.addToPreviousSearches({
        id: place.place_id,
        name: place.description,
      }),
    );
    setPredictions([]);
    navigateToPlaceDetails(
      place.place_id,
      place.structured_formatting.main_text,
    );
  }, []);

  const navigateToPlaceDetails = useCallback(
    (placeId: string, placeName: string) => {
      navigation.navigate('PlaceDetailsScreen', {
        placeId,
        placeName,
      });
    },
    [],
  );

  const removeFromPreviousSearches = useCallback((id: string) => {
    dispatch(PlacesSliceActions.removeFromPreviousSearches(id));
  }, []);

  return {
    searchText,
    isInputFocused,
    predictions,
    previousSearches,
    setSearchText,
    fetchPredictions,
    handleInputChange,
    handleSelect,
    setIsInputFocused,
    navigateToPlaceDetails,
    removeFromPreviousSearches,
  };
};

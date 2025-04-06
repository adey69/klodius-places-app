import { useNavigation } from '@react-navigation/native';
import { debounce } from 'lodash';
import { useCallback, useRef, useState } from 'react';
import {
  PlacesSliceActions,
  previousSearchesSelector,
  useAppDispatch,
  useAppSelector,
  useLazyAutocompleteQuery,
} from '../../redux';

export const useSearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [predictions, setPredictions] = useState<PlacePredictionTransformed[]>(
    [],
  );
  const [isInputFocused, setIsInputFocused] = useState(false);
  const isSelecting = useRef(false);
  const navigation = useNavigation<RootStackNavigationProp>();

  const [fetchPlaces] = useLazyAutocompleteQuery();

  const dispatch = useAppDispatch();

  const previousSearches = useAppSelector(previousSearchesSelector);

  const fetchPredictions = useCallback(
    async (text: string) => {
      if (!text.trim()) {
        setPredictions([]);
        return;
      }
      try {
        const { predictions: fetchedPredictions = [] } = await fetchPlaces({
          input: text,
        }).unwrap();
        setPredictions(fetchedPredictions);
      } catch (error) {
        setPredictions([]);
      }
    },
    [fetchPlaces],
  );

  const debouncedFetch = useCallback(debounce(fetchPredictions, 300), []);

  const handleInputChange = useCallback((text: string) => {
    if (isSelecting.current) {
      isSelecting.current = false;
      return;
    }
    setSearchText(text);
    if (!text) {
      setPredictions([]);
      return;
    }
    debouncedFetch(text);
  }, []);

  const handleSelect = useCallback((place: PlacePredictionTransformed) => {
    isSelecting.current = true;
    setSearchText(place.description);
    dispatch(
      PlacesSliceActions.addToPreviousSearches({
        id: place.id,
        name: place.description,
      }),
    );
    setPredictions([]);
    navigateToPlaceDetails(place.id, place.name);
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
